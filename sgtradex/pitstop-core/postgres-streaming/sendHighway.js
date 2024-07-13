

const sendToHighway = async (myStream) => {

    let dataChunk = [];
    myStream.on('data', async (chunk) => {
        dataChunk.push(chunk);
        if (dataChunk.length >= 1000) {
            await processDataChunk(dataChunk);
            dataChunk = [];
        }
    });
  
    myStream.on('end', async () => {
        // Process the remaining data chunk if it's not empty
        if (dataChunk.length > 0) {
            await processDataChunk(dataChunk);
        }
        console.log('Reached end of stream.');
    });
}


const processDataChunk = async (chunk) => {
    try {
        // Process the chunk of data here, for example, send it to another server
        console.log('Processing data chunk:', chunk)
        console.log('End of chunk')
        //await sendToHighway(chunk);
    } catch (err) {
        console.error('Error processing data chunk:', err);
    }
  };
  
export { sendToHighway }  