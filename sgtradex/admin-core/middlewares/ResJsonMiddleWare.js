
const fastJson = require('fast-json-stringify');

const  resJsonMiddleWare = (req, res, next) => {

    res.json = (response, SchemaConfig) => {
        res.setHeader('Content-Type', 'application/json');
        if(SchemaConfig === undefined) {
            const stringify =  JSON.stringify(response);
            res.end(stringify);
        } else {
            const { data } = response;
            const stringify = fastJson(SchemaConfig);
            const jsonData = stringify(data);
            res.end(jsonData);
        }
    }
    next();
}

module.exports = resJsonMiddleWare;