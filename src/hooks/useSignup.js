import { useState } from "react";
import { signupRequest } from "../services/auth.service";

const useSignup = () => {
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const signup = async (data) => {
        try {
            setLoading(true);
            setError(null);

            const res = await signupRequest(data);
            return res;

        } catch (err) {
            setError(err.response?.data || "Xatolik");
            throw err;
        } finally {
            setLoading(false);
        }
    };

    return { signup, loading, error };
};

export default useSignup;