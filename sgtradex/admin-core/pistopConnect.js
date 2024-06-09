const { request, setGlobalDispatcher, Agent } = require("undici")

setGlobalDispatcher(new Agent({
    pipelining: 10,
    connections: 100,
}))

const pitstopConnect = async(data ) => {  
    request('http://localhost:9000/web-hook/data-elements', {
        method: 'POST',
        body: JSON.stringify(data),
        headers: {
            'Content-Type': 'application/json'
        }
    }).then((response) => {
        console.log(response.body)
    }).catch((error) => {
        console.log(error)
    })
}

module.exports = pitstopConnect