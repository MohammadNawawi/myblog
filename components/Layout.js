import React from "react";
import { useState, useEffect } from "react";
import Sidebar from "./Sidebar";
import { Header } from "./Header";
import Logo from "public/assets/icons/dribble.svg";
import { useTheme } from "next-themes";
import { MoonIcon, SunIcon } from "@heroicons/react/20/solid";

const Layout = () => {
  const { systemTheme, theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const renderThemeChanger = () => {
    if (!mounted) return null;

    const currentTheme = theme === "system" ? systemTheme : theme;
    if (currentTheme === "dark") {
      return (
        <SunIcon
          className="w-6 h-6"
          role="button"
          onClick={() => setTheme("light")}
        />
      );
    } else {
      return (
        <MoonIcon
          className="w-6 h-6"
          role="button"
          onClick={() => setTheme("dark")}
        />
      );
    }
  };

  return (
    <div className="h-screen flex flex-row">
      <Sidebar />
      {/* <Header /> */}
      <div className=" flex-1 p-4 border-1 border-l dark:border-slate-800">
        <header>
          <div className="container mx-1 sm:px-6 py-4 flex justify-end">
            {renderThemeChanger()}
          </div>
        </header>
        <h1 className="dark:text-white">Hello</h1>
      </div>
    </div>
  );
};

export default Layout;
