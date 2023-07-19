"use client";
import { useTheme } from "next-themes";
import { FC } from "react";
import { FaMoon, FaSun } from "react-icons/fa";
interface ThemeSwitchProps {}

const ThemeSwitch: FC<ThemeSwitchProps> = ({}) => {
  const { theme, setTheme } = useTheme();
  return (
    <button onClick={() => setTheme(theme === "dark" ? "light" : "dark")}>
      {theme === "light" ? (
        <FaMoon className="" />
      ) : (
        <FaSun className=" text-yellow-500" />
      )}
    </button>
  );
};

export default ThemeSwitch;
