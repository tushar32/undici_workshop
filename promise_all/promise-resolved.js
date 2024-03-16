const { createServer } = require('http')
const { AbortController } = require('abort-controller');

const controller = new AbortController();
const { signal } = controller;

async function handler() {
    function createFetch(delay, signal) {

        const promise1 = new Promise((resolve,reject) => {
            
            const timeout = setTimeout(() => {
                    console.log('createFetch promise in', delay)
               if (delay === 800) {
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

    // in case of async function use like this
    async function someLongRunningFunction(options) {
            const { signal } = { ...options };
            if (signal.aborted === true)
            throw new Error('Operation canceled');
            
            const taskDone = new AbortController();
            signal.addEventListener('abort', () => {
            // logic necessary to cancel the async task
            }, {
            once: true,
            signal: taskDone.signal
            });
            try {
            // ... do the async work
            if (signal.aborted)
                throw new Error('Operation canceled');
            // ... do more async work
            } finally {
            // Remove the abort event listener to avoid
            // leaking memory.
            taskDone.abort();
            }
    }



async function asyncFunction() {
    const items = Array.from(Array(10))
    // Promise.all([
    //     createFetch(5000, signal), 
    //     createFetch(2000, signal),
    //     createFetch(4000, signal),
    //     createFetch(1000, signal),
    //     createFetch(3000, signal)
    // ])

      Promise.all(items.map((_,i) => createFetch(100 * i, signal)))
    .then((results) => {
        const successfulResults = results.filter(r => r !== undefined);

        console.log('successfulResults',  successfulResults)
    }).catch(error=> console.log(error.message))
}

 asyncFunction()
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
  
  server.listen(9000)
