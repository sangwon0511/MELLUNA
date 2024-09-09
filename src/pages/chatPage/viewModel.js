import React, { useState, useEffect } from "react";

import { getChatPageItems } from "../../apis";

function ChatPageViewModel() {
	const [item, setItem] = useState([]);
	const [isLoading, setIsLoading] = useState(true);

	const fetchItem = async () => {
		setIsLoading(true);
		const item = await getChatPageItems();
		setItem(item);
		setIsLoading(false);
	};

	useEffect(() => {
		fetchItem();
	}, []);

	return { item, isLoading };
}

export default ChatPageViewModel;
