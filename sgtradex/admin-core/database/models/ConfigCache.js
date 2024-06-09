const { mongoose } = require("mongoose");

const { Schema } = mongoose;


const configCacheSchema = new Schema({
    config: Object,
    createdAt: {
      type: Date,
      default: Date.now
    }
  });
  
  
  
  
module.exports = ConfigCache = mongoose.model('ConfigCache', configCacheSchema);

