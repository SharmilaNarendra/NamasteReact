import { Outlet } from "react-router-dom";
import { useContext, useState } from "react";
import { Provider } from "react-redux";

import HeaderComponent from "./header/HeaderComponent";
import SearchComponent from "./search/SearchComponent";
import ThemeContext from "../utils/shared_functions/themeContext";
import store from "./store/store";

/** layout of the application */
const AppLayout = () => {
  const [theme, setTheme] = useState("light");
  document.body.classList.add("purple", "dark:bg-slate-600");

  return (
    <ThemeContext.Provider value={{ theme: theme, setTheme: setTheme }}>
      <Provider store={store}>
        <HeaderComponent />
      </Provider>
      <Outlet />
    </ThemeContext.Provider>
  );
};

export default AppLayout;
