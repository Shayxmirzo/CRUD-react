import axios from "axios";
import { useEffect, useState } from "react"


function useGetData(url) {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const abortController = new AbortController();

        const fetchData = async () => {
            try {
                const res = await axios.get(
                    `https://6a26c767a84f9d39e907e1b6.mockapi.io/${url}`,
                    {
                        signal: abortController.signal,
                    }
                );

                setData(res.data);
                setLoading(false);
            } catch (err) {
                if (err.code !== "ERR_CANCELED") {
                    console.error(err);
                }
            }
        };

        fetchData();

        return () => abortController.abort();
    }, [url]);

    return {
        data,
        loading,
        setData,
    };
}

export default useGetData