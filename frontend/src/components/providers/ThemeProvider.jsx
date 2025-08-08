import { useEffect, useState } from "react";
import { ThemeContext } from "../../contexts/ThemeContext";

export default function ThemeProvider({ children }) {
    const [isDarkMode, setIsDarkMode] = useState(true);

    function toggleTheme() {
        setIsDarkMode(d => !d);
    }

    useEffect(() => {
        if (isDarkMode) {
            document.body.style.backgroundColor = "#111";
            document.body.style.color = "#999";
        } else {
            document.body.style.backgroundColor = "#999";
            document.body.style.color = "#111";
        }
    }, [isDarkMode]);

    return (
        <ThemeContext.Provider value={{ isDarkMode, toggleTheme }}>
            {children}
        </ThemeContext.Provider>
    )
}