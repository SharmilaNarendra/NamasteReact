import { createBrowserRouter } from "react-router-dom";
import React, { lazy, Suspense } from "react";

import AppLayout from "../components/AppLayout";
import ErrorComponent from "../components/error/ErrorCommponent";
import SearchComponent from "../components/search/SearchComponent";
import LoginComponent from "../components/login/LoginComponent";
import store from "../components/store/store";
import { Provider } from "react-redux";

const MemberDetail = lazy(() =>
  import("../components/memberDetail/MemberDetail")
);

const appRouter = createBrowserRouter([
  {
    path: "/hustlers",
    element: <AppLayout />,
    errorElement: <ErrorComponent />,
    children: [
      { index: true, element: <SearchComponent /> },
      {
        path: "/hustlers/search",
        element: <SearchComponent />,
      },
      {
        path: "/hustlers/teamMember/:id",
        element: (
          <Suspense fallback={<h1>Loading ...</h1>}>
            <MemberDetail />
          </Suspense>
        ),
      },
    ],
  },
  {
    path: "/",
    element: (
      <Provider store={store}>
        <LoginComponent />
      </Provider>
    ),
    errorElement: <ErrorComponent />,
  },
]);

export default appRouter;
