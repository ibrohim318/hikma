import api from "./axios";
import { useState } from "react";

export const useSwot = () => {
    const [loading, setLoading] = useState(false);
    const [result, setResult] = useState(null);
    const [error, setError] = useState(null);

    const generateSwot = async (data) => {
        try {
            setLoading(true);
            setError(null);
            const response = await api.post("/thinking-tools/swot", data);
            setResult(response.data);
        } catch (err) {
            setError(err.response?.data || err.message);
        } finally {
            setLoading(false);
        }
    };

    return { generateSwot, loading, result, error, };
};

export default useSwot;