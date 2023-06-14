"use client";
import { setCookie } from "cookies-next";
import {
  ReactNode,
  createContext,
  useContext,
  useEffect,
  useState,
} from "react";

export type Themes = "dark" | "light" | "none";
type ThemeContextProps = {
  theme: Themes;
  setTheme: (theme: Themes) => void;
};
type ThemeProviderProps = {
  children: ReactNode;
  hydrationTheme?: Themes;
};

const ThemeContext = createContext<ThemeContextProps | undefined>(undefined);
const defaultContext: ThemeContextProps = {
  theme: "none",
  setTheme: (_) => {
    throw new Error("You have to add the <ThemeProvider> to your layout.tsx");
  },
};
export const useTheme = () => useContext(ThemeContext) ?? defaultContext;

export const ThemeProviderClient = ({
  children,
  hydrationTheme = "none",
}: ThemeProviderProps) => {
  const [theme, setTheme] = useState<Themes>(hydrationTheme);

  useEffect(() => {
    setCookie("theme", theme);
  }, [theme]);

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
