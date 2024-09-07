import React, { Fragment } from 'react'

// 아이콘
import { SlArrowDown, SlMagnifier } from "react-icons/sl";
import { GoBell } from "react-icons/go";
import { IoMenuOutline } from "react-icons/io5";
import { FaCar } from "react-icons/fa";
import { FaHouseChimney } from "react-icons/fa6";
import { MdPersonSearch } from "react-icons/md";
import { PiHouseFill } from "react-icons/pi";
import { RiWechatLine } from "react-icons/ri";

import "./Fonts/Font.css"
import './App.css';

function App() {
  return (
    <Fragment>

      {/* 헤더 */}
      <div className='header'>
        <div className='location'>엘리아스</div>
        <SlArrowDown className='arrowdown'/>
        <SlMagnifier className='search'/>
        <GoBell className='bell'/>
      </div>

      {/* 상품 목록 */}
      <div className='list'>

        <div className='categoryList'>

          <div className='categoryButton'>
            <IoMenuOutline className='category'/>
          </div>

          <div className='usedcarButton'>
            <FaCar className='usedcar'/>
            <p>중고차</p>
          </div>

          <div className='houseButton'>
            <FaHouseChimney className='house'/>
            <p>부동산</p>
          </div>
          
          <div className='albaButton'>
            <MdPersonSearch className='alba'/>
            <p>알바</p>
          </div>

        </div>

        <div className='content1'>
          <div className='contentimg'/>
          <p id='title'>멜?루 팝니다</p>
          <p id='timestamp'>트릭컬 · 39분 전</p>
          <p id='price'>123,456원</p>
          <div className='line'></div>
        </div>
        <div className='content1'>
          <div className='contentimg'/>
          <p id='title'>멜루나</p>
          <p id='timestamp'>엘리아스 · 1시간 전</p>
          <p id='price'>390,000원</p>
          <div className='line'></div>
        </div>
        <div className='content1'>
          <div className='contentimg'/>
          <p id='title'>몰???루</p>
          <p id='timestamp'>아카이브 · 19분 전</p>
          <p id='price'>12,000원</p>
          <div className='line'></div>
        </div>
      </div>

      {/* 푸터 */}
      <div className='footer'>
        <div className='homeButton'>
          <PiHouseFill className='home'/>
          <p>홈</p>
        </div>

        <div className='chatButton'>
          <RiWechatLine className='chat'/>
          <p>채팅</p>
        </div>
      </div>
    </Fragment>
  );
}

export default App;