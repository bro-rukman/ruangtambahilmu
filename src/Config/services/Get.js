import axios from 'axios'
// import {RootPath} from './Config'

const Get = (path) =>{
    const promise = new Promise((resolve,reject)=>{
        axios.get(`http://localhost:3004/categories`).then((res)=>{
            resolve(res.data)
        },(err)=>{
            reject(err)
        });
    })
    return promise;
}
export default Get;