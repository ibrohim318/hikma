import axios from "axios";

const api = axios.create({
    baseURL: "http://64.23.232.25:8000",
    timeout: 10000,
});

api.interceptors.response.use(
    (res) => res,
    (err) => {
        console.log("API ERROR:", err.response?.data || err.message);
        return Promise.reject(err);
    }
);

export default api;