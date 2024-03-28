"use client";

import {
    Dispatch,
    ReactNode,
    SetStateAction,
    createContext,
    useContext,
    useState,
} from "react";

type ThemeProps = {
    theme: string | undefined;
    setTheme: Dispatch<SetStateAction<string | undefined>>;
} | null;

const ThemeContext = createContext<ThemeProps>(null);

const ThemeProvider = ({ children }: { children: ReactNode }) => {
    const [theme, setTheme] = useState(() => {
        if (typeof localStorage !== "undefined")
            return (
                localStorage.getItem("theme")
                    ? localStorage.getItem("theme")
                    : "bumblebee"
            ) as string;
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
