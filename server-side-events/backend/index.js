const express = require('express');
const DBConnect = require('./database/dbConnect');
const ConfigCache = require('./database/models/ConfigCache');
const cors = require('cors');

const app = express();
const port = 3000;

DBConnect()

app.use(express.urlencoded({ extended: true }));
app.use(express.json({
    limit: '50mb'
}));

app.use(cors())

const sendData = async (req, res) => {
    try {
        const config = await ConfigCache.findOne().sort({ createdAt: 'desc' }); 
        res.json(config);


    } catch (error) {
        console.log(error)
    }
}

app.get('/config-event', sendData);

app.get('/config-event-without-db', (req, res) => {
    res.setHeader('Content-Type', 'text/event-stream');
    res.setHeader('Cache-Control', 'no-cache');
    res.setHeader('Connection', 'keep-alive');

  const sendEvent = (data) => {
    res.write(`data: ${JSON.stringify(data)}\n\n`);
  };
 

  const handleChange = (change) => {
    console.log('change', change.operationType)
    if (change.operationType === 'insert') {
      //sendEvent(change.fullDocument);
      sendEvent(change.fullDocument);
    }
  };

  req.on('close', () => {
    changeStream.close();
    res.end();
  });
});

app.get('/config-event-stream', (req, res) => {
    res.setHeader('Content-Type', 'text/event-stream');
    res.setHeader('Cache-Control', 'no-cache');
    res.setHeader('Connection', 'keep-alive');

  const sendEvent = (data) => {
    res.write(`data: ${JSON.stringify(data)}\n\n`);
  };
 

  const handleChange = (change) => {
    console.log('change', change.operationType)
    if (change.operationType === 'insert') {
      //sendEvent(change.fullDocument);
      sendEvent(change.fullDocument);
    } else {
      sendData()
    }
  };

  const changeStream = ConfigCache.watch([], { fullDocument: 'updateLookup' });
  changeStream.on('change', handleChange);

  req.on('close', () => {
    changeStream.close();
    res.end();
  });
});



app.post('/config', async (req, res) => {

    try {
        const config = req.body;
        const newConfig = new ConfigCache({ config });
        await newConfig.save();
        res.json(newConfig);

    } catch (error) {
        console.log(error)
    }

})

app.put('/config/:id', async (req, res) => {

    try {      

        const config = req.body;

        const id = req.params.id;
        console.log('put request', id)

         await ConfigCache.findByIdAndUpdate(id, { config :config } )

        //await ConfigCache.updateOne({ id: id} , { config: config });

        res.json({message: 'Config Updated'});

    } catch (error) {
        console.log(error)
        res.json({message: error.message});
    }       


})



app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});


