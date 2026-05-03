
import API from "./axios";

export const registerUser = (type, data) => {
    return API.post(`/register/${type}`, data);
};


export const loginUser = (data) => {
    return API.post("/login", data);
};