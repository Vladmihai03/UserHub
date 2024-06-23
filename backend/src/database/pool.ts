import { Pool } from 'pg';
import dotenv from 'dotenv';

dotenv.config();

// Log environment variables to check if they are loaded correctly
console.log('DB User:', process.env.DB_USER);
console.log('DB Host:', process.env.DB_HOST);
console.log('DB Database:', process.env.DB_DATABASE);
console.log('DB Password:', process.env.DB_PASSWORD);
console.log('DB Port:', process.env.DB_PORT);

const pool = new Pool({
  user: process.env.DB_USER,
  host: process.env.DB_HOST,
  database: process.env.DB_DATABASE,
  password: process.env.DB_PASSWORD,
  port: Number(process.env.DB_PORT),
});

export default pool;
