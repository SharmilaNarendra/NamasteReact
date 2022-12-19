import React, { useState } from "react";
import ReactDOM from "react-dom/client";
import {RouterProvider} from "react-router-dom"

import appRouter from "./router/router"
import "bootstrap/dist/css/bootstrap.min.css";

/** accessing DOM to render react element */
const reactRoot = ReactDOM.createRoot(document.getElementById("react-root"));
reactRoot.render(<RouterProvider router={appRouter}/>);

