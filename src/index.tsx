import React from "react";
import ReactDOM from "react-dom/client";
import Root from "./App";
import reportWebVitals from "./reportWebVitals";
import { RouterProvider, createBrowserRouter } from "react-router-dom";

const router = createBrowserRouter([{ path: "*", Component: Root }]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    {/*<BrowserRouter basename="/Developer_Quiz_Site">*/}
    <RouterProvider router={router} />
  </React.StrictMode>
);

reportWebVitals();
