import axios from 'axios';

export const http = axios.create({
    baseURL: 'https://api.github.com/'
});

export const test = axios.create({
    baseURL: 'https://raw.githubusercontent.com/'
});
