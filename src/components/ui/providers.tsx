"use client";

import { NextUIProvider } from "@nextui-org/react";
import { ThemeProvider as NextThemesProvider } from "next-themes";
import { ThemeSwitcher } from "./theme-switcher";

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <NextThemesProvider attribute="class" defaultTheme="dark" enableSystem>
      <NextUIProvider>
        <div className="relative">
          <div className="fixed top-4 right-4 z-50">
            <ThemeSwitcher />
          </div>
          {children}
        </div>
      </NextUIProvider>
    </NextThemesProvider>
  );
}
