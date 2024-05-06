import axios from 'axios'

const instance = axios.create({
    baseURL: "https://messaging-app-backend1-6c6b10356504.herokuapp.com/"
})

export default instance
