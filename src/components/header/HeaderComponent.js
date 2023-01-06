import logo from "../../../images/The-Incredible-Hulk-2-icon.png"
import title from "../../utils/constants/Constants";
import userIcon from "../../../images/Avengers-Hulk-icon.png"
import "./headerComponent.css"

/** header component*/
const HeaderComponent = () => {
    return(
        <div className="header">
         <img src={logo}/>
         <div className="title">{title}</div>
         <img className="user-icon" src={userIcon}/>
        </div>
    );
};

export default HeaderComponent;