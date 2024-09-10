import React, { Fragment } from "react";
import { useNavigate } from "react-router-dom";
import "./styleItem.css";

// 아이콘
import { IoIosArrowBack } from "react-icons/io";
import { GoHome } from "react-icons/go";
import { FaRegHeart } from "react-icons/fa6";

function ItemPageView({ viewModel }) {
	const navigate = useNavigate();

	return (
		<div className="item">
			{/* 헤더 */}
			<div className='header'>
				<IoIosArrowBack onClick={() => { navigate(-1); }} className='arrowback' />
				<GoHome className="home" />
			</div>

			<img className="itemimg" src={`${process.env.PUBLIC_URL}/profile${viewModel.item_id}.png`}></img>

			{/* 프로필 */}
			<div className="profile">
				<img className="profileimg" src={`${process.env.PUBLIC_URL}/meloon.png`}></img>
				<div className="metadata">
					<div className="username">{viewModel.metadata.writer}</div>
					<div className="itemLocation">{viewModel.metadata.location}</div>
				</div>
			</div>
			<hr></hr>

			{/* 상품 정보 */}
			<div className="iteminfo2">
				<div className="title">{viewModel.metadata.title}</div>
				<div className="description">
					{viewModel.metadata.description}
				</div>
			</div>

			{/* 푸터 */}
			<div className='itemfooter'>
				<div className="priceArea1">
					<FaRegHeart size={"23px"} />
					<div className="verticalHr"></div>
					<div className="priceArea2">
						<div className="price">{viewModel.metadata.price}원</div>
						<p style={{ color: "grey", fontSize: "12px" }}><u>가격 제안 불가</u></p>
					</div>
				</div>
				<div onClick={viewModel.onChatRoomClick} className="chatButton">채팅하기</div>
			</div>
		</div >
	);
}

export default ItemPageView;
