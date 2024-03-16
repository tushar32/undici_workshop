import { createServer } from 'http';
import  http  from 'node:http'

import express from 'express'
import { pipeline } from 'stream';

const axiosAgent = new http.Agent({
    keepAlive: true,
    maxSockets: 10
  })

  const headersTimeout = parseInt(process.env.HEADERS_TIMEOUT, 10) || 0
  const bodyTimeout = parseInt(process.env.BODY_TIMEOUT, 10) || 0

const undiciOptions = {
    path: '/',
    method: 'GET',
    headersTimeout,
    bodyTimeout
  }
 const experiments = {}

experiments.axios = () => {
    return handler(resolve => {
      axios.get(dest.url, { responseType: 'stream', httpAgent: axiosAgent }).then(res => {
        res.data.pipe(new Writable({
          write (chunk, encoding, callback) {
            callback()
          }
        })).on('finish', resolve)
      }).catch(console.log)
    })
  }

  experiments.undiciRequest = () => {
    return handler(resolve => {
      dispatcher.request(undiciOptions).then(({ body }) => {
        body
          .pipe(
            new Writable({
              write (chunk, encoding, callback) {
                callback()
              }
            })
          )
          .on('finish', resolve)
      })
    })
  },

async function handler() {
    function createFetch(delay) {

        const promise1 = new Promise((resolve,reject) => {
            
            setTimeout(() => {
                console.log('createFetch promise in', delay)
                    resolve('resolve after'+ delay)
                
                // clearTimeout(timeout);
                }, delay)
        })
        
        return promise1
    }



async function asyncFunction() {
    const items = Array.from(Array(10))


     await pipeline(
         Promise.all(items.map((_,i) => createFetch(100 * i)))
     )
     
    .then((results) => {
        const successfulResults = results.filter(r => r !== undefined);

        console.log('successfulResults',  successfulResults)

        return successfulResults
    }).catch(error=> console.log(error.message))
}

 asyncFunction()
}

const server = createServer((req, res) => {
    experiments.axios().then((body) => {
      res.writeHead(200, { 'Content-Type': 'text/plain' })
      res.end(body)
    }).catch((err) => {
      console.error(err)
      res.statusCode = 500
      res.end(err.message)
    })
  })
  
  server.listen(9000)