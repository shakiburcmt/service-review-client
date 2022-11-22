import { useEffect } from "react"

const useTitle = title => {
    useEffect(() => {
        document.title = `${title} - service review`;
    }, [title])
}

export default useTitle;