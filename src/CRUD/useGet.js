import { useEffect, useState } from "react";
import api from "./axios";

export const useGet = (url) => {
    const [data, setData] = useState(null)
    const [loader, setLoader] = useState(true)
    const [err, setErr] = useState(null)

    useEffect(() => {
        const fetchData = async () => {
            try {
                setLoader(true)
                const response = await api.get(url)
                setData(response.data)
                setErr(null)
            } catch (err) { setErr(err.message) }
            finally { setLoader(false) }
        }
        fetchData()
    }, [url])
    return { data, loader, err }
}