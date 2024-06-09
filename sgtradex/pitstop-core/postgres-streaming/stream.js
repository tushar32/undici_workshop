import QueryStream from 'pg-query-stream'
import JSONStream from 'JSONStream'
import fs, { createReadStream, read } from 'fs'
import { pipeline } from 'node:stream/promises'
import pg from 'pg'
import {Transform } from 'stream'


var pool = new pg.Pool({
    host: 'localhost',
    port: 5432,
    database: 'pitstop_core_demo',
    user: 'postgres',
    password: 'postgres',
})
const writable = fs.createWriteStream('metering-data.csv');

const transformStream = new Transform({
    objectMode: true,
    transform(row, encoding, callback) {
      row.date = new Date().toString();
      callback(null, `${row.row_number}, ${row.id}, ${row.name}, ${row.date}` + "\n");
    },
  });

async function queryStream (limit) {
    try {
  // Get the PostgreSQL client from the pool
  const client = await pool.connect()

  // The slow query we want to run
  const slowQuery = `
    WITH start_time AS (SELECT pg_sleep(1) AS start_time)
    SELECT items.id, desks.name, row_number() OVER (ORDER BY items.id) AS row_number
    FROM items
    INNER JOIN desks ON desks.id = items.desk_id
    CROSS JOIN start_time

    LIMIT $1;
  `

  // Create a new stream that runs the query
  const query = new QueryStream(slowQuery, [limit], {
    highWaterMark: 500
  })

  // Run the query and return the stream
  const stream = client.query(query)
  
  //console.log('Query running',stream)
   // Add error listeners to the streams
   stream.on('error', (err) => {
    console.error('Stream error', err);
    client.release();
});

  transformStream.on('error', (err) => console.error('Transform stream error', err))
  writable.on('error', (err) => console.error('Write stream error', err))
  stream.on('end', () => { client.release() })
 
  stream.pipe(JSONStream.stringify()) // return the data to FE using JSONStream
   // large data json array
//    const largeDataArray = [
//     { id: 1, name: 'John' },
//     { id: 2, name: 'Doe' }
//   ]
//    // Push each item of the array as a stringified JSON object into the readable stream
//    largeDataArray.forEach(item => readableStream.push((item)+ '\n'))
  





  // Here we are writing a data to file
    // await pipeline(
    //   stream,
    //   transformStream,
    //   async function* (source) {
    //     source.setEncoding('utf8');  // Work with strings rather than `Buffer`s.
    //     for await (const chunk of source) {
    //         yield await sendToHighway(chunk);
    //       }
    //   }
    // )
    
    console.log('Pipeline succeeded')
  } catch (err) {
    console.error('Pipeline failed', err)
  } finally {
    await pool.end()
  }

  // return stream.pipe(JSONStream.stringify()).pipe(writable)
}


queryStream(300000)




