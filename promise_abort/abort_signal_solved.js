function createPromise(delay, signal) {
    return new Promise((resolve, reject) => {
      const timeout = setTimeout(() => {
        if (delay === 2000) {
          reject(new Error('This promise was rejected.'));
          controller.abort(); // Abort other promises if this one is rejected
        } else {
          resolve(`Promise resolved after ${delay} milliseconds.`);
        }
        clearTimeout(timeout);
      }, delay);
      
      // Listen for abort signal to handle abortion
      signal.addEventListener('abort', () => {
        clearTimeout(timeout);
        console.log('abort')
        reject(new DOMException('Aborted', 'AbortError'));
      },{ once: true});
    });
    
  }
  
  const controller = new AbortController();
  const { signal } = controller;
  
  const promises = [
    createPromise(1000, signal),
    createPromise(2000, signal), // This promise will be rejected
    createPromise(3000, signal)
  ];
  
  Promise.all(promises.map(p => p.catch(() => undefined)))
    .then(results => {
      const successfulResults = results.filter(r => r !== undefined);
      console.log('Successful results:', results);
    })
    .catch(err => {
      if (err.name === 'AbortError') {
        console.error('One of the promises was rejected:', err.message);
      } else {
        console.error('Error occurred:', err);
      }
    });
  