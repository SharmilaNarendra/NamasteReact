import {useState} from "react";
import searchMembers from "../utils/shared_functions/searchMembers"

import "./searchBar.css"

/** search bar component */
const SearchBar = ({setFiteredMemebers,listOfTeamMembers}) =>{
    const [searchText, setSearchText] = useState("");
    return(
        <form className="search-bar" onSubmit={(e)=>{
                e.preventDefault();
                const filteredText = searchMembers(searchText,listOfTeamMembers);
                setFiteredMemebers(filteredText);
            }}>

            <input className="input-search" 
            type="search" 
            value={searchText}
            placeholder="Search the Hustler..."
            onChange={(e)=>{
                setSearchText(e.target.value);
            }}
            ></input>

            <button type="submit"><i className="fa fa-search fa-2x"></i></button>
        </form>
    )
};

export default SearchBar;