"use client";
import { useTheme } from "./themes/themedHTMLClient";

export const TestComponent = () => {
  const { theme, setTheme } = useTheme();

  return (
    <div>
      <p className="block">
        But this text is hydrated on the server and updated on the client
      </p>
      <p className="block">The current theme is {theme}</p>
      <button
        className="rounded-md border border-gray-400 bg-gray-200 px-3 py-2 text-black"
        onClick={() => setTheme(theme === "light" ? "dark" : "light")}
      >
        Change theme
      </button>
    </div>
  );
};
