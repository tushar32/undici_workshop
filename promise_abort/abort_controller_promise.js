function createPromise(delay, signal) {
  return new Promise((resolve, reject) => {
    const timeout = setTimeout(() => {
      if (delay === 7000) {
        reject(new Error('This promise was rejected.'));
        controller.abort(); // Abort other promises if this one is rejected
      } else {
        resolve(`Promise resolved after ${delay} milliseconds.`);
      }
      clearTimeout(timeout);
    }, delay);

    signal.addEventListener('abort', () => {
      clearTimeout(timeout);
      console.log('abort')
      reject(new DOMException('Aborted', 'AbortError'));
    },{ once: true});
  });
}

async function someLongRunningTask(signal) {


  if (signal.aborted === true)
    throw new Error('Operation canceled');
  
  const taskDone = new AbortController();
  signal.addEventListener('abort', () => {
    // logic necessary to cancel the async task
  }, {
    once: true,
    signal:signal
  });
  try {
    // ... do the async work
    console.log('cfsdsdsw')

    if (signal.aborted)
      throw new Error('Operation canceled');
    // ... do more async work
  } finally {
    // Remove the abort event listener to avoid
    // leaking memory.
    signal.abort();
  }
}

const controller = new AbortController();
const { signal } = controller;

const promises = [  
  createPromise(7000, signal), // This promise will be rejected
  someLongRunningTask(signal),
  createPromise(3000, signal)
];

// Wrap the logic in a try-catch-finally block
Promise.all(promises.map(p => p.catch(() => undefined)))
.then(results => {
  const successfulResults = results.filter(r => r !== undefined);
  console.log('Successful results:', successfulResults);
})
.catch(err => {
  if (err.name === 'AbortError') {
    console.error('One of the promises was rejected:', err.message);
  } else {
    console.error('Error occurred:', err);
  }
});
