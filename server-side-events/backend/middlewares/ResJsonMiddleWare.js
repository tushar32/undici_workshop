
const fastJson = require('fast-json-stringify');

const  resJsonMiddleWare = (req, res, next) => {

    res.json = (response, SchemaConfig) => {
        // console.log ('SchemaConfig', SchemaConfig)+
        if(SchemaConfig === undefined) return res.json(response, {})
        const { data } = response;
        const stringify = fastJson(SchemaConfig);
        const jsonData = stringify(data);

        res.setHeader('Content-Type', 'application/json');
        res.end(jsonData);
    }
    next();
}

module.exports = resJsonMiddleWare;