import { useEffect, useState } from "react";
import { databases } from "../AppWrite/appwriteconfig";

function useFetch(databaseId, collectionId, documentId, setLoader) {
    const [state, setState] = useState(null)

    useEffect(() => {
        (async () => {
            try {
                const databaseResponse = await databases.getDocument(databaseId, collectionId, documentId)
                setState(databaseResponse)
            } catch (error) {
                console.log(error);
            }
            setLoader(false)
        })()

    }, [databaseId, collectionId, documentId])

    return state
}

export default useFetch;