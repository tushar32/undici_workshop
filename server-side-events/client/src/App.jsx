import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import JsonView from 'react18-json-view'
import 'react18-json-view/src/style.css'
import 'react18-json-view/src/dark.css'

function App() {
  const [serverData, setServerData] = useState({})


  useEffect(() => {

    const sse =  new EventSource('http://localhost:3000/config-event-stream');
   
    sse.onopen = (event) => {
      console.log('open', event)
    }
    sse.onerror = (event) => {
      console.log('error', event)
    }
    sse.onmessage = (event) => {
      console.log('event', event.data)
      setServerData(JSON.parse(event.data))
    }


    const fetchData = async () => {
      const response = await fetch('http://localhost:3000/config-event')
      const data = await response.json()
      setServerData(data.config)
    }
   fetchData()
  },[])


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

        <div className="card">
          <JsonView src={serverData} collapsed={true}/>
        </div>
    </>
  )
}

export default App
