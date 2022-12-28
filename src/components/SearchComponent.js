import { useEffect, useState } from "react";
import Skeleton from "react-loading-skeleton";

import CardContainer from "./CardContainerComponent";
import NoResultsFoundComponenet from "./NoResultsFoundComponent";
import { fetchTeamdata } from "../services/fetchTeamDetails";
import SearchBar from "./SearchBar";
import members from "../utils/constants/data.json";
import "./searchComponent.css";

/** body component */
const SearchComponent = () => {
  const [listOfTeamMembers, setListOfTeamMembers] = useState([]);
  const [filteredMemebers, setFiteredMemebers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [noResultFound, setNoResultFound] = useState(false);

  useEffect(() => {
    fetchTeamdata().then((memebers) => {
      setListOfTeamMembers(memebers);
      setFiteredMemebers(memebers);
      setLoading(true);
    }).catch((err)=>{
      console.log(err);
    }
    ).finally(()=>{
      setLoading(false);
    });
  }, []);

  const rows = members?.map((mem)=>{
      return (
        <div key={mem.id} className="skele-card">
        <Skeleton className="skele-image"/>
        <Skeleton count={4} width={400} height={35}/>
        </div>
      )
  })

  return (
      <>
        <SearchBar setFiteredMemebers={setFiteredMemebers} listOfTeamMembers={listOfTeamMembers} setNoResultFound={setNoResultFound}/>
        {noResultFound? <NoResultsFoundComponenet/> : loading?
        <div className="skele-container">{rows}</div>:
        <CardContainer filteredMemebers={filteredMemebers}/>}
      </>
  );
    
};

export default SearchComponent;
