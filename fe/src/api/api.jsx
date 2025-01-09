import React from 'react'
import axios from 'axios'

const API = axios.create({
    baseURL: "http://localhost:3002",
    withCredentials: true,
    headers: {
        "Content-Type": "application/json",
    },
});

export default API;

