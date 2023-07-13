import { useEffect } from "react";

function useStopScroll() {
    useEffect(() => {
        document.querySelector("body").classList.add('STOPSCROLL')
        return () => {
            document.querySelector("body").classList.remove('STOPSCROLL')
        }
    }, [])
}

export default useStopScroll;