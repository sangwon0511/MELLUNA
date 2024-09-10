import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import MainPage from "./mainPage";
import ChatPage from "./chatPage";
import ItemPage from "./itemPage";

function Router() {
	const router = createBrowserRouter([
		{
			path: "/",
			element: <MainPage></MainPage>,
		},
		{
			path: "/chat/:id",
			element: <ChatPage></ChatPage>
		},
		{
			path: "/item/:id",
			element: <ItemPage></ItemPage>
		}
	]);

	return <RouterProvider router={router}></RouterProvider>;
}

export default Router;

