import { useEffect, useState } from "react";
import { ThemeContext } from "../ThemeContext";

export default function ThemeProvider({ children }) {
    const [isDarkMode, setIsDarkMode] = useState(() => {
        const initialValue = localStorage.getItem("DARK_MODE");

        if (initialValue !== null) {
            return JSON.parse(initialValue);
        } else {
            return true;
        }
    });

    function toggleTheme() {
        setIsDarkMode(prev => !prev);
    }

    useEffect(() => {
        localStorage.setItem("DARK_MODE", JSON.stringify(isDarkMode));

        if (isDarkMode) {
            document.body.style.backgroundColor = "var(--dark-background)";
            document.body.style.color = "var(--dark-text)";
        } else {
            document.body.style.backgroundColor = "var(--light-background)";
            document.body.style.color = "var(--light-text)";
        }
    }, [isDarkMode]);

    return (
        <ThemeContext.Provider value={{ isDarkMode, toggleTheme }}>
            {children}
        </ThemeContext.Provider>
    )
}