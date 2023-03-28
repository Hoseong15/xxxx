/* eslint-disable */
import React, { useCallback, useState } from 'react'
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faUserPlus } from '@fortawesome/free-solid-svg-icons'
import { useRef, useEffect } from 'react';
import Nav1 from './Nav1.css'
import img from './갓오브워 라그나로크.jpg'
import ReactPlayer from 'react-player';
import video from './video.mp4'
import video1 from './video2.mp4'


function Nav() {


  let [navChange, setNavChange] = useState(false);
  let [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [showNavbar, setShowNavbar] = useState(false);

  const [playVideo, setPlayVideo] = useState(false);
  const videos = [
    'video.mp4',
    'videp2.mp4',
  ]
  const[current, setCurrent] = useState(0);

  useEffect(()=> {
    const interval = setInterval(() => {
      setCurrent((current) + 1);
      setPlayVideo(false)
    }, 100000);

  })


  



  //navbar 스크롤이벤트 후 + useCallback 훅으로 지속된 실행을 방지함
  const handleScroll = useCallback(() => {
    console.log(window.scrollY);
    (window.scrollY > 45 && navChange == false) ? (
      console.log('성공'),
      setNavChange(true),
      console.log(navChange)
    ) : (window.scrollY < 45 && navChange == true) ? (
      console.log('성공'),
      setNavChange(false),
      console.log(navChange)
    ) : null
  }, [navChange]);
  

  // 미리 실행 할 스크롤 이벤트ㅇ;ㅣㅁ
  useEffect(() => {
    let handleResize = () => {
      setWindowWidth(window.innerWidth);
    };
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll); 
    };
  }, [handleScroll]);

  // 반응형 NavBgi 이미지 개수 변경을 위한 후크임
  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  // 웹 렌더링 후 Navbar가 나타나는 애니메이션 효과를 위한 setTimeout 장치임
  useEffect(() => {
    let timeoutNav = setTimeout(() => {
      setShowNavbar(true);
    }, 1000);

    return () => {
      clearTimeout(timeoutNav);
    };
  }, []);

  // 반응형 width 사이즈 제한 ( 후에 여러가지 크기를 가진 모바일 기기를 위해 수정이나 추가할 수 있음 )
  const isMobile = windowWidth <= 768;

  return (
    <>
      <section className='global-header'>
        <div className={`header-bg f-img ${ isMobile ? 'on' : '' }`}></div>
        <div className={`header-bg s-img ${ isMobile ? 'next-img' : '' }`}></div>
        <div className={`header-bg t-img ${ isMobile ? 'on' : '' }`}></div>
      </section>
      
      <nav className={`global-nav ${ navChange || isMobile ? 'on' : '' } ${ showNavbar ? 'show' : '' }`}>
          <ul className={`nav-list ${ showNavbar ? 'show' : '' }`}>
            <li>Menu</li>
            <li>Menu</li>
            <li>Menu</li>
          </ul>
          <h1 className='react-logo'>
            {
              !isMobile ? (
               <img className={`${ showNavbar ? 'show' : '' }`} src={!navChange ? process.env.PUBLIC_URL + 'project/public/teamLogoBlack.png' : process.env.PUBLIC_URL + 'imgSbk930123/teamLogoWhite.png'}></img>
              ) : null
            }
            
          </h1>
          <ul className={`nav-list nav-op ${ showNavbar ? 'show' : '' }`}>
            {/* <li>menu</li> */}
            <li>Menu</li>
            <li>Menu</li>
            {/* <li><FontAwesomeIcon icon={faUserPlus} /></li> */}
          </ul>
        </nav>

        <div className='game-img'>
          <div className='player-wrapper'>
            <ReactPlayer
              className='react-player'
              url={!playVideo ? video : video1}    // 플레이어 url
              width='1000px'         // 플레이어 크기 (가로)
              height='500px'        // 플레이어 크기 (세로)
              playing={true}        // 자동 재생 on
              muted={true}          // 자동 재생 on
              light={false}         // 플레이어 모드
              pip={true}            // pip 모드 설정 여부
              onEnded={() => setPlayVideo(true)}  // 플레이어 끝났을 때 이벤트
                />
            </div>
         
        </div>

        <div className='game-ck'>
          <button className='game-btn'>
            <img className='game-img' src={img} alt="" />
          </button>
        </div>
    </>
  )
}

export default Nav