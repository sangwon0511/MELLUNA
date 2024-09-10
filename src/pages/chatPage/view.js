import React, { Fragment } from "react";
import { useNavigate } from "react-router-dom";
import "./styleChat.css";

// 아이콘
import { IoIosArrowBack, IoIosSend  } from "react-icons/io";
import { FaCalendar } from "react-icons/fa";
import { FaCirclePlus } from "react-icons/fa6";
import { LuPlus } from "react-icons/lu";

function ChatPageView() {
	const navigate = useNavigate();
	return (
		<div className="chat">
			{/* 헤더 */}
			<div className='header'>
				<IoIosArrowBack onClick={() => {navigate(-1);}} className='arrowback'/>
				{/* TODO:사용자이름과 온도를 데이터베이스에서 받아오기 */}
				<div className='username'>멜룬멜룬</div>
				{/* 사용자 온도...? */}
			</div>

			{/* 상품 정보 */}
			<div className='banner'>
				<div className="info">
					<div className="itemimg"></div>
					<div className="iteminfo">
					  <p id="title">멜론</p>
					<p id="price">100,000원</p>
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

			{/* 채팅창 */}
			<div className="chating">
			</div>

			{/* 푸터 */}
			<div className='chatfooter'>
				<LuPlus className="plus"/>
				<div className="input"><p>메시지 보내기</p></div>
				<IoIosSend className="send" />
			</div>
		</div>
	);
}

export default ChatPageView;
