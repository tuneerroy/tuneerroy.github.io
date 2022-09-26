import { useState, useEffect } from "react";

export const useWindowWidth = () => {
    const [windowWidth, setWindowWidth] = useState<undefined | number>(undefined);
    useEffect(() => {
        const resizeListener = () => {
            setWindowWidth(window.innerWidth);
        }
        resizeListener();
        window.addEventListener("resize", resizeListener);
        return () => window.removeEventListener("resize", resizeListener);
    }, []);
    return windowWidth;
}