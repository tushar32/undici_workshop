 const postgres = require('postgres')
const pitstopConnect = require('../pistopConnect')

const subscriber = async () => {
  const sql = postgres({
    debug: true,
    user: 'demo',
    password: 'postgres',
    host: '0.0.0.0',
    port: 5433,
    publications: [
      'dataelement_document',
      'dataelement_update_only'
    ]
  })

  const eventPattern = '*:dataelement'
  const { unsubscribe } = await sql.subscribe(
    eventPattern,
    (row, { command, relation, key, old }) => {
      console.log('Received event:',{
        command,
        row
      })
      pitstopConnect({
        command,
        row
      })
    },

    function onConnect () {
      // Callback on initial connect and potential reconnects
      console.log('Connected to the publication')
    }
  )

  process.on('SIGINT', async () => {
    await unsubscribe()
    process.exit()
  })
}

module.exports = subscriber