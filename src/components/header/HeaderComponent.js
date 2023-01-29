import logo from "../../../images/The-Incredible-Hulk-2-icon.png";
import title from "../../utils/constants/Constants";
import user from "../../../images/Avengers-Hulk-icon.png";
import themeIcon from "../../../images/theme.png";
import userIcon from "../../../images/user.png";
import { useContext, useEffect } from "react";
import ThemeContext from "../../utils/shared_functions/themeContext";
import { useSelector, useDispatch } from "react-redux";
import "./headerComponent.css";
import { Link } from "react-router-dom";
import Dropdown from "react-bootstrap/Dropdown";
import { removeUser } from "../store/userInfoSlice";

/** header component*/
const HeaderComponent = () => {
  const { theme, setTheme } = useContext(ThemeContext);
  const colorTheme = theme === "dark" ? "light" : "dark";
  const userInfo = useSelector((store) => store.userInfo.value);
  const dispatch = useDispatch();
  const userName = userInfo[1] ? userInfo[1].userId : userInfo[0].userId;
  const hustlers = JSON.parse(sessionStorage.getItem("membersInfo"));
  let userDP = userIcon;
  for (let i = 0; i < hustlers?.length; i++) {
    if (hustlers[i].login?.toUpperCase() === userName?.toUpperCase()) {
      userDP = hustlers[i].avatar_url;
    }
  }

  useEffect(() => {
    const root = window.document.documentElement;
    root.classList.remove(colorTheme);
    root.classList.add(theme);
  }, [theme]);

  return (
    <div className="bg-violet-900 header text-white text-7xl fixed top-0 left-0 w-full h-24 z-1000 flex flex-row gap-7 dark:bg-slate-800">
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
      <Dropdown>
        <Dropdown.Toggle variant="none" id="dropdown-basic">
          <img
            alt=""
            className="user-icon h-14 w-14 self-center cursor-pointer ml-[1%]"
            src={user}
          />{" "}
        </Dropdown.Toggle>

        <Dropdown.Menu className="profile">
          <Dropdown.Item>
            <img
              alt=""
              className=" h-14 w-14 self-center rounded-full"
              src={userDP}
            />
          </Dropdown.Item>
          <Dropdown.Item className="font-sans text-xl" href="#/action-2">
            {"Hi, "}
            <br />
            {userName}
          </Dropdown.Item>
          {userName != "User" ? (
            <>
              <Dropdown.Divider />
              <Link to="/">
                <Dropdown.Item
                  href="#/action-3"
                  onClick={() => {
                    dispatch(removeUser());
                  }}
                  className="font-sans text-xl"
                >
                  Sign Out
                </Dropdown.Item>
              </Link>
            </>
          ) : null}
        </Dropdown.Menu>
      </Dropdown>
    </div>
  );
};

export default HeaderComponent;
