import { useState, useEffect } from "react";

export const useWindowWidth = () => {
    const [width, setWidth] = useState<undefined | number>(undefined);
    useEffect(() => {
        const resizeListener = () => {
            setWidth(window.innerWidth);
        }
        resizeListener();
        window.addEventListener("resize", resizeListener);
        return () => window.removeEventListener("resize", resizeListener);
    }, []);
    return width;
}