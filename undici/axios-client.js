 import axios from 'axios'



 const res = await axios.request({ url: "http://localhost:9000/axios", 
  method: "get",
  baseURL:"/" } )


 console.log('res', res)