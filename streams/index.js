 // file: pipeChain.js
import { createServer } from 'http'
import { pipeline } from 'stream'
 import syncthrough from 'syncthrough'

const handlerStream = async (req) => {
 await pipeline(
    req.body,
    syncthrough(function (chunk) {
        // there is no callback here
        // you can return null to end the stream
        // returning undefined will let you skip this chunk
        return chunk / 2
      }),

     process.stdout
  

 )
}


 const server = createServer((req, res) => {
    handlerStream(req).then((body) => {
      res.writeHead(200, { 'Content-Type': 'text/plain' })
      res.end(body)
    }).catch((err) => {
      console.error(err)
      res.statusCode = 500
      res.end(err.message)
    })
  })

  server.listen(3000)