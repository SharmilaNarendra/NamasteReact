import { Outlet } from "react-router-dom";

import HeaderComponent from "./header/HeaderComponent";
import SearchComponent from "./search/SearchComponent";

/** layout of the application */
const AppLayout = () =>{
    
    return (
        <>
        <HeaderComponent />
        <Outlet/>
        </>
    )
}

export default AppLayout;