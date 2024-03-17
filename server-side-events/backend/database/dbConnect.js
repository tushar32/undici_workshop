
const mongoose = require('mongoose');

const DBConnect = async() => {
  // const uri =
  //   "mongodb+srv://<user>:<password>@<cluster-url>?retryWrites=true&w=majority";
  //   const client = new MongoClient(uri);
  //   await client.connect();

  console.log("Connecting to MongoDB");

  await mongoose.connect(`mongodb+srv://tusharbarate86:pGbkglfTIhifya9i@cluster0.zjpuldv.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`);  

}




module.exports =  DBConnect
