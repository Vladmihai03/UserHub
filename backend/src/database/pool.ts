import { Pool } from 'pg';

const pool = new Pool({
  user: 'postgres',
  host: 'localhost',
  database: 'bumbam',
  password: 'admin',
  port: 5432,
});

export default pool;