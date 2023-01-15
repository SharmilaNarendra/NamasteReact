import logo from "../../../images/The-Incredible-Hulk-2-icon.png";
import title from "../../utils/constants/Constants";
import userIcon from "../../../images/Avengers-Hulk-icon.png";
import "./headerComponent.css";

/** header component*/
const HeaderComponent = () => {
  return (
    <div className="header text-white text-7xl fixed top-0 left-0 w-full h-24 z-1000 flex flex-row gap-7">
      <img src={logo} />
      <div className="self-center basis-5">{title}</div>
      <img className="user-icon h-14 w-14 self-center m-[67%]" src={userIcon} />
    </div>
  );
};

export default HeaderComponent;
