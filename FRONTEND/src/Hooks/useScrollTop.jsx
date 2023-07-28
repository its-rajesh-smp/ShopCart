import { useEffect } from 'react'

function useScrollTop(dependency) {
    useEffect(() => {
        window.scrollTo({ top: 0, behavior: "smooth" })
    }, dependency)
}

export default useScrollTop