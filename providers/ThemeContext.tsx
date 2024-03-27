"use client";

import { ReactNode, createContext, useContext, useState } from "react";

const ThemeContext = createContext<any>(null);

const ThemeProvider = ({ children }: { children: ReactNode }) => {
    const [theme, setTheme] = useState(() => {
        if (typeof localStorage !== "undefined")
            return localStorage.getItem("theme")
                ? localStorage.getItem("theme")
                : "bumblebee";
    });

    return (
        <ThemeContext.Provider value={{ theme, setTheme }}>
            {children}
        </ThemeContext.Provider>
    );
};

const useTheme = () => {
    const context = useContext(ThemeContext);
    if (!context)
        throw Error(
            "You are trying to access the context outside of its provider"
        );
    return context;
};

export { ThemeProvider, useTheme };
