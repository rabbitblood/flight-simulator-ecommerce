import { useState, useEffect } from 'react'

const useWindowWidth = () => {
    const [width, setWidth] = useState(window?.innerWidth || 1200)

    useEffect(() => {
        if (!window) return
        const handleResize = () => setWidth(window.innerWidth)
        window.addEventListener('resize', handleResize)
        return () => window.removeEventListener('resize', handleResize)
    }, [])

    return width
}

export default useWindowWidth
