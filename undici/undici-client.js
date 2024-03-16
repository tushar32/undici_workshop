import { request } from 'undici'



const { body } = await request("http://localhost:9000/undici")


console.log('body', body)