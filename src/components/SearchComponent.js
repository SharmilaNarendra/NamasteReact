import { useEffect, useState } from "react";
import CardContainer from "./CardContainerComponent";
import { fetchTeamdata } from "../services/fetchTeamDetails";
import SearchBar from "./SearchBar";
import {Link} from "react-router-dom"

/** body component */
const SearchComponent = () => {
  const [listOfTeamMembers, setListOfTeamMembers] = useState([]);
  const [filteredMemebers, setFiteredMemebers] = useState([]);

  useEffect(() => {
    fetchTeamdata().then((memeber) => {
      setListOfTeamMembers(memeber);
      setFiteredMemebers(memeber);
    });
  }, []);

  return (
    <>
      <SearchBar setFiteredMemebers={setFiteredMemebers} listOfTeamMembers={listOfTeamMembers} />
      
      <CardContainer filteredMemebers={filteredMemebers} />
    </>
  );
};

export default SearchComponent;
