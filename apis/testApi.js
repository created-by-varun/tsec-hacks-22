import axios from 'axios';

export const testApi = axios.create({
    baseURL: 'https://jsonplaceholder.typicode.com/',
    timeout: 1000,
});