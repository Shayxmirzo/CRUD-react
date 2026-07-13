import axios from "axios";
import { useEffect, useState } from "react"


function useGetData(url) {

    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        const abortConstroller = new AbortController();
        const fetchData = async () => {
    try {
        const res = await axios.get(
  `https://6a26c767a84f9d39e907e1b6.mockapi.io/${url}`,
  {
    signal: abortConstroller.signal,
  }
);
        setData(res.data);
        setLoading(false)
    } catch (err) {
        console.log(err);
    }
   
}; fetchData()
return() =>{
    abortConstroller.abort()
}
    }, [url])
   
  return{data, loading}
}

export default useGetData