import axios from "axios";

export async function getMainPageItems() {
	const data = await axios.get("./api/items");
	return data.data;

	// const fakedata = [
	// 	{
	// 		title: "멜론",
	// 		location: "엘리아스",
	// 		timestamp: "1분 전",
	// 		price: 100000,
	// 		item_id: 29
	// 	},
	// 	{
	// 		title: "멜론",
	// 		location: "엘리아스",
	// 		timestamp: "1분 전",
	// 		price: 100000,
	// 		item_id: 30
	// 	},
	// ];

	// // 0.5초 지연 후 fakedata 반환
	// return new Promise((resolve) => {
	// 	setTimeout(() => {
	// 		resolve(fakedata);
	// 	}, 500); // 500ms = 0.5초
	// });
}

export async function getChatPageItems(chat_rool_id) {
	const data = await axios.get(`/api/chat/${chat_rool_id}`);
	return data.data;

	// const fakedata = {
	// 	"opponent_name": "멜룬멜룬",
	// 	"product_name": "맬론",
	// 	"product_price": 100000,
	// 	"chat": [
	// 		{
	// 			"sender_name": "나",
	// 			"content": "안녕하세요.",
	// 			"is_me": true,
	// 		},
	// 		{
	// 			"sender_name": "GPT",
	// 			"content": "awdjawgdjhagwjdyawgj",
	// 			"is_me": false
	// 		}
	// 	]
	// }

	// // 0.5초 지연 후 fakedata 반환
	// return new Promise((resolve) => {
	// 	setTimeout(() => {
	// 		resolve(fakedata);
	// 	}, 500); // 500ms = 0.5초
	// });
}



export async function getItemPageItems(item_id) {
	const data = await axios.get(`/api/item/${item_id}`);
	return data.data;

	// const fakedata = {
	// 	title: "멜론",
	// 	location: "엘리아스",
	// 	timestamp: "1분 전",
	// 	price: 100000,
	// 	writer: "멜룬멜룬",
	// 	description: "불법 유통한 멜?루 입니다.\n불량한 멜룬 아닙니다.\n\n너무 멜룬멜룬 하지 않아 식용 가능 합니다. \n\n멜룬다고.",
	// 	chat_room_id: 32
	// }

	// // 0.5초 지연 후 fakedata 반환
	// return new Promise((resolve) => {
	// 	setTimeout(() => {
	// 		resolve(fakedata);
	// 	}, 500); // 500ms = 0.5초
	// });
}