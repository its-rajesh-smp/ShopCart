import axios from "axios"
import { useEffect, useState } from "react"

function useFetch(path, setLoader) {
    const [data, setData] = useState(null)

    useEffect(() => {
        (async () => {
            const { data: dbResponse } = await axios.post(path)
            setData(dbResponse)
            if (setLoader) { setLoader(false) }
        })()
    }, [path])

    return [data]

}

export default useFetch