import axios from 'axios'

const getBanner = () => axios.get('http://127.0.0.1:3000/home/banner')


export { getBanner }