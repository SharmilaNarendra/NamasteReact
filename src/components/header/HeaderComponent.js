import logo from "../../../images/The-Incredible-Hulk-2-icon.png";
import title from "../../utils/constants/Constants";
import userIcon from "../../../images/Avengers-Hulk-icon.png";
import themeIcon from "../../../images/theme.png";
import { useContext, useEffect } from "react";
import ThemeContext from "../../utils/shared_functions/themeContext";
import "./headerComponent.css";

/** header component*/
const HeaderComponent = () => {
  const { theme, setTheme } = useContext(ThemeContext);
  const colorTheme = theme === "dark" ? "light" : "dark";

  useEffect(() => {
    const root = window.document.documentElement;
    root.classList.remove(colorTheme);
    root.classList.add(theme);
  }, [theme]);

  return (
    <div className="bg-purple-900 header text-white text-7xl fixed top-0 left-0 w-full h-24 z-1000 flex flex-row gap-7 dark:bg-slate-800">
      <img alt="" src={logo} />
      <div className="self-center basis-5">{title}</div>
      <img
        alt=""
        className="h-12 w-12 self-center cursor-pointer ml-[60%]"
        src={themeIcon}
        onClick={() => {
          const root = window.document.documentElement;
          if (theme == "light") {
            setTheme("dark");
          } else {
            setTheme("light");
          }
        }}
      />
      <img
        alt=""
        className="user-icon h-14 w-14 self-center cursor-pointer ml-[1%]"
        src={userIcon}
      />
    </div>
  );
};

export default HeaderComponent;
