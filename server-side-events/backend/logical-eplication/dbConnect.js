
const Pool = require('pg-pool');

const pool = new Pool({
    user: 'demo',
    password: 'postgres',
    host: '0.0.0.0',
    port: 5433
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


module.exports = { query, getClient }