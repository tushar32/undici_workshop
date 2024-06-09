
import { Readable } from 'stream'
import { pipeline } from 'node:stream/promises'
import JSONStream from 'JSONStream'


// Create a large dummy array with 1000 objects
const largeDummyArray = Array.from({ length: 1000 }, (v, i) => ({
    id: i + 1,
    name: `User${i + 1}`
  }));

 export class StreamData  extends Readable {
    constructor(config) {
        const { highWaterMark } = config
        super({ objectMode: true ,  autoDestroy: true, highWaterMark: highWaterMark })
        this.data = largeDummyArray
        this.index = 0;

    }
    _read (size) {

        console.log('size', size)
        console.log(' this.index', this.index)
        const end = Math.min(this.index + size, this.data.length);
        for (let i = this.index; i < end; i++) {
          this.push(this.data[i]);
        }
        this.index = end;
        if (this.index >= this.data.length) {
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

     // Handle errors on the stringified stream
     stringifiedStream.on('error', (err) => {
        console.error('Error in stringified stream:', err);
    });

    // Handle the end of the stream
    stringifiedStream.on('end', () => {
        console.log('Stream ended');
        // Perform any cleanup or finalization here
    });


    // try {
    //     await pipeline(
    //         readableStream,
    //         async function * (source) {
    //             for await (let chunk of source) {
    //                 console.log('chunk', chunk.toString().toUpperCase() )
    //             }
    //           }
            
    //     )
    //     console.log('Data sent to server successfully');
    // } catch (err) {
    //     console.error('Failed to send data to server', err);
    // }
}

sendStream()

export { sendStream }