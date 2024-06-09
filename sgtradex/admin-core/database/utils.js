const { AsyncLocalStorage } = require('async_hooks');

const getAsyncContext = () => {
    const asyncLocalStorage = new AsyncLocalStorage();
    const store = asyncLocalStorage.getStore()
    console.log('store', store)
    return store
}

module.exports = { getAsyncContext }