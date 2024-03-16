
'use strict'
import { createServer } from 'http'

const controller = new AbortController();
const { signal } = controller;

async function handler() {
  function createFetch(delay, signal) {

      const promise1 = new Promise((resolve,reject) => {
          
          const timeout = setTimeout(() => {
                  console.log('createFetch promise in', delay)
                if (delay === 3000) {
                      reject(new Error('This promise was rejected.'));
                    controller.abort(); // Abort other promises if this one is rejected
                    } else {
                      resolve('resolve after'+ delay)
                    }
                   clearTimeout(timeout);
              }, delay)


              signal.addEventListener('abort',() => {

              clearTimeout(timeout)
              reject(new DOMException('Aborted', 'AbortError'));
              })
      })
      
      return promise1
  }

  (async function asyncFunction() {
      const items = Array.from(Array(100))
      // Promise.all([
      //     createFetch(5000, signal), 
      //     createFetch(2000, signal),
      //     createFetch(4000, signal),
      //     createFetch(1000, signal),
      //     createFetch(3000, signal)
      // ])

      // Promise.all(items.map((_,i) => createFetch(1000 * i, signal)))
      const pMap = await import('p-map')
      pMap(items, (_, i) => createFetch(1000 * i, signal), { concurrency: 16 })
        .then((results) => {
          const successfulResults = results.filter(r => r !== undefined);

          console.log('successfulResults',  successfulResults)
      }).catch(error=> console.log(error.message))
})()

  
}





const server = createServer((req, res) => {
  handler().then((body) => {
    res.writeHead(200, { 'Content-Type': 'text/plain' })
    res.end(body)
  }).catch((err) => {
    console.error(err)
    res.statusCode = 500
    res.end(err.message)
  })
})

console.log('server running at port 8080')
server.listen(8080)