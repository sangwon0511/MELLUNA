import React, { Fragment } from "react";
import { useNavigate } from "react-router-dom";
import "./style.css";

// 아이콘
import { SlArrowDown, SlMagnifier } from "react-icons/sl";
import { GoBell } from "react-icons/go";
import { IoMenuOutline } from "react-icons/io5";
import { FaCar } from "react-icons/fa";
import { FaHouseChimney } from "react-icons/fa6";
import { MdPersonSearch } from "react-icons/md";
import { PiHouseFill } from "react-icons/pi";
import { RiWechatLine } from "react-icons/ri";

function ListItem({ title, location, timestamp, price, item_id }) {
	const navigate = useNavigate();
	return (
		<div onClick={() => { navigate(`/item/${item_id}`); }} className='content1'>
			<img className='contentimg' src={`${process.env.PUBLIC_URL}/profile${item_id}.png`} />
			<div className='contenttext'>
				<p id='title'>{title}</p>
				<p id='timestamp'>
					{location} · {timestamp}
				</p>
				<p id='price'>{price}원</p>
			</div>
			<div className='line'></div>
		</div>
	);
}

function MainPageView({ viewModel }) {
	const { item, isLoading } = viewModel;

	const navigate = useNavigate();
	return (
		<Fragment>
			{/* 헤더 */}
			<div className='header'>
				<div className='location'>
					<p>UNIST</p>
					<SlArrowDown className='arrowdown' />
				</div>
				<div className='search-and-bell-box'>
					<SlMagnifier className='search' />
					<GoBell className='bell' />
				</div>
			</div>

			{/* 이거 list 안에서 뺐어요. */}
			<div className='categoryList'>
				<div className='categoryButton'>
					<IoMenuOutline className='category' />
				</div>

				<div className='usedcarButton'>
					<FaCar className='usedcar' />
					<p>중고차</p>
				</div>

				<div className='houseButton'>
					<FaHouseChimney className='house' />
					<p>부동산</p>
				</div>

				<div className='albaButton'>
					<MdPersonSearch className='alba' />
					<p>알바</p>
				</div>
			</div>

			{/* 상품 목록 */}
			<div className='list'>
				{isLoading ? (
					<div className='loading'>데이터 불러오는중...</div>
				) : (
					item.map((item, index) => (
						<ListItem
							key={index}
							title={item.title}
							location={item.location}
							timestamp={item.timestamp}
							price={item.price}
							item_id={item.item_id}
						></ListItem>
					))
				)}
			</div>

			{/* 푸터 */}
			<div className='footer'>
				<button className='homeButton'>
					<PiHouseFill color="black" className='home' />
					<p style={{ color: "black" }}>홈</p>
				</button>

				<button className='chatButton'>
					<RiWechatLine color="black" className='chat' />
					<p style={{ color: "black" }}>채팅</p>
				</button>
			</div>
		</Fragment>
	);
}

export default MainPageView;
