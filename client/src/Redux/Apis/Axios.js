import axios from 'axios';

const Axios = axios.create({
    baseURL: 'http://localhost:5555/api',
});

export default Axios;