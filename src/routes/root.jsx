import React, { useEffect, useState } from "react";
import Header from "../components/header/header";
import { Outlet } from "react-router-dom";
import Footer from "../components/footer/footer";
import Cookies from "js-cookie";

const Root = () => {
  const [theme, setTheme] = useState(() => Cookies.get("theme") || "light");
  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
    Cookies.set("theme", theme, { expires: 365 });
  }, [theme]);

  const handleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  return (
    <div>
      <Header handleTheme={handleTheme} theme={theme} />
      <Outlet />
      <Footer />
    </div>
  );
};

export default Root;
