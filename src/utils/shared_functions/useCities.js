import { useEffect, useState } from "react";

import indianStates from "../../utils/constants/stateCities.json";

const useCities = (stateName) => {
  const [cityList, setCityList] = useState([]);

  useEffect(() => {
    const cities = indianStates[stateName];
    setCityList(cities);
  }, [stateName]);

  return cityList;
};

export default useCities;
