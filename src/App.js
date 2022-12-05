import React from "react";
import ReactDOM from "react-dom/client";
import logo from "../images/The-Incredible-Hulk-2-icon.png"
import userIcon from "../images/Avengers-Hulk-icon.png"

/**
 * Header with nested react create elememt without using JSX
 *
 * const reactHeading = React.createElement("div", { className: "title p-3" }, [
 * React.createElement("h2", {}, "Namaste React Bootcamp"),
 * React.createElement("h3", {}, "HUSTLERS")]);
 */

/**
 * Header by using react functional component
 */

const TitleComponent = () => {
  return <h1 className="title">HUSTLERS</h1>;
};

const SearchBar = () =>{
    return(
        <form className="search-bar">
            <input className="input-search" type="search" placeholder="Search the Hustler.." />
            <button type="submit"><i className="fa fa-search fa-2x"></i></button>
        </form>
    )
};

/** Header */
const HeaderComponent = () => {
    return(
        <div className="header">
         <img src={logo}/>
         <TitleComponent/>
         <SearchBar/>
         <img className="user-icon" src={userIcon}/>
        </div>
    )
};

/** Accessing DOM to render react element*/
const reactRoot = ReactDOM.createRoot(document.getElementById("react-root"));
reactRoot.render(HeaderComponent);ß
