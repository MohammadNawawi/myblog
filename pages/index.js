import Head from "next/head";
import Image from "next/image";
import { Inter } from "@next/font/google";
import styles from "@/styles/Home.module.css";
import Sidebar from "@/components/Sidebar";
import Layout from "@/components/Layout";
import { useTheme } from "next-themes";
import Logo from "../public/assets/icons/dribble.svg";
import { MoonIcon, SunIcon } from "@heroicons/react/20/solid";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const { systemTheme, theme, setTheme } = useTheme();

  const renderThemeChanger = () => {
    const currentTheme = theme === "system" ? systemTheme : theme;
    if (currentTheme === "dark") {
      <SunIcon
        className="w-6 h-6"
        role="button"
        onClick={() => {
          setTheme("light");
        }}
      />;
    } else {
      <MoonIcon
        className="w-6 h-6"
        role="button"
        onClick={() => {
          setTheme("dark");
        }}
      />;
    }
  };
  return (
    <div>
      <Layout />
    </div>
  );
}
