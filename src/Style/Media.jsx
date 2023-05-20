import { useMediaQuery } from 'react-responsive'

export const ShowOnDesktop = ({ children }) => {
    const isDesktop = useMediaQuery({ minWidth: 992 })
    return isDesktop ? children : null
}
export const Tablet = ({ children }) => {
    const isTablet = useMediaQuery({ minWidth: 768, maxWidth: 991 })
    return isTablet ? children : null
}
export const ShowOnMobile = ({ children }) => {
    const isMobile = useMediaQuery({ maxWidth: 480, minWidth: 320 })
    return isMobile ? children : null
}
