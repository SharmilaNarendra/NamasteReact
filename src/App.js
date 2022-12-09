import React from "react";
import ReactDOM from "react-dom/client";
import logo from "../images/The-Incredible-Hulk-2-icon.png"
import userIcon from "../images/Avengers-Hulk-icon.png"
import data from "./data.json"
import CardComponent from "./CardComponent";


/** header by using react functional component */
const title = "HUSTLERS";

const SearchBar = () =>{
    return(
        <form className="search-bar">
            <input className="input-search" type="search" placeholder="Search the Hustler..." />
            <button type="submit"><i className="fa fa-search fa-2x"></i></button>
        </form>
    )
};

/** header component*/
const HeaderComponent = () => {
    return(
        <div className="header">
         <img src={logo}/>
         <h1 className="title">{title}</h1>
         <SearchBar/>
         <img className="user-icon" src={userIcon}/>
        </div>
    );
};

const CardContainer = () => {
    const cards = data.map((member) =>{
        return  <CardComponent members={member}/>
    })
   return cards;
}

/** body component */
const BodyComponent = ()=>{
    return( 
     <div class="cardContainer">
     <CardContainer/>
     </div>
    )
}

/** layout of the application */
const AppLayout = () =>(
    <>
    <HeaderComponent/>
    <BodyComponent />
    </>
);
    
/** accessing DOM to render react element */
const reactRoot = ReactDOM.createRoot(document.getElementById("react-root"));
reactRoot.render(<AppLayout/>);

