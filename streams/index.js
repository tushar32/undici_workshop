 // file: pipeChain.js
 import { ReadableStream, WritableStream, TransformStream } from 'stream/web'

 import Stream from 'stream'
 import { pipeline } from 'node:stream/promises'

 const ReadStream = new Stream.Readable()
 const WriteStream = new Stream.Writable()
 import syncthrough  from 'syncthrough'
 import { request, Agent } from undici

 
 const undiciAgent = new Agent({
    
 })

 function createFetch(delay) {

    const promise1 = new Promise((resolve) => {
        
           setTimeout(() => {
                console.log('createFetch promise in', delay)
                    resolve('resolve after'+ delay)
               }, delay)
    })
    
    return promise1
}

 


 async function getPromises() {

     
    
   
 }

 await pipeline(
    getPromises(),
    syncthrough(function (chunk) {
        // there is no callback here
        // you can return null to end the stream
        // returning undefined will let you skip this chunk
        return chunk / 2
      }),

     process.stdout
  

 )

 // Create a readable stream
 const readbleStream = new ReadableStream(
     {
         start(controller) {
             console.log("> Getting Started")
             controller.enqueue("Hello!");
             controller.enqueue("I am readbale stream");
             controller.enqueue("It's done");
             controller.enqueue("Enough for now");
             controller.close()
         },
         cancel() {
             console.log("!Stop Reading Chunks!")
         }
     }
 );


 // Create a transform stream
 const transformStream = new TransformStream({
     start(controller) {
         console.log("> Transformer Started")
     },
     transform(chunk, controller) {
         console.log("> Transforming Chunk");
         // converting chunk to uppercase
         controller.enqueue(chunk.toUpperCase());
     },
     flush(controller) {
         controller.terminate()
         console.log("!Controller Terminated!");
     }
 });


 // Writable Stream use this array to write data
 let writeArray = []


 // Create a writable stream
 const writableStream = new WritableStream({
     start(controller) {
         console.log("> Writable Stream Started")
     },
     write(chunk, controller) {
         writeArray.push(chunk)
         console.log(writeArray)
     }
 });


 // Create pipe chains
 readbleStream.pipeThrough(transformStream).pipeTo(writableStream)


