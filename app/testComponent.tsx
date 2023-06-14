"use client";
import { useTheme } from "./themes/themeProviderClient";

export const TestComponent = () => {
  const { theme, setTheme } = useTheme();

  return (
    <p>
      But this text is hydrated on the server and updated on the client
      <br />
      The current theme is {theme}
      <br />
      <button onClick={() => setTheme(theme === "light" ? "dark" : "light")}>Change theme</button>
    </p>
  );
};
