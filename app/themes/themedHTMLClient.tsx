"use client";
import { setCookie } from "cookies-next";
import {
  DetailedHTMLProps,
  Dispatch,
  HtmlHTMLAttributes,
  SetStateAction,
  createContext,
  useContext,
  useEffect,
  useState,
} from "react";

export type Themes = "dark" | "light";
type ThemeContextProps = {
  theme: Themes;
  setTheme: Dispatch<SetStateAction<Themes>>;
};
type ThemeProviderProps = {
  hydrationTheme: Themes;
} & DetailedHTMLProps<HtmlHTMLAttributes<HTMLHtmlElement>, HTMLHtmlElement>;

const ThemeContext = createContext<ThemeContextProps | undefined>(undefined);
const defaultContext: ThemeContextProps = {
  theme: "light",
  setTheme: (_) => {
    throw new Error(
      "In your layout.tsx replace the <html> tag with <ThemedHTML>"
    );
  },
};
export const useTheme = () => useContext(ThemeContext) ?? defaultContext;

export const ThemedHTMLClient = ({
  hydrationTheme,
  ...props
}: ThemeProviderProps) => {
  const [theme, setTheme] = useState<Themes>(hydrationTheme);

  useEffect(() => {
    setCookie("theme", theme);
  }, [theme]);

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      <html {...props} data-theme={theme} />
    </ThemeContext.Provider>
  );
};
