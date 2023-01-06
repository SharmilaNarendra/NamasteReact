import { createBrowserRouter } from "react-router-dom";

import AppLayout from "../components/AppLayout"
import ErrorComponent from "../components/error/ErrorCommponent";
import SearchComponent from "../components/search/SearchComponent";
import MemberDetail from "../components/memberDetail/MemberDetail";

const appRouter = createBrowserRouter([
    { 
        path: "/",
        element: <AppLayout />,
        errorElement:<ErrorComponent/>,
        children:[
            { index: true, element: <SearchComponent /> },
            {
                path:"/search",
                element:<SearchComponent />
            },
            {
                path:"/teamMember/:id",
                element:<MemberDetail />
            }
        ]
    }
]); 

export default appRouter;