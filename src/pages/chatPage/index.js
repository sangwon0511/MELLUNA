import ChatPageView from "./view";
import ChatPageViewModel from "./viewModel";

function ChatPage() {
	const viewModel = ChatPageViewModel();
	return <ChatPageView viewModel={viewModel} />;
}

export default ChatPage;
