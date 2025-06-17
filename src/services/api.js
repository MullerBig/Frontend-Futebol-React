import axios from 'axios'

const api = axios.create({
    baseURL:'https://localhost:7286'
})

export default api