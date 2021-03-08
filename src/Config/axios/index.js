import axios from 'axios'
import errorHandle from './errorHandle'


const instance = axios.create({
    baseURL : `${process.env.NEXT_PUBLIC_API_HOST}`,
});

instance.interceptors.response.use((response)=>response.data,errorHandle);

export default instance;