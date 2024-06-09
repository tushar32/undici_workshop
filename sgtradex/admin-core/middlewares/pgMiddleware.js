
const pg = require('pg')
const { Pool } = pg
const { AsyncLocalStorage } = require('async_hooks');
const asyncLocalStorage = new AsyncLocalStorage();


  
  const pgConnect = (req, res, next) => {

    const pool = new Pool({
        user: 'demo',
        password: 'postgres',
        host: '0.0.0.0',
        port: 5433
      });
      
    // the pool will emit an error on behalf of any idle clients
// it contains if a backend error or network partition happens
        pool.on('error', (err, client) => {
            console.error('Unexpected error on idle client', err)
            process.exit(-1)
        })

    pool.connect((err, client, done) => {
        console.log('Connected to the database',err)

      if (err) {
        return res.status(500).json({ message: 'Failed to connect to the database' });
      }
      const clientObj = { dbClient: client, dbDone: done}

      console.log('Connected to the database',client)
      asyncLocalStorage.run(clientObj, () => {
        next();
      });
    });
  };

module.exports = pgConnect