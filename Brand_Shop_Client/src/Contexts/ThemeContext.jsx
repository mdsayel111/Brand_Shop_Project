import React, { createContext, useState } from 'react';

 const ThemeContext = createContext("light")
 export default ThemeContext;

export const ThemeProvider = ({children}) => {
    const [theme, setTheme] = useState("light")
    const themeInfo = {theme, setTheme}

    return (
        <ThemeContext.Provider value={themeInfo}>
            {children}
        </ThemeContext.Provider>
    );
};