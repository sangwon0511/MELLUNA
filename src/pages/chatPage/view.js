import React, { Fragment } from "react";
import { useNavigate } from "react-router-dom";
import "./styleChat.css";

// 아이콘
import { IoIosArrowBack, IoIosSend } from "react-icons/io";
import { FaCalendar } from "react-icons/fa";
import { FaCirclePlus } from "react-icons/fa6";
import { LuPlus } from "react-icons/lu";
import { BsFillShieldLockFill } from "react-icons/bs";

function OppnentChatLog({ content }) {
	return (
		<div className="urChatArea">
			<img src={`${process.env.PUBLIC_URL}/meloon.png`} className="opponentimg"></img>
			<div className="urChat">{content}</div>
		</div>
	)
}

function MeChatLog({ content }) {
	return (
		<div className="meChatArea">
			<div className="meChat">{content}</div>
		</div>
	)
}


function ChatPageView({ viewModel }) {
	const navigate = useNavigate();
	return (
		<div className="chat">
			{/* 헤더 */}
			<div className='header'>
				<IoIosArrowBack onClick={() => { navigate(-1); }} className='arrowback' />
				<div className='username'>{viewModel.metadata.opponent_name}</div>
			</div>

			{/* 상품 정보 */}
			<div className='banner'>
				<div className="info">
					<img src={`${process.env.PUBLIC_URL}/profile${viewModel.chat_room_id}.png`} className="itemimg"></img>
					<div className="iteminfo">
						<p id="title">{viewModel.metadata.product_name}</p>
						<p id="price">{viewModel.metadata.product_price}원</p>
					</div>
				</div>
				<div className="buttons">
					<div>
						<FaCalendar />
						<p>약속잡기</p>
					</div>
					<div>
						<FaCirclePlus />
						<p>물품추가</p>
					</div>
				</div>
			</div>

			<div className="alart">
				<BsFillShieldLockFill className="lock" />
				<p>이 채팅방에서는 FDGPT를 직접 체험해볼 수 있어요.</p>
			</div>

			{/* 채팅창 */}
			<div className="chating">
				{viewModel.isLoading ? (
					<div className='loading'>채팅방을 불러오고 있어요...</div>
				) :
					viewModel.chat.map((data, index) => {
						if (data.is_me) {
							return <MeChatLog key={index} content={data.content}></MeChatLog>
						} else {
							return <OppnentChatLog key={index} content={data.content}></OppnentChatLog>
						}
					})
				}
				<div style={{ height: "65px" }}></div>
				<div ref={viewModel.bottomRef}></div>

			</div>

			{/* 푸터 */}
			<form className='chatfooter' onSubmit={viewModel.onChatSubmit}>
				<LuPlus className="plus" />
				<input
					onChange={viewModel.onChatInputChange}
					ref={viewModel.inputRef}
					value={viewModel.chatInput}
					className={(viewModel.inputDisabled) ? "inputLock" : "input"}
					placeholder={(viewModel.inputDisabled) ? "상대방이 입력중이에요..." : "메시지 보내기"}
					disabled={viewModel.inputDisabled}></input>
				<IoIosSend className="send" onClick={viewModel.onChatSubmit} />
			</form>
		</div>
	);
}

export default ChatPageView;
