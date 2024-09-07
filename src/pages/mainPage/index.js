import MainPageView from "./view";
import MainPageViewModel from "./viewModel";

function MainPage() {
	const viewModel = MainPageViewModel();
	return <MainPageView viewModel={viewModel} />;
}

export default MainPage;
