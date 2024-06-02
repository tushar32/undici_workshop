const dbConnect = require('./dbConnect')

const insertProducer = async (data) => {

    const { dataElementName, dataElementSchema, dataType } = data
  
    const res = await dbConnect.query('INSERT INTO dataelement (ElementName, ElementSchema,DataType) VALUES ($1, $2, $3) RETURNING id', [dataElementName, dataElementSchema, dataType])
    lastId = res.rows[0].id
    console.log(`Inserted new row: ${lastId}`)
}


const updateProducer = async (data) => {

    const { dataElementName, dataElementSchema, id } = data

    const res = await dbConnect.query('UPDATE dataelement SET ElementName = $1, ElementSchema = $2 WHERE id = $3 RETURNING id', [dataElementName, dataElementSchema,dataType, id])  
}

module.exports = { insertProducer, updateProducer }

