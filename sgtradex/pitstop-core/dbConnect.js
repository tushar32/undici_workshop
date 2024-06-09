import pg from 'pg'

const { Pool } = pg

const pool = new Pool({
    user: 'postgres',
    password: 'postgres',
    database: 'demo_pitstop_core',
});

const query = async (text, params) => {
    const start = Date.now()
    const res = await pool.query(text, params)
    const duration = Date.now() - start
    console.log('executed query', { text, duration, rows: res.rowCount })
    return res
 }

 const getClient = () => {
    return pool.connect()
 }

export { query, getClient }