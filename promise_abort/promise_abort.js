const util = require('util')
const sleep = util.promisify(setTimeout)
const controller = new AbortController();
const { signal } = controller;

const timeout = (delay, signal) =>
  new Promise((resolve, reject) => {
    setTimeout(() => {
        console.log('b')
        resolve("done!")
    }, delay)
    // Listen for abort signal to handle abortion
    signal.addEventListener('abort', () => {
        clearTimeout(timeout);
        reject(new DOMException('Aborted', 'AbortError'));
      });
  })

  const timeoutReject = (delay, signal) =>
  new Promise((resolve, reject) => {
    setTimeout(() => {
        console.log('b')
        reject('error')
        controller.abort(); // Abort other promises if this one is rejected
    }, delay)
  })



Promise.all([
    timeout(5000,signal),
    timeoutReject(1000, signal)
  ]).then(res => console.log(res))
  .catch((err) => console.log(err))
