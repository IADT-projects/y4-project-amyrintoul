import axios from "axios";

export default axios.create({
    baseURL: 'http://192.168.105.119:3000/api'
})