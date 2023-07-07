import axios from 'axios';

const Axios = axios.create({
    baseURL: 'https://cinecast-api.vercel.app/api',
});

export default Axios;

//https://cinecast-api.vercel.app
//https://cinecast-backend.onrender.com