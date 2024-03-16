const util = require('util')
const sleep = util.promisify(setTimeout)

const timeout = delay =>
  new Promise((resolve, reject) => {
    setTimeout(() => {
        console.log('b')
        resolve("done!")
    }, delay)
  })

  const promises = [
    timeout(5000),
    Promise.reject('a')
  ]
 
Promise.all(promises.map(p => p.catch(() => undefined)))
   .then(res => console.log(res))
  .catch((err) => console.log(err))
