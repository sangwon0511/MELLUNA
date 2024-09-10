import ItemPageView from "./view";
import ItemPageViewModel from "./viewModel";

function ItemPage() {
	const viewModel = ItemPageViewModel();
	return <ItemPageView viewModel={viewModel} />;
}

export default ItemPage;
