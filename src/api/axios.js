import axios from "axios";

const API = axios.create({
    baseURL: "http://64.23.232.25:8000",
});

// 🔐 REQUEST INTERCEPTOR
API.interceptors.request.use((config) => {
    const token = localStorage.getItem("token");

    if (token) {
        config.headers.Authorization = `Bearer ${token}`;
    }

    return config;
});

// 🚨 RESPONSE INTERCEPTOR
API.interceptors.response.use(
    (response) => response,
    (error) => {
        if (error.response?.status === 401) {
            console.log("Session tugadi");

            // 🔥 tokenni o‘chiramiz
            localStorage.removeItem("token");

            // 🔥 login page ga qaytaramiz
            window.location.href = "/";
        }
        
        return Promise.reject(error);
    }
);

export default API;