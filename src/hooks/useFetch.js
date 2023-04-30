import { useState, useEffect } from "react";

function useFetch(url) {
    const [data, setData] = useState([]);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            setLoading(true);
            try {
                const res = await fetch(url);
                if (!res.ok) {
                    setError("Failed to fetch");
                }
                const result = await res.json();
                setData(result.data);
                setLoading(false);
            } catch (error) {
                setError(error.message);
                setLoading(false);
            }
        }

        // Call fetchData
        fetchData();
    }, [url])

    return {
        data, error, loading
    }
}

export default useFetch;