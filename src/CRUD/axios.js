import axios from "axios";

const api = axios.create({
    baseURL: "http://64.23.232.25",
    headers: {
        "Content-Type": "application/json",
    },
});

export default api;