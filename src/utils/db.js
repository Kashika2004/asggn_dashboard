import { Pool } from 'pg';

const pool = new Pool({
  user: 'postgres',
  host: '127.0.0.1',
  database: 'dashboard',
  password: '1234',
  port: 5432, // Default PostgreSQL port
});

export const query = (text, params) => pool.query(text, params);
