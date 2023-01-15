import { useState, useRef } from "react";

import searchMembers from "../../utils/shared_functions/searchMembers";
import indianStates from "../../utils/constants/stateCities.json";
import "./searchBar.css";
import useCities from "../../utils/shared_functions/useCities";

/** search bar component */
const SearchBar = ({
  setFiteredMemebers,
  listOfTeamMembers,
  setNoResultFound,
}) => {
  const [searchText, setSearchText] = useState("");
  const [stateName, setStateName] = useState("select the state");
  const [cityName, setCityName] = useState("");
  const [filteredList, setFilteredList] = useState(listOfTeamMembers);
  const ref = useRef(null);
  const cities = useCities(stateName);

  return (
    <form
      className="search-bar flex"
      onSubmit={(e) => {
        e.preventDefault();
        let filteredText = [];
        if (
          ref.current.value == "Select" ||
          ref.current.value == "-- none --"
        ) {
          filteredText = searchMembers(searchText, listOfTeamMembers);
        } else {
          filteredText = searchMembers(searchText, filteredList);
        }
        !filteredText.length ? setNoResultFound(true) : setNoResultFound(false);
        setFiteredMemebers(filteredText);
      }}
    >
      <span className="filter">
        Where in &nbsp;
        <select
          className="h-8 w-64 rounded-xl border-none"
          value={stateName}
          onChange={(e) => {
            setStateName(e.target.value);
            if (ref.current.value) {
              setCityName(ref.current.value);
              setNoResultFound(false);
              setFiteredMemebers(listOfTeamMembers);
            }
          }}
        >
          {Object.keys(indianStates).map((state) => (
            <option value={state} key={state}>
              {state}
            </option>
          ))}
        </select>
        &nbsp;
        <select
          className="h-8 w-64 rounded-xl border-none"
          ref={ref}
          value={cityName}
          onChange={(e) => {
            setCityName(e.target.value);
            if (e.target.value == "Select") {
              setFiteredMemebers(listOfTeamMembers);
              setNoResultFound(false);
            } else {
              const filteredMem = searchMembers(
                e.target.value,
                listOfTeamMembers
              );
              !filteredMem.length
                ? setNoResultFound(true)
                : setNoResultFound(false);
              setFiteredMemebers(filteredMem);
              setFilteredList(filteredMem);
            }
          }}
        >
          {cities?.map((city) => (
            <option value={city} key={city}>
              {city}
            </option>
          ))}
        </select>
        &nbsp; do you wish to search?
      </span>

      <input
        className="input-search h-16 border-none rounded-2xl text-xl m-0 px-2 py-4"
        type="search"
        value={searchText}
        placeholder="Search the Hustler..."
        onChange={(e) => setSearchText(e.target.value)}
      ></input>
      <button type="submit">
        <i className="fa fa-search fa-2x h-10 w-5 cursor-pointer border-none translate-y-1"></i>
      </button>
    </form>
  );
};

export default SearchBar;
