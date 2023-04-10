/* eslint-disable */
import React, { useCallback, useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight, faArrowLeft, faXmark, faL } from '@fortawesome/free-solid-svg-icons';
import { useRef, useEffect } from 'react';
import ReactPlayer from 'react-player';
import { delay, motion } from 'framer-motion';
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
import pray from './프레이야.webp'
import meta from './last of us meta.png'
import joel from './joel.jpg'
import ally from './ally.jpg'
import tommy from './tommy1.jpg'
import ungame1 from './언챠게임0.webp'
import ungame2 from './언챠게임1.webp'
import ungame3 from './언챠게임2.webp'
import ungame4 from './언챠게임3.webp'
import unchvideo from './언차티드영상.mp4'
import unchvideo1 from './언챠티드영상1.mp4'
import unpeole from './나타.webp'
import unpeole1 from './짭.webp'
import unpeole2 from './네이션.webp'

function Nav() {

  const [showVideo, setShowVideo] = useState(false);
  const videos = [
    {url: video, title: "2022", content: ' Playstation Essential Game'},
    {url: video1, title: '2014', content: '21C  GOTY - THE LAST OF US ' },
    {url: video2, title: '2015', content: 'The Best Adventure Game '},
  ];
    
  const [playIndex, setPlayIndex] = useState(0);

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
  function handleClick2() {setShowVideo(false);}



  

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
    { src: img, alt: '갓 오브 워 라그나로크', id: 0},
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
    {text : '프레이야', src:pray, id:1, content : '프레이야는 바니르 여신, 발키리의 전 지도자, 오딘의 전처, 그리고 에시르의 전 여왕입니다. 사랑하지만 사이가 소원해진 아들 발두르의 죽음 이후, 프레이야는 크레토스와 아트레우스를 상대로 잔혹한 복수를 맹세했습니다.'},
    {text: '아트레우스', src: godAtr, id:2, content: '아트레우스는 크레토스와 거인 라우페이의 반신 아들인 십대 소년입니다. 그는 거인과 에시르 사이에서는 로키로 불립니다. 라그나로크가 다가오는 가운데, 아트레우스는 자신의 정체성을 탐구하고 더 잘 이해하며, 세상에서 자신의 위치를 찾고자 갈망합니다. 그는 아버지와 함께 맹훈련을 했습니다. 비록 그들의 관계는 여전히 견고하지만, 아트레우스는 자신만의 길을 찾고자 하는 마음이 간절합니다.'},
  ]);

  const[currentGodIndex, setCurrentGodIndex] = useState(0);
  const [showImage, setShowImage] = useState(false)
  const [openDe, setOpenDe] = useState(true)

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
      if(ganmeDetailSection) {
        const gameDetailSectionTop = ganmeDetailSection.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;
        if(gameDetailSectionTop < windowHeight / 2) {
          setShowImage(true)
        } else {
          setShowImage(false)
        }
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
    setOpenDe(true)
  }

  const openModal = () => {
    setModalOpen(true)
    setOpenDe(false)
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

  /////////////

const [lastImg, setLastImg] = useState([
  { src: meta, content: ''},
  { src: joel, id:0,  content: '조엘과 엘리가 이어가는 우정에 있습니다. 이것은 사랑, 충실함, 그리고 구원의 이야기' },
  { src: ally, id:0, content: '' },
  { src: tommy,id:0, content: '' },  
]);
const [lastImg1, setLastImg1] = useState(false);


const [uncharted, setUncharted] = useState([
  {src :ungame2 , id:1, content:'UNCHARTED: 잃어버린 유산', content1: '전설적인 유물이 무자비한 전쟁광의 손에 들어가지 못하도록 막기 위해, 경험 많은 모험가 클로에 프레이저는 유명한 용병인 나딘 로스에게 도움을 요청합니다. 유물을 되찾기 위해 둘은 가네쉬의 황금 상아가 있는 인도의 서고츠 산맥으로 모험을 떠나야 합니다. 클로에의 극적인 여정에서 그녀는 자신의 과거를 마주하고 스스로의 유산을 만들기 위해 어디까지 희생할 수 있는지 결정해야 합니다.'},
  {src :ungame3 , id:2, content:'UNCHARTED 4: 해적왕과 최후의 보물', content1:'저번 무모한 모험 이후로 3년이 지난 현재, 네이선 드레이크는 세계 탐험을 그만 뒀지만 여전히 모험을 향한 거부하기 힘든 유혹을 느낍니다. 그의 형 샘 드레이크가 결코 잊을 수 없는 경험과 아직 발견되지 않은 보물을 약속하며 찾아오자, 네이선은 금방 짐을 싸고 리버탈리아의 해적 유토피아를 향해 모험을 떠날 준비를 합니다.'},
  {src :ungame4 , id:3, content:'UNCHARTED: The Nathan Drake Collection™', content1:'Naughty Dog의 획기적인 팀이 제작한 네이선 드레이크의 수수한 시작부터 비범한 발견까지, 전 세계를 배경으로 한 위기로 가득한 여정을 경험해 보세요. 네이선이 무자비한 적을 상대로 상상조차 못할 보물을 위해 목숨을 걸고 경쟁을 벌이며 만나는 개성 가득한 여러 명의 캐릭터를 만나보세요.'},
])

const [unchVideo, setUnchVideo] = useState('');
const [unchModalOpen, setUnchModalOpen] = useState(false);
const [playIndex1, setPlayIndex1] = useState(0);

const unvideos = [
  {
    id: 1,
    url: unchvideo,
    src : unpeole,
    src1 : unpeole1,
    content2: '클로에 프레이저',
    content3: ' - UNCHARTED 2: 황금도와 사라진 함대',
    content4: ' - UNCHARTED 3: 황금 사막의 아틀란티스',
    content5: '시리즈에서 가장 인기 많은 캐릭터 중 하나인 클로에는 네이선 드레이크와 비견되는 대응 능력, 고고학 지식, 그리고 즉흥적인 성격을 가진 악명 높은 보물 사냥꾼입니다. 그녀는 전투와 운전 실력이 둘 다 뛰어난 것으로 유명합니다.',
    content6: '클로에는 충동적이고 즉흥적이며, 기지를 최대로 발휘합니다. 그녀의 방식은 종종 도덕적인 선을 흐리지만 항상 결과를 내기 때문에 그녀를 찾는 이가 많습니다. 하지만 그녀에게도 한계는 있으며, 예상 밖의 상황이 펼쳐지면 주저하지 않고 피해를 막습니다.',
    content7: '나딘 로스',
    content8: 'UNCHARTED 4: 해적왕과 최후의 보물',
    content9: '시리즈에서 등장한 지 얼마 되지 않았지만, 금세 그녀만의 팬층을 확보한 캐릭터입니다. 나딘은 무기를 다루는 전문가로, 그녀의 부하들이 운영하는 군사 회사인 쉐도우 마트에서 일합니다. 나딘은 매우 뛰어난 전투 능력과 지적 수완을 지니고 있으며, 항상 일관성 있는 인물로 그녀의 행동이 항상 목적에 맞게 이루어집니다.'
  }
 
];

const unOpenModal = (id) => {
  const selectedUnvideo = unvideos.find((video) => video.id === id);
  if (selectedUnvideo) {
    setUnchVideo(selectedUnvideo.url);
    setPlayIndex1(selectedUnvideo.id - 1);
    setUnchModalOpen(true);
  }
};

const unModalClose = () => {
  setUnchVideo('');
  setPlayIndex1(0);
  setUnchModalOpen(false);
};


const [unch1ModalOpen, setUnch1ModalOpen] = useState(false);
const [unch1Text, setUnch1Text] = useState('');

const unch1 = [
  {
    content120 : 'sdsdsdsd'
  }
]

const unOpenModal1 = () => {
  setUnch1ModalOpen(true);
  setUnch1Text(unch1.content120);
};



////////////////////////////////////////////////////////////////////


  return (
    <>
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


        {openDe && (
          <section className='game-detail'  onClick={() => handleClick2()}>
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
                  onClick={openModal}
                />
                <h1 className='game-txt'>{godText[currentGodIndex].text}</h1>
                  
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
        )}
        

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

        <div className='last-of-us-warpper'>
          <div className='last-bg'>

            <h1 className='last-text'>
            
            </h1>

            <p className='last-text1'>
            200개 이상의 GOTY 수상 이력을 자랑하는 The Last of Us에서 감성을 자극하는 스토리텔링과 인상적인 캐릭터를 만나세요.
            </p>

            <p className='last-text2'>
            기존 문명을 극단적으로 뒤튼 전염병으로부터 20년이 흐른 현재, 전염병에 감염된 인간들은 날뛰고 생존자들은 식량이나 무기, 물자를 차지하기 위해 서로를 죽이고 있습니다. 척박한 현실 속에서 살아남은 생존자 조엘은 14세 소녀인 엘리를 보안이 철저한 군 격리 지역으로부터 탈출시키는 의뢰를 받지만, 처음에 간단할 거라 생각한 이 의뢰는 곧 미국을 가로지르는 잔혹한 여정으로 바뀝니다.
            </p>

            <p className='last-text3'>
            5년 후, 조엘과 엘리는 와이오밍주 잭슨에 정착했습니다. 지역 사회를 뒤흔드는 비참한 사건이 일어난 후, 엘리는 정의와 마무리를 실현하기 위해 혹독한 여정의 길에 오릅니다. 그녀는 길에서 조우하는 위험뿐 아니라, 스스로의 결정에 대한 책임 역시 엘리가 맞서 싸워야 할 장애물입니다.
            </p>

          </div>
          
        <div className='last-card-warpper'>
          {lastImg.map((item, index) => (
            <div className='last-card' key={index}>
              <div className='card'>
              <div className='front'></div>
              <div className={`back ${item.id === 0 ? 'opacity7' : ''}`}>
                <img src={item.src} alt='unimage' />
                <p>{item.content}</p>
              </div>
              </div>
            </div>
          ))}
        </div>

        <div className='uncharted'>
          <div className='unch-main'>
            <div className='unch-text'></div>
          </div>

          <div className='unch-bg'>
            
            <h1 className='unch-bgtext'>
              UNCHARTED 게임
            </h1>

            <div className='unch-bg-series'>
              UNCHARTED 시리즈

              <div className='unch-series-list'>
                <div className='unch-series-item'>
                  {uncharted.map((item, index) => (
                    <div className='unch-item' key={index}>
                     <img src={item.src} alt="" />
                     <h4>{item.content}</h4>
                     <p>{item.content1}</p>
                    </div>
                  ))}
                  <button className='unch-btn' onClick={() => unOpenModal(1)}>자세히 보기</button>                
                  <button className='unch-btn1' onClick={()=> unOpenModal1()}>자세히 보기</button>
                </div>
              </div>

            </div>
          </div>
        </div>

        {unchModalOpen && (
          <div className='uncharted-collection'>
            {unvideos.map((video, index) => (
              <div key={index} onClick={() => unOpenModal(video.id)}>
              </div>
            ))}
            {unchVideo && (
              <div className='unch-video'>
                <ReactPlayer
                  className='video1'
                  url={unvideos[playIndex1]?.url}
                  width='45%'
                  height='1%'
                  playing={true}
                  muted={true}
                  light={false}
                  pip={true}
                  loop={true}
                />
 
              {unvideos.map((video, index) => (
                  <div className='The-Lost-Legacy' id={video.id}>
                  <div className='The-Lost-Legacy-text'>
                    <img src={video.src} alt='' />
                    <div className='text-text'>
                      <h2>{video.content2}</h2>
                      <p>
                        <span className='text-span'>첫 등장</span>
                        {video.content3}
                      </p>
                      <p>
                        <span className='text-span'>마지막 등장</span>
                        {video.content4}
                      </p>
                      <p>{video.content5}</p>
                      <p>{video.content6}</p>
                    </div>
                  </div>

                  <div className='dsdsdsd'>
                    <div className='ds-text'>
                      <h2>{video.content7}</h2>
                      <p>
                        <span className='text-span'>첫/마지막 출연-</span>
                        {video.content8}
                      </p>
                      <p>{video.content9}</p>
                    </div>
                    <img src={video.src1} alt='' />
                  </div>
                </div>
              ))};


             {unch1.map((i, index1) => (
              <div className='unch1-video'>
                <p>{i.content120}</p>
              </div>
             ))}
            

              
          
          <FontAwesomeIcon
          className='unicon'
          icon={faXmark}
          onClick={unModalClose}
          />
        </div>
       )}
    </div>
    )}




   
            
        </div>
    </>
  )
}

export default Nav