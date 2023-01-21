import { Outlet } from "react-router-dom";
import { Provider, useContext, useState } from "react";

import HeaderComponent from "./header/HeaderComponent";
import SearchComponent from "./search/SearchComponent";
import ThemeContext from "../utils/shared_functions/themeContext";

/** layout of the application */
const AppLayout = () => {
  const [theme, setTheme] = useState("light");
  document.body.classList.add("purple", "dark:bg-slate-600");

  return (
    <ThemeContext.Provider value={{ theme: theme, setTheme: setTheme }}>
      <HeaderComponent />
      <Outlet />
    </ThemeContext.Provider>
  );
};

export default AppLayout;
