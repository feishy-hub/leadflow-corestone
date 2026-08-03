import { Pool } from 'pg';

const pool = new Pool({ connectionString: process.env.DATABASE_URL });

let ensured = false;
async function ensureTable() {
  if (ensured) return;
  await pool.query(`
    CREATE TABLE IF NOT EXISTS app_data (
      table_name TEXT PRIMARY KEY,
      data JSONB NOT NULL,
      updated_at TIMESTAMP NOT NULL DEFAULT now()
    );
  `);
  ensured = true;
}

export default async function handler(req, res) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
  if (req.method === 'OPTIONS') return res.status(200).end();

  try {
    await ensureTable();

    if (req.method === 'GET') {
      const table = req.query.table;
      if (!table) return res.status(400).json({ error: 'table query parameter is required' });
      const result = await pool.query('SELECT data FROM app_data WHERE table_name = $1', [table]);
      return res.status(200).json({ rows: result.rows[0]?.data ?? [] });
    }

    if (req.method === 'POST') {
      const { table, rows } = req.body || {};
      if (!table || typeof table !== 'string') {
        return res.status(400).json({ error: 'table (string) is required' });
      }
      if (!Array.isArray(rows)) {
        return res.status(400).json({ error: 'rows (array) is required' });
      }
      await pool.query(
        `INSERT INTO app_data (table_name, data, updated_at)
         VALUES ($1, $2, now())
         ON CONFLICT (table_name) DO UPDATE SET data = $2, updated_at = now()`,
        [table, JSON.stringify(rows)]
      );
      return res.status(200).json({ saved: true, table, count: rows.length });
    }

    return res.status(405).json({ error: 'Method not allowed' });
  } catch (err) {
    console.error('Error in /api/data:', err);
    return res.status(500).json({ error: err.message });
  }
}
