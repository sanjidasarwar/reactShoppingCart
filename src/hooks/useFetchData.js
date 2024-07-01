import { useEffect } from "react";
import { useState } from "react";

const useFetchData = (url, cb)=>{
    const [data, setData] =useState(null)
    const [error, setError] =useState('')
    const [loading, setLoading] =useState(false)

    useEffect(()=>{  
        fetchData()
    }, [url])

    const fetchData = async function () {
        setLoading(true)
        try{
            const response = await fetch(url)
            const fetchedData =await response.json() 
            if(cb){
                setData(cb(fetchedData))
            }else{
                setData(fetchedData)
            }
            setError('')
            setLoading(false)
        }catch(error){
            console.dir(error.message);
            setError('Server Error')
            setLoading(false)
        }
    }

    return{
        data,
        error,
        loading
    }
}

export default useFetchData;