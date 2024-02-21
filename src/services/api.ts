import axios from 'axios'


const publicKey = '19bb979fb2444ff9653b8dcaedb04cf6'

const hash = '1b572234c3e7464d0d38e8b3caf16033'

const api = axios.create({
    baseURL: 'http://gateway.marvel.com/v1/public/',
    params: {
        ts: '1',
        apikey: publicKey,
        hash,
    }
})

export default api