// src/hooks/useLogin.js
import { useState } from "react";
import api from "../api/api";

const useLogin = () => {
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const [user, setUser] = useState(null);

    const login = async (data) => {
        try {
            setLoading(true);
            setError(null);
            const res = await api.post("/login", data);
            if (res.data.token) {
                localStorage.setItem("token", res.data.token);
            }
            setUser(res.data.user);
            return res.data;
        } catch (err) {
            setError(err.response?.data?.message || "Login xatolik");
        } finally {
            setLoading(false);
        }
    };

    return { login, loading, error, user };
};

export default useLogin;