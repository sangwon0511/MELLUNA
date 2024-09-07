import React, { useState, useEffect } from "react";

import { getMainPageItems } from "../apis";

function MainPageViewModel() {
	const [item, setItem] = useState([]);
	const [isLoading, setIsLoading] = useState(true);

	const fetchItem = async () => {
		setIsLoading(true);
		const item = await getMainPageItems();
		setItem(item);
		setIsLoading(false);
	};

	useEffect(() => {
		fetchItem();
	}, []);

	return { item, isLoading };
}

export default MainPageViewModel;
