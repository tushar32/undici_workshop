const { query } = require("./dbConnect")

const setupPulisher = async () => { 
  await createPublicationIfNotExists('dataelement_document', "TABLE DataElement WHERE (DataType = 'DOCUMENT');")
  await createPublicationIfNotExists('dataelement_update_only', "TABLE DataElement WITH (publish = 'update');")


  async function createPublicationIfNotExists (pubName, condition) {
    const pub = await query('SELECT * FROM pg_publication WHERE pubname = $1', [pubName])
    if (!pub.rows.length) {
      await query(`CREATE PUBLICATION ${pubName} FOR ${condition}`)
      console.log(`Created publication ${pubName}`)
    } 
    // else {
    //   await query(`ALTER PUBLICATION ${pubName} SET ${condition}`)
    //   console.log(`Updated publication ${pubName}`)
    // }
  }
}

module.exports = setupPulisher