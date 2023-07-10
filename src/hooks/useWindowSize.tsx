import { useEffect, useState } from "react"

export default function useWindowSize() {
    const [size, setSize] = useState({ w: 0, h: 0 })

    useEffect(() => {
        const handleResize = () => {
            setSize({
                w: window.innerWidth,
                h: window.innerHeight
            })
        }
        window.addEventListener('resize', handleResize)

        handleResize()

        return () => window.removeEventListener('resize', handleResize)
    }, [])

    return size
}