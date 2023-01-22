import { useEffect, useState } from "react";
import Skeleton from "react-loading-skeleton";

import CardContainer from "../cardContainer/CardContainerComponent";
import NoResultsFoundComponenet from "../noresultsFound/NoResultsFoundComponent";
import { fetchTeamdata } from "../../services/fetchTeamDetails";
import SearchBar from "../searchBar/SearchBar";
import members from "../../utils/constants/data.json";
import "../search/SearchComponent.css";

/** body component */
const SearchComponent = () => {
  const [listOfTeamMembers, setListOfTeamMembers] = useState([]);
  const [filteredMemebers, setFiteredMemebers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [noResultFound, setNoResultFound] = useState(false);

  useEffect(() => {
    fetchTeamdata()
      .then((memebers) => {
        setListOfTeamMembers(memebers);
        setFiteredMemebers(memebers);
        setLoading(true);
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  const rows = members?.map((mem) => {
    return (
      <div
        key={mem.id}
        className="skele-card w-96 h-56 p-1 rounded-3xl cursor-pointer flex flex-row gap-8"
      >
        <Skeleton className="skele-image srounded-2xl" />
        <Skeleton count={5} width={230} height={30} />
      </div>
    );
  });

  return (
    <>
      <SearchBar
        setFiteredMemebers={setFiteredMemebers}
        listOfTeamMembers={listOfTeamMembers}
        setNoResultFound={setNoResultFound}
      />
      {noResultFound ? (
        <NoResultsFoundComponenet />
      ) : loading ? (
        <div className="skele-container flex flex-wrap gap-9">{rows}</div>
      ) : (
        <CardContainer filteredMemebers={filteredMemebers} />
      )}
    </>
  );
};

export default SearchComponent;
