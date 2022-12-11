import React, { useState } from "react";
import ReactDOM from "react-dom/client";
import logo from "../images/The-Incredible-Hulk-2-icon.png"
import userIcon from "../images/Avengers-Hulk-icon.png"
import data from "./utils/data.json"
import CardComponent from "./components/CardComponent";
import SearchBar from "./components/SearchBar"
import title from "./utils/Constants";



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

const CardContainer = ({filteredMemebers}) => {
    const cards = filteredMemebers?.map((member) =>{
        return  <CardComponent members={member} key={member.id}/>
    })
   return cards;
}

/** body component */
const BodyComponent = ({filteredMemebers})=>{
   return( 
     <div className="cardContainer">
     <CardContainer filteredMemebers={filteredMemebers}/>
     </div>
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

