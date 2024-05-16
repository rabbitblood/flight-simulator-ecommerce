import { useState, useEffect } from 'react'

const useElementWidth = (elementRef) => {
    const [width, setWidth] = useState(0)

    useEffect(() => {
        const handleResize = () => {
            if (elementRef.current) {
                setWidth(elementRef.current.parentElement.offsetWidth)
            }
        }
        handleResize()
        window.addEventListener('resize', handleResize)
        return () => window.removeEventListener('resize', handleResize)
    }, [elementRef.current])

    return width
}

export default useElementWidth
