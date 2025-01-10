import axios from 'axios';

const API = axios.create({
    baseURL: "http://localhost:3001", // Sesuaikan dengan backend Anda
    withCredentials: true,
    headers: {
        "Content-Type": "application/json",
    },
});

// Interceptor untuk menangani error global
API.interceptors.response.use(
    (response) => response,
    (error) => {
        if (error.response?.status === 401) {
            // Token kedaluwarsa, arahkan ke halaman login
            window.location.href = '/';
        }
        return Promise.reject(error);
    }
);

export default API;