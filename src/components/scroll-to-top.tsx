import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const ScrollToTop = () => {
    const { pathname } = useLocation();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [pathname]); // Re-run this effect whenever the pathname changes

    return null; // This component doesn't render any UI
};

export default ScrollToTop;