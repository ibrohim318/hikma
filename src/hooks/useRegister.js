import { useState } from "react";
import { setCookie } from "../utils/cookie";
import { registerUser } from "../api/auth";

// ─── Cookie yordamchi funksiyalar ───


const useRegister = () => {
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const register = async (role, data) => {
        if (loading) return;
        try {
            setLoading(true);
            setError(null);
            const res = await registerUser(role, data);

            const token = res.data?.token
                || res.data?.access_token
                || res.data?.access
                || res.data?.key;

            if (token) {
                setCookie("token", token);
            } else {
                setCookie("token", "authenticatedaa");
            }

            return res.data;
        } catch (err) {
            setError(err.response?.data?.message || "Xatolik");
            throw err;
        } finally {
            setLoading(false);
        }
    };

    return { register, loading, error };
};

export default useRegister;