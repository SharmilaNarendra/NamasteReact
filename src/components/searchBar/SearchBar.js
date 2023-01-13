import { useEffect, useState } from "react";

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
  const [stateName, setStateName] = useState("");
  const [cityName, setCityName] = useState("");

  const cities = useCities(stateName);

  return (
    <form
      className="search-bar"
      onSubmit={(e) => {
        e.preventDefault();
        const filteredText = searchMembers(searchText, listOfTeamMembers);
        !filteredText.length ? setNoResultFound(true) : setNoResultFound(false);
        setFiteredMemebers(filteredText);
      }}
    >
      <span className="filter">
        Where in &nbsp;
        <select
          className="state"
          value={stateName}
          onChange={(e) => setStateName(e.target.value)}
        >
          {Object.keys(indianStates).map((state) => (
            <option value={state} key={state}>
              {state}
            </option>
          ))}
        </select>
        &nbsp;
        <select
          className="city"
          value={cityName}
          onChange={(e) => setCityName(e.target.value)}
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
        className="input-search"
        type="search"
        value={searchText}
        placeholder="Search the Hustler..."
        onChange={(e) => setSearchText(e.target.value)}
      ></input>
      <button type="submit">
        <i className="fa fa-search fa-2x"></i>
      </button>
    </form>
  );
};

export default SearchBar;
