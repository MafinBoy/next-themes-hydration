import { cookies } from "next/headers";
import { ThemedHTMLClient, Themes } from "./themedHTMLClient";
import { DetailedHTMLProps, HtmlHTMLAttributes } from "react";
/**
 * Use component instead of `<html>` tag in your `layout.tsx`
 * @param props 
 * @returns 
 */
export const ThemedHTML = (
  props: DetailedHTMLProps<HtmlHTMLAttributes<HTMLHtmlElement>, HTMLHtmlElement>
) => {
  const themeCookie =
    (cookies().get("theme")?.value as Themes | undefined) ?? "light";

  return <ThemedHTMLClient hydrationTheme={themeCookie} {...props} />;
};
