import axios from 'axios';

const Axios = axios.create({
    baseURL: 'https://cinecast-backend.onrender.com/api',
});

export default Axios;