
import { Readable } from 'stream'
import { pipeline } from 'node:stream/promises'
import JSONStream from 'JSONStream'


/* Create a large dummy array with 1000 objects and define a generator function to yield each item from the array.
*/
  // Step 1: Create a large dummy array
const largeDummyArray = Array.from({ length: 1000 }, (v, i) => ({
    id: i + 1,
    name: `User${i + 1}`
  }));
  
  // Step 2: Define the generator function
  function* largeArrayGenerator(array) {
    for (const item of array) {
      yield item;
    }
  }
  
  // Step 3: Create the readable stream from the generator function
  const readableStream = Readable.from(largeArrayGenerator(largeDummyArray));
  
  // Example usage: Pipe the stream to process.stdout to print each item
  readableStream.on('data', (chunk) => {
    console.log(chunk);
  });


// Or extend Readable to Create a readable stream with highWaterMark
 
 export class StreamData extends Readable {
    constructor(generator, config = {}) {
      const { highWaterMark } = config;
      super({ objectMode: true, autoDestroy: true, highWaterMark });
      this.generator = generator();
      this.index = 0;
    }
  
    
    /* Please note that _read() is a private method and should not be called directly.
    // Instead, you should call the read() method to consume data from the stream.
    // if you are extednding the Readable class, you need to implement the _read method
     when you use read() method to consume data from the stream, it will call the _read method

     new Readable({
        read(size) {
            // This is where you should push data into the stream
        }
    });
    */

    // Override _read method to push data into the stream
    _read(size) {
      let item;
      let count = 0;
  
      // Fetch items from the generator until the required size is reached or no more items are left
      while (count < size && (item = this.generator.next()).done === false) {
        this.push(item.value);
        count++;
      }
  
      // If the generator is done, push null to indicate end of stream
      if (item.done) {
        this.push(null);
      }
    }
  }

const sendStream = async () => {

    const readableStream = new StreamData({ highWaterMark: 200 })
    const stringifiedStream = readableStream.pipe(JSONStream.stringify())   

    stringifiedStream.on('data', (chunk) => {

        console.log('chunk', chunk)
    })

    // if you want more control over the stream, you can listen to the events on the stream
    // Listen for the 'readable' event
    stream.on('readable', () => {
        let chunk;
        while (null !== (chunk = stream.read())) {
            console.log(chunk);
        }
    });

     // Handle errors on the stringified stream
     stringifiedStream.on('error', (err) => {
        console.error('Error in stringified stream:', err);
    });

    // Handle the end of the stream
    stringifiedStream.on('end', () => {
        console.log('Stream ended');
        // Perform any cleanup or finalization here
    });

// using pipeline to send the stream to server
    
    try {
        await pipeline(
            readableStream,
            async function * (source) {
                for await (let chunk of source) {
                    console.log('chunk', chunk.toString().toUpperCase() )
                }
              }
            
        )
        console.log('Data sent to server successfully');
    } catch (err) {
        console.error('Failed to send data to server', err);
    }
}

sendStream()

export { sendStream }