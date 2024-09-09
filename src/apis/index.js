export function getMainPageItems() {
	// TODO: 서버에서 데이터를 가져와서 반환하는 함수를 구현하세요.

	const fakedata = [
		{
			title: "멜론",
			location: "트릭컬",
			timestamp: "1분 전",
			price: "100,000",
		},
		{
			title: "멜론",
			location: "트릭컬",
			timestamp: "1분 전",
			price: "100,000",
		},
	];

	// 0.5초 지연 후 fakedata 반환
	return new Promise((resolve) => {
		setTimeout(() => {
			resolve(fakedata);
		}, 500); // 500ms = 0.5초
	});
}

export function getChatPageItems() {
	// TODO: 서버에서 데이터를 가져와서 반환하는 함수를 구현하세요.

	const fakedata = [
		{
			title: "멜론",
			location: "트릭컬",
			timestamp: "1분 전",
			price: "100,000",
			writer: "멜룬멜룬",
			temp: "36.5"
		},
		{
			title: "멜론",
			location: "트릭컬",
			timestamp: "1분 전",
			price: "100,000",
			writer: "멜룬멜룬",
			temp: "36.5"
		},
	];

	// 0.5초 지연 후 fakedata 반환
	return new Promise((resolve) => {
		setTimeout(() => {
			resolve(fakedata);
		}, 500); // 500ms = 0.5초
	});
}