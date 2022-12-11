import {useState} from "react";
import data from "../utils/data.json"


/** search functionality to search memeber name and designation */
const SearchMembers = (searchText) =>{
    return data?.filter(
        (mem)=>(mem.name?.toLowerCase().includes(searchText.toLowerCase())) ||
               (mem.designation?.toLowerCase().includes(searchText.toLowerCase())) ||
               (mem.company?.toLowerCase().includes(searchText.toLowerCase())) ||
               (mem.city?.toLowerCase().includes(searchText.toLowerCase()))
    )
}

/** search bar component */
const SearchBar = ({setFiteredMemebers}) =>{
    const [searchText, setSearchText] = useState("");
    return(
        <form className="search-bar" onSubmit={(e)=>{
                e.preventDefault();
                const filteredText = SearchMembers(searchText);
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