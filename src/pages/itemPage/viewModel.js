import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

import { getItemPageItems } from "../../apis";
import { useNavigate } from "react-router-dom";

function ItemPageViewModel() {
	const navigate = useNavigate();
	const params = useParams();

	const item_id = params.id

	const [item, setItem] = useState([]);
	const [isLoading, setIsLoading] = useState(true);
	const [metadata, setMetadata] = useState({
		title: "로딩중",
		location: "로딩중",
		timestamp: "0분 전",
		price: 100000,
		writer: "로딩중",
		description: "로딩중",
		chat_room_id: -1
	})

	const onChatRoomClick = () => {
		if (metadata.chat_room_id != -1) {
			navigate(`/chat/${metadata.chat_room_id}`);
		}
	}

	const fetchItem = async () => {
		setIsLoading(true);
		getItemPageItems(item_id).then((res) => {
			setMetadata(res)
		});
		setItem(item);
		setIsLoading(false);
	};

	useEffect(() => {
		fetchItem();
	}, []);

	return { item, item_id, isLoading, metadata, onChatRoomClick };
}

export default ItemPageViewModel;
