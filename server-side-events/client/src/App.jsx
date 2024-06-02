import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import JsonView from 'react18-json-view'
import 'react18-json-view/src/style.css'
import 'react18-json-view/src/dark.css'
import fs from 'fs/promises';
const CHUNK_SIZE = 1024;

function App() {
  const [serverData, setServerData] = useState({})


  // useEffect(() => {

  //    //const sse =  new EventSource('http://localhost:3000/config-event-stream');
  //  const sse =  new EventSource('http://localhost:3000/config-event-without-db');
   
  //   sse.onopen = (event) => {
  //     console.log('open', event)
  //   }
  //   sse.onerror = (event) => {
  //     console.log('error', event)
  //   }
  //   sse.onmessage = (event) => {
  //     console.log('event', event.data)
  //     setServerData(JSON.parse(event.data))
  //   }

  //   const fetchData = async () => {
  //     const response = await fetch('http://localhost:3000/config-event')
  //     const data = await response.json()
  //     setServerData(data.config)
  //   }
  //  fetchData()
  // },[])

  const createBackpressureSocket = (host, port) => {
    const ws = new WebSocket('http://localhost:3000/', 3000);

    ws.onopen = () => {
      console.log('Connected to server');
    };

    ws.onclose = () => {
      console.log('Disconnected from server');
    }

    ws.onerror = (error) => {
      console.log('Error:', error);
    }

    ws.onmessage = (event) => {
      console.log('Message:', event.data);
    }
    
    return ws;

  }


  async function makeReadableFileStream(filename) {
    let fileHandle;
    let position = 0;

    return new ReadableStream({
      async start() {
        console.log('start')

        fileHandle = await fs.open("C:/Users/TusharSudhakarBarate/Downloads/Platformatic _ Node.js Streams Masterclass _ April 24.pdf", "r");
        console.log('start', fileHandle)

      },
  
      async pull(controller) {
        const buffer = new Uint8Array(CHUNK_SIZE);
  
        const { bytesRead } = await fileHandle.read(buffer, 0, CHUNK_SIZE, position);
        if (bytesRead === 0) {
          await fileHandle.close();
          controller.close();
        } else {
          position += bytesRead;
          controller.enqueue(buffer.subarray(0, bytesRead));
        }
      },
  
      cancel() {
        return fileHandle.close();
      }
    });
  }
  
  function makeReadableBackpressureSocketStream(stream) {
    const socket = createBackpressureSocket();
  
    return new ReadableStream({
      start(controller) {
        socket.ondata = event => {
          controller.enqueue(event.data);
  
          if (controller.desiredSize <= 0) {
            // The internal queue is full, so propagate
            // the backpressure signal to the underlying source.
            socket.readStop();
          }
        };
  
        socket.onend = () => controller.close();
        socket.onerror = () => controller.error(new Error("The socket errored!"));
      },
  
      pull() {
        // This is called if the internal queue has been emptied, but the
        // stream's consumer still wants more data. In that case, restart
        // the flow of data if we have previously paused it.
        socket.readStart();
      },
  
      cancel() {
        socket.close();
      }
    });
  }

  const handleFileUpload = async (e) => {
    const file = e.target.files[0];

    console.log(file)
    const formData = new FormData();
    formData.append('file', file);
    const stream = file.stream();

    // makeReadableBackpressureSocketStream(stream)
   const fileStream = await makeReadableFileStream(file.name)

   console.log(fileStream)

  }

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>

        {/* <div className="card">
          <JsonView src={serverData} collapsed={true}/>
        </div> */}

        <div className="card">
          <input type="file" onChange={(e) => handleFileUpload(e) } />
        </div>  

    </> 
  )
}

export default App
