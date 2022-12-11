import React, { useState } from "react";
import ReactDOM from "react-dom/client";

import logo from "../images/The-Incredible-Hulk-2-icon.png"
import userIcon from "../images/Avengers-Hulk-icon.png"
import data from "./utils/constants/data.json"

import SearchBar from "./components/SearchBar"
import title from "./utils/constants/Constants";
import CardContainer from "./containers/CardContainer"

/** header component*/
const HeaderComponent = ({setFiteredMemebers}) => {
    return(
        <div class="header">
         <img src={logo}/>
         <h1 className="title">{title}</h1>
         <SearchBar setFiteredMemebers={setFiteredMemebers}/>
         <img className="user-icon" src={userIcon}/>
        </div>
    );
};

/** body component */
const BodyComponent = ({filteredMemebers})=>{
 return(
    <CardContainer filteredMemebers={filteredMemebers}/>
 )
}

/** layout of the application */
const AppLayout = () =>{
    const [filteredMemebers, setFiteredMemebers] = useState(data);
    return (
        <>
        <HeaderComponent setFiteredMemebers={setFiteredMemebers}/>
        <BodyComponent filteredMemebers={filteredMemebers}/>
        </>
    )
}
    
/** accessing DOM to render react element */
const reactRoot = ReactDOM.createRoot(document.getElementById("react-root"));
reactRoot.render(<AppLayout/>);

