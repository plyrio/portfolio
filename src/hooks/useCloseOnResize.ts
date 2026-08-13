import { useEffect } from "react";

export function useCloseOnResize(callback: () => void) {
    useEffect(() => {
        function handleResize() {
            if (window.innerWidth >= 768) {
                callback();
            }
        }

        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, [callback]);
}