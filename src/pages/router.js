import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import MainPage from "./mainPage";

function Router() {
	const router = createBrowserRouter([
		{
			path: "/",
			element: <MainPage></MainPage>,
		},
	]);

	return <RouterProvider router={router}></RouterProvider>;
}

export default Router;
