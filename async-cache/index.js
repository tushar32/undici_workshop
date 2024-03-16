import { createCache } from 'async-cache-dedupe'
import { promisify } from 'node:util'

const cache = createCache({
    ttl: 5, // seconds
    stale: 5, // number of seconds to return data after ttl has expired
    storage: { type: 'memory' },
  })
  
  const setTimeOut = promisify(setTimeout)
  cache.define('fetchSomething', async (k) => {

    await setTimeOut(5000)
    
    console.log('query with cache', k)
    // query 42
    // query 24
  
    return { k }
  })
  
  const p1 = cache.fetchSomething(42)
  const p2 = cache.fetchSomething(24)
  const p3 = cache.fetchSomething(42)

  async function fetchSomething(k){
    await setTimeOut(2000)
    
    console.log('query without cache', k)
    // query 42
    // query 24
  
    return { k }
  }

  const pwc1 = fetchSomething(42)
  const pwc2 = fetchSomething(24)
  const pwc3 = fetchSomething(42)
  
  const res1 = await Promise.all([p1, p2, p3])
  const res2 = await Promise.all([pwc1, pwc2, pwc3])
  
  console.log(res1)
  console.log(res2)