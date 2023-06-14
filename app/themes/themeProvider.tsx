import { cookies } from "next/headers";
import { ThemeProviderClient, Themes } from "./themeProviderClient";
import { ReactNode } from "react";
export const ThemeProvider = ({ children }: { children: ReactNode }) => {
  const themeCookie =
    (cookies().get("theme")?.value as Themes | undefined) ?? "light";

  return (
    <ThemeProviderClient hydrationTheme={themeCookie}>
      {children}
    </ThemeProviderClient>
  );
};
