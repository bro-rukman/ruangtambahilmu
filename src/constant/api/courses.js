import axios from 'src/Config/axios/index'
export default{
    all : ()=> axios.get(`/courses`).then(res=>res.data),
    details : (id) => axios.get(`/courses/${id}`).then(res=>res.data),
}