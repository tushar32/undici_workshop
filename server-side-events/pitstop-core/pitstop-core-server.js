import express from 'express';
import cors from 'cors';
//import { EventSource } from 'undici';
import EventSource  from 'eventsource';

const app = express();
const port = 9000;


app.use(express.urlencoded({ extended: true }));
app.use(express.json({
    limit: '50mb'
}));

app.use(cors())


async function handler() {
    const evenSource = new EventSource('http://localhost:3000/config-event-without-db')
    evenSource.onmessage = (event) => {
        
        console.log('event data', event.data)        

       // saveInDB(event.data)//pitstop core
        //evenSource.close();

    }
    evenSource.onopen = (event) => {
        console.log('open', event)
    }

    evenSource.onerror = (event) => {
        console.log('error', event)
    }
      
}

handler().then(() => {
    console.log('handler')
}).catch((err) => {
    console.error(err)
})
// const server = createServer((req, res) => {
//     handler().then((body) => {
//       res.writeHead(200, { 'Content-Type': 'text/plain' })
//       res.end(body)
//     }).catch((err) => {
//       console.error(err)
//       res.statusCode = 500
//       res.end(err.message)
//     })
//   })
//   handler()
//   server.listen(9000)
app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
  });