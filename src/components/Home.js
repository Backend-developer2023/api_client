import React, { useState, useEffect } from 'react';
import Games from '../components/Games'
import RightTabs from '../components/RightTabs';
import GameLoadingAnimation from '../SubComponents/GamesLoadingAnimation';
import { NavLink } from "react-router-dom";
import axios from 'axios';
import '../CSS/Home.css'

// icons
import { BsArrowLeftCircle } from 'react-icons/bs'
import { BsArrowRightCircle } from 'react-icons/bs'
import { MdOutlineKeyboardArrowDown } from 'react-icons/md'
// imgs 
import content_1 from '../images/content-1.png'
// import content_2 from '../images/content-2.png'
// import content_3 from '../images/content-3.png'
// import content_4 from '../images/content-4.png'
// import content_5 from '../images/content-5.png'
// import content_6 from '../images/content-6.png'
// import content_7 from '../images/content-7.png'
import headImg from '../images/headImg.png'
import logo from '../images/logo.png'


// Swiper.js V-6
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper.min.css";
import SwiperCore, { Autoplay } from 'swiper/core';
SwiperCore.use([Autoplay]);

function Home(props) {
    const [requiredScreenWidth, setRequiredScreenWidth] = useState();
    const [gamesData, setGamesData] = useState([])
    const [cateTab, setCateTab] = useState(false)
    const [providerTab, setProviderTab] = useState(false)

    const username = sessionStorage.getItem('username')

    window.addEventListener('resize', () => {
        if (window.innerWidth <= 1350 && window.innerWidth > 1100) {
            return setRequiredScreenWidth(window.innerWidth)
        }
        if (window.innerWidth > 900 && window.innerWidth <= 1100) {
            return setRequiredScreenWidth(window.innerWidth)
        }
        if (window.innerWidth < 900 && window.innerWidth > 420) {
            return setRequiredScreenWidth(window.innerWidth)
        }
        if (window.innerWidth <= 420 && window.innerWidth > 0) {
            return setRequiredScreenWidth(window.innerWidth)
        }
    })
    const myscreen = () => {
        if (window.innerWidth > 1350) {
            return 6;
        }
        if (window.innerWidth <= 1350 && window.innerWidth > 1100) {
            return 5;
        }
        if (window.innerWidth > 900 && window.innerWidth <= 1100) {
            return 4;
        }
        if (window.innerWidth < 900 && window.innerWidth > 550) {
            return 3;
        }
        if (window.innerWidth <= 550 && window.innerWidth > 350) {
            return 2;
        }
        if (window.innerWidth <= 350 && window.innerWidth > 0) {
            return 1.2;
        }
    }

    // Fetching all games 
    useEffect(() => {
        axios.get(process.env.REACT_APP_GAMES)
            .then(response => {
                setGamesData(response.data.data)
            })
            .catch(erorr => {
                alert('Failed to fetch games')
            })

        let counting = setInterval(count, 28)
        let percent = 0;
        function count() {
            document.getElementById("L-percent").innerHTML = ++percent + '%';
            document.querySelector('.progressBar').style.width = `${++percent}%`;
            if (percent === 100) {
                clearInterval(counting)
                percent = 0;
                document.querySelector('.initial-progress-window').style.top = '-100%';
            }
        }
    }, [])

    const gameThumbnail = (img) => {
        props.gameThumbnail(img)
    }
    const gameId = (id) => {
        props.gameId(id)
    }
    const gameName = (name) => {
        props.gameName(name)
    }

    // Opening topup page 
    const topUp = (data) => {
        props.topUp(data)
    }

    // filter Categories 
    const filterCategories = () => {
        if (!cateTab) {
            setCateTab(true)
            setProviderTab(false)
            document.querySelector('.Cate-filterArrow').style.transform = 'rotate(180deg)'
            document.querySelector('.Prov-filterArrow').style.transform = 'rotate(0deg)'
        }
        if (cateTab) {
            setCateTab(false)
            document.querySelector('.Cate-filterArrow').style.transform = 'rotate(0deg)'
        }
    }
    // filter Providers 
    const filterProviders = () => {
        if (!providerTab) {
            setProviderTab(true)
            setCateTab(false)
            document.querySelector('.Cate-filterArrow').style.transform = 'rotate(0deg)'
            document.querySelector('.Prov-filterArrow').style.transform = 'rotate(180deg)'
        }
        if (providerTab) {
            setProviderTab(false)
            document.querySelector('.Prov-filterArrow').style.transform = 'rotate(0deg)'
        }
    }

    function randomInt(min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min)) + min;
    }

    const shareGameInfo = (img, id, name) => {
        props.gameThumbnail(img);
        props.gameId(id);
        props.gameName(name);
    }

    const [gameLoading, setGameLoading] = useState(false);

    const gameLoaded = (data) => {
        setGameLoading(data)
    }

    return (
        <>
            {/* Progress bar window  */}
            <div className='initial-progress-window'>
                <div className='progress-window-box'>
                    <div className='name-logo'>
                        <img src={logo} />
                        <span style={{ color: 'white' }}>Wono<span style={{ color: '#794DFD', fontStyle: 'italic' }}>Rado</span></span>
                    </div>
                    <div className='loading-percentage'>
                        <span>Загрузка - <span id='L-percent'> </span></span>
                    </div>
                    <div className='progressBar-holder'>
                        <span className='progressBar'></span>
                    </div>
                </div>
            </div>
            <div className='slider'>
                <BsArrowLeftCircle className='leftArrow' size={24} />
                <img src={headImg} className='headImg' />
                <div className='textContent'>
                    <span>пОЛУЧИТЕ НЕВЕРОЯТНО ПРИЯТНЫЙ БОНУС</span>
                    <h1><span>Получи 150% </span><span> бонус на первый депозит🔥</span></h1>
                    <div className='nav-btns'>
                        {!username && <button onClick={() => props.registrationForm(true)}>Регистрация 🎰</button>}
                        <span>Больше информации 🃏</span>
                    </div>
                </div>
                <BsArrowRightCircle className='rightArrow' size={24} />
            </div>
            <div className='winnerList'>
                <div className='content-box'>
                    <img src={content_1} className='trophy-icon' />
                    <span>ОНИ ПОБЕДИТЕЛИ!</span>
                </div>
                <Swiper slidesPerView={myscreen()}
                    loop={true}
                    spaceBetween={8}
                    autoplay={{
                        "delay": 2500,
                        "disableOnInteraction": false
                    }}
                    className="mySwiper">
                    {gamesData.map(val => (
                        <React.Fragment key={val.id}>
                            <SwiperSlide className='winnerInfo' >
                                <img src={'https://vm4131020.62ssd.had.wf' + val.image} />
                                <div className='content-box-text'>
                                    {/* <span>BOOK OF AMON</span> */}
                                    <span>{val.name}</span>
                                    <div className='content-box-sub-text'>
                                        <span>Nai**</span>
                                        {/* <span>4000$</span> */}
                                        {!username && <span>{randomInt(50, 1000)}₽</span>}
                                        {username && <span>{randomInt(10000, 400000)}₸</span>}
                                    </div>
                                </div>
                                <div className='playBtn'>
                                    {/* <button>Play</button> */}
                                    <button onClick={() => shareGameInfo(val.image, val.id, val.name)}> <NavLink to={'/casino/play/real/' + val.info} style={{ textDecoration: 'none', color: 'black' }}> Play </NavLink> </button>
                                </div>
                            </SwiperSlide>
                        </React.Fragment>
                    ))}
                </Swiper>
            </div>
            <div className='games-and-tabs'>
                <div className='allGames'>
                    <div className='game-filters'>
                        <button> Filter </button>
                        <div onClick={() => filterCategories()}>
                            <span className='cateOpt'> Categories </span> <MdOutlineKeyboardArrowDown size={20} className='Cate-filterArrow' />
                        </div>
                        <div onClick={() => filterProviders()}>
                            <span className='provOpt'> Provider </span> <MdOutlineKeyboardArrowDown size={20} className='Prov-filterArrow' />
                        </div>
                    </div>
                    {/* Filter Options  */}
                    {cateTab &&
                        <div className='filter-opts'>
                            {
                                gamesData.map(val => (
                                    <div className='filter-opt'>
                                        <input type='checkbox' /><span>{val.category}</span>
                                    </div>
                                ))
                            }
                        </div>
                    }
                    {providerTab &&
                        <div className='filter-opts'>
                            {
                                gamesData.map(val => (
                                    <div className='filter-opt'>
                                        <input type='checkbox' /><span>{val.provider}</span>
                                    </div>
                                ))
                            }
                        </div>
                    }

                    {/* Game loading boxes animation */}
                    {!gameLoading && <GameLoadingAnimation />}
                    <Games gameThumbnail={gameThumbnail} gameId={gameId} gameName={gameName} topUp={topUp} gameLoaded={gameLoaded} />

                </div>
                <RightTabs gamesData={gamesData} gameLoading={gameLoading}/>
            </div>
        </>
    )
}

export default Home;


