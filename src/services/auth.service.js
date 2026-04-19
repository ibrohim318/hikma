import api from "../api/axios";

export const signupRequest = async (data) => {
    const res = await api.post("/signup", data); 
    return res.data;
};