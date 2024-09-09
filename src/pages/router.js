import React from "react";
import { createBrowserRouter, RouterProvider, useNavigate } from "react-router-dom";

import MainPage from "./mainPage";
import ChatPage from "./chatPage";

function Router() {
	const router = createBrowserRouter([
		{
			path: "/",
			element: <MainPage></MainPage>,
		},
		{
			path: "/chat",
			element: <ChatPage></ChatPage>
		}
	]);

	return <RouterProvider router={router}></RouterProvider>;
}

export default Router;

