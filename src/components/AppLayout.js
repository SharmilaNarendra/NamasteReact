import { Outlet } from "react-router-dom";

import HeaderComponent from "./HeaderComponent";
import SearchComponent from "./SearchComponent";

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