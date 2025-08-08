import { useState } from "react";
import { ThemeContext } from "../../contexts/ThemeContext";

export default function ThemeProvider({ children }) {
    const [isDarkMode, setIsDarkMode] = useState(true);

    function toggleTheme() {
        setIsDarkMode(d => !d);
    }

    return (
        <ThemeContext.Provider value={{ isDarkMode, toggleTheme }}>
            {children}
        </ThemeContext.Provider>
    )
}