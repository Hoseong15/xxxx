/* eslint-disable */
import React, { useCallback, useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight, faArrowLeft, faXmark, faL } from '@fortawesome/free-solid-svg-icons';
import { useRef, useEffect } from 'react';
import ReactPlayer from 'react-player';
import { motion } from 'framer-motion';
import Nav1 from './Nav1.css'
import img from './갓오브워 라그나로크.jpg'
import img1 from './라스트오브어스.jpg'
import img2 from './언챠티드.jpg'
import video from './갓오브워.mp4'
import video1 from './라스트오브어스 영상.mp4'
import video2 from './언챠티드 영상.mp4'
import godAtr from './section5a-characters-atreus.webp'
import godKr from './section5a-characters-kratos.webp'
import godkr1 from './크레토스 방패.webp'
import godkr2 from './크레토스 문.webp'
import godAtr1 from './아트레우스1.webp'
import godAtr2 from './아트레우스2.webp'



function Nav() {

  let [navChange, setNavChange] = useState(false);
  let [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [showNavbar, setShowNavbar] = useState(false);
//////////////////////////////////////////////////////////////////////
 

  const [showVideo, setShowVideo] = useState(false);
  const videos = [
    {url: video, title: "2022", content: ' Playstation Essential Game'},
    {url: video1, title: '2020', content: '21C  GOTY - THE LAST OF US ' },
    {url: video2, title: '2015', content: 'The Best Adventure Game '},
  ];
    
  // const [playIndex, setPlayIndex] = useState(0);

  function handleProgress(progress) {
  const playedSeconds = progress.playedSeconds;

  // 현재 재생 중인 동영상의 끝 지점을 계산
  const currentVideoEnd = playIndex + 35;

  // 현재 재생 중인 동영상의 끝 지점과 비교
  // playedSeconds 끝 지점이랑 같거나 크다면 다음 인덱스(playindex + 1)설정
  // 마지막 동영상이 재생 중이면 첫번째 동영상으로 백
  if (playedSeconds >= currentVideoEnd && playIndex < videos.length - 1) {
    setPlayIndex(playIndex + 1);
  }
  }

  
  // 이미지 클릭했을때 영상이 사라졌다가 다시 나타나게 하는 부분 //
  // showvideo 상태 toggle

  function handleClick(index) {
    setShowVideo(!showVideo);
    setPlayIndex(index);
  }
  function handleClick1(index) {setPlayIndex(index);}
  function handleClick2() {setShowVideo(!showVideo);}

  

  // 영상이 끝날 때 다시 처음으로 돌아가는 루프 //
  // 마지막 동영상을 재생 중이라면, 첫 번째 동영상의 인덱스(0)로 설정
  // 아니면 다음 동영상의 인덱스(playIndex + 1)를 설정
  function handleEnded() {
    if (playIndex === videos.length - 1) {
      setPlayIndex(0);
    } else {
      setPlayIndex(playIndex + 1);
    }
  }

  // 이미지를 배열에 집어넣은 후 클릭했을 때 슬라이드 형식으로 움직이게 만드는 부분 //

    
  const [imageList, setImageList] = useState([
    { src: img, alt: '갓 오브 워 라그나로크', id: 0 },
    { src: img1, alt: '라스트 오브 어스', id: 1 },
    { src: img2, alt: '언챠티드', id: 2 },
  ]);
  

  function handleIconClick(direction) {
    if (direction === 'prev') {
      // 이전 버튼을 클릭했을 때
      const firstImage = imageList.shift();
      imageList.push(firstImage);
      setImageList([...imageList]);
    } else {
      // 다음 버튼을 클릭했을 때
      const lastImage = imageList.pop();
      imageList.unshift(lastImage);
      setImageList([...imageList]);
    }
  }
  

  // game detail 이미지 변경 //

  const [godText, setGodText] = useState([
    {text: '크레토스', src: godKr, id:0, content: '스파르타의 전쟁의 신은 미드가르드에서 새로운 삶을 꾸렸습니다. 크레토스는 부성을 통해 새로운 목적을 찾았습니다. 라그나로크가 다가오며, 상황은 그 어느 때보다도 위험해졌습니다. 크레토스는 아들, 그리고 아들과 함께 만든 삶을 보호할지... 아니면 아홉 영역을 파멸적인 전쟁으로부터 수호할지 선택해야 합니다.'},
    {text: '아트레우스', src: godAtr, id:1, content: '아트레우스는 크레토스와 거인 라우페이의 반신 아들인 십대 소년입니다. 그는 거인과 에시르 사이에서는 로키로 불립니다. 라그나로크가 다가오는 가운데, 아트레우스는 자신의 정체성을 탐구하고 더 잘 이해하며, 세상에서 자신의 위치를 찾고자 갈망합니다. 그는 아버지와 함께 맹훈련을 했습니다. 비록 그들의 관계는 여전히 견고하지만, 아트레우스는 자신만의 길을 찾고자 하는 마음이 간절합니다.'},
  ]);

  const[currentGodIndex, setCurrentGodIndex] = useState(0);
  const [showImage, setShowImage] = useState(false)
  // const [openDe, setOpenDe] = useState(true)

  const handleArrowClick = (direction) => {
    if(direction === 'left') {
      const first = godText.shift();
      godText.push(first);
      setGodText([...godText]);
    } else {
       const last = godText.pop();
      godText.unshift(last);
      setGodText([...godText]);
    }
  }

  // 스크롤 이벤트 //
  useEffect(() => {
    const handleScroll = () => {
      const ganmeDetailSection = document.querySelector('.game-detail');
      const gameDetailSectionTop = ganmeDetailSection.getBoundingClientRect().top;
      const windowHeight = window.innerHeight;

      if(gameDetailSectionTop < windowHeight / 2) {
        setShowImage(true)
      } else {
        setShowImage(false)
      }
      };
      window.addEventListener('scroll', handleScroll);
      return () => {
        window.removeEventListener('scroll', handleScroll)
      }
    })


  //////  game detail 이미지 클릭했을때 없어졌다가 나오게하는 모달창 //
  const [modalOpen, setModalOpen] =useState(false);
  const modalClose = () => {
    setModalOpen(false);
  }

  const openModal = () => {
    setModalOpen(true)
    // setOpenDe(false)
  }

  const [personDetail, setPersonDetail] = useState([
    { src: godkr1, id: 0 },
    { src: godkr2, id: 1 },
    { src: godAtr1, id:2},
    { src: godAtr2, id:3}
  ]);
  const [personDetail1, setPersonDetail1] = useState(0)
  
  const handlePersonClick = (direction) => {
    if (direction === 'left') {
      const first = personDetail.shift();
      personDetail.push(first);
      setPersonDetail([...personDetail]);
    } else {
      const last = personDetail.pop();
      personDetail.unshift(last);
      setPersonDetail([...personDetail]);
    }
  };
  
  const currentImage = personDetail[0];
  console.log(currentImage)


 ///////////////////////////////////////////////////////////////////////////

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
{/*/////////////////////////////////////////////////////////////////////////////////////////*/}   

        <section className='game-ck'>
          {!showVideo ? (
            <div className='game-wrapper'>
              <button  onClick={() => handleIconClick('prev')}>
                  <i className='icon-prev' />
                  <span className="sr-only">Previous</span>
              </button>

              <div className='game-btn'>
                {imageList.map((image) => (
                  <img
                    key={image.id}
                    className='game-img'
                    src={image.src}
                    alt={image.alt}
                    onClick={() => handleClick(image.id)}
                  />
                ))}
              </div>

              <div className='icon-wrapper'>
                <button onClick={() => handleIconClick('next')}>
                  <i className='icon-next'  />
                  <span className="sr-only">Next</span>
              </button>
              </div>

            </div>
          ) : (
            <div className='player-wrapper'>
              <ReactPlayer
                className='react-player'
                url={videos[playIndex]?.url}
                width='100%'
                height='600px'
                playing={true}
                muted={true}
                light={false}
                pip={true}
                onProgress={handleProgress}
                onEnded={handleEnded}
                
              />
              <div className='video-text'>
                <h1>{videos[playIndex]?.title}</h1>
                <p>{videos[playIndex]?.content}</p>
              </div>
    
                
              <div className='hide-list'>
                <FontAwesomeIcon icon={faArrowLeft} className='hide-pre'  onClick={() => handleIconClick('prev')}/>
                {imageList.map((image) => (
                  <img
                    key={image.id}
                    className='hide-img'
                    src={image.src}
                    alt={image.alt}
                    onClick={() => handleClick1(image.id)}
                  />
                ))}
                 <FontAwesomeIcon icon={faArrowRight} className='hide-nex' onClick={() => handleIconClick('next')} />
              </div>
            </div>
          )}
        </section>
        {/* {openDe && ( */}
          <section className='game-detail'>
          <div>
            <h1 onClick={() => handleClick2()}>게임소개 세션</h1>
          </div>

          <div className='game-intr'>
            <div className='game-bg'>
            {showImage && (
              <motion.div
                key={currentGodIndex}
                className='game-bg'
                initial={{ opacity: 0, left: '-100%' }}
                animate={{ opacity: 1, left: 0 }}
                exit={{ opacity: 0, left: '100%' }}
                transition={{ type: 'tween', duration: 1.5 }}
              >
                <motion.img
                  className='kratos'
                  src={godText[currentGodIndex].src}
                  alt=''
                />
                <h1 className='game-txt' onClick={openModal}>{godText[currentGodIndex].text}</h1>
                
              </motion.div>
            )}
              <div className='game-pre' onClick={()=> handleArrowClick('left')}>
                <FontAwesomeIcon icon={faArrowLeft}/>
              </div>

              <div className='game-next' onClick={()=> handleArrowClick('right')}>
                <FontAwesomeIcon icon={faArrowRight} />
              </div>
            </div>
          </div>
        </section>
        {/* )} */}
        

          {modalOpen && (
            <section className='hide-game-detail'>
              <div className='hide-game-wapper'>
                 <img className='hide-game-img' src={godText[currentGodIndex].src} alt=""/>

                <div className='hide-game-text'>
                  <h1 className='text-main'>{godText[currentGodIndex].text}</h1>
                   <FontAwesomeIcon className='faxMark' icon={faXmark} onClick={modalClose} />
                  <p className='text-sub'>{godText[currentGodIndex].content}</p>
                  <img key={personDetail[personDetail1].id}  src={personDetail[personDetail1].src} alt="" />
                  <FontAwesomeIcon className='modal-icon' icon={faArrowLeft} onClick={() => handlePersonClick('left')} />
                  <FontAwesomeIcon className='modal-icon1' icon={faArrowRight} onClick={() => handlePersonClick('right')} />

                </div>

              </div>
            </section>
            )}
    </>
  )
}

export default Nav