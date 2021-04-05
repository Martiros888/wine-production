import axios from 'axios';

export const post =async (url,data) =>{
    // const response = await axios.post(`https://wine-production-server.herokuapp.com${url}`,data)
    const response = await axios.post(`http://localhost:8888${url}`,data)
    return response.data
}

export const get =async (url) => {
    // const response = await axios.get(`https://wine-production-server.herokuapp.com${url}`)
    const response = await axios.get(`http://localhost:8888${url}`)
    return response.data
}
