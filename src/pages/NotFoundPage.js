import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export const NotFoundPage = () => {
    const location = useLocation();
    
    useEffect(() => {
        console.error(`${window.location.origin}${location.pathname} 404 (Not Found)`);
      }, [location.pathname]);
    
    return (
        <>
        <h1>Page Not Found</h1>
        </>
    );
}