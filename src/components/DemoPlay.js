import React, { useState, useEffect } from 'react';
import { NavLink } from "react-router-dom";
import Login from './Login';
import '../CSS/Demo.css'
import axios from 'axios';
import RightTabs from './RightTabs';
import gameImg from '../images/game-img.png'
import { useParams } from 'react-router-dom';
import BeatLoader from "react-spinners/BeatLoader";

import { FiSearch } from 'react-icons/fi'
import { AiOutlineStar } from 'react-icons/ai'
import { MdFitScreen } from 'react-icons/md'
import { CgCloseR } from 'react-icons/cg'
import { MdChevronLeft } from 'react-icons/md'
import { MdChevronRight } from 'react-icons/md'
import { AiOutlineFullscreenExit } from 'react-icons/ai'

// imgs 
import bonusCoinsPNG from '../images/bonuscoins.png'

// Swiper.js V-6
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper.min.css";
import SwiperCore, { Autoplay, Navigation } from 'swiper/core';
SwiperCore.use([Autoplay, Navigation]);

function DemoPlay(props) {
    // Scrolling page to top on loading (if not oppend from top)
    const onTop = () => {
        window.scrollTo(0, 0);
    }
    useEffect(() => {
        onTop()
    }, []);

    var { gameKey } = useParams();
    const [login, setLogin] = useState(false)
    const [fs, setFs] = useState(false) //Game in Full screen 
    const [iframeLoaded, setIframeLoaded] = useState(false);

    // Session Storage 
    const username = sessionStorage.getItem('email');

    // function for closing Login Container 
    const closeLogin = (data) => {
        setLogin(data)
    }

    // GAME IN FULL SCREEN MODE
    const fsOn = () => {
        setFs(true)
        var elem = document.querySelector(".Demogame");
        if (elem.requestFullscreen) {
            elem.requestFullscreen();
        } else if (elem.webkitRequestFullscreen) { /* Safari */
            elem.webkitRequestFullscreen();
        } else if (elem.msRequestFullscreen) { /* IE11 */
            elem.msRequestFullscreen();
        }

    }
    const fsOff = () => {
        setFs(false)
        if (document.exitFullscreen) {
            document.exitFullscreen();
        } else if (document.webkitExitFullscreen) { /* Safari */
            document.webkitExitFullscreen();
        } else if (document.msExitFullscreen) { /* IE11 */
            document.msExitFullscreen();
        }
    }

    // ADDING GAME IN STRIKE MODE / 
    useEffect(() => {
        const formdata = new FormData();
        formdata.append('id', props.gameId)
        axios.post('https://vm4131020.62ssd.had.wf/api/cabinet/demo_game', formdata, {
            headers: {
                Authorization: `Bearer ${sessionStorage.getItem('accessToken')}`
            }
        }).then(res => {
            // THIS IS FOR SOLVING THE PROBLEM OF *LIVE STRIKE MODE COUNT UPDATE:
            props.addStrikeDate(new Date().getFullYear() + '-' + (new Date().getMonth() + 1) + '-' + new Date().getDate())
            console.log(res)
        }).catch(error => {
            console.log(error)
        })
    }, [])

    return (
        <>
            {login && <Login closeLogin={closeLogin} />}
            <div className='Demo-game-panel'>
                <div className='leftContent'>
                    <span className='path'>🎰 {props.gameName}</span>
                    <div className='Extra-gameOpts'>
                        <div className='Btns'>
                            <button className='demoPlay-Btn'>ДЕМО</button>
                            <button className='play-for-money-Btn'> {username ? <NavLink to='/play'> ИГРАТЬ НА ДЕНЬГИ </NavLink> : <span onClick={() => setLogin(true)}>ИГРАТЬ НА ДЕНЬГИ</span>}</button>
                        </div>
                        <div className='Opts'>
                            <span><AiOutlineStar size={20} /></span>
                            <span><MdFitScreen size={20} onClick={() => fsOn()} title='Full Screen Mode' /></span>
                            <span><NavLink className='closeDemo' to='/'> <CgCloseR size={20} /> </NavLink></span>
                        </div>
                    </div>

                    <div className='Demogame' id='Demogame'>
                        <div style={{ width: '100%', height: '100%' }}>
                            <iframe style={{ width: '100%', height: '100%', border: 'none', zIndex: '+2' }} onLoad={() => setIframeLoaded(true)}
                                src={process.env.REACT_APP_GAME_PROVIDER + 'gameId=' + gameKey} referrerPolicy="no-referrer">
                            </iframe>
                        </div>
                        {fs && <AiOutlineFullscreenExit size={32} className='closeFullScreen' onClick={() => fsOff()} />}
                        {
                            iframeLoaded ? "" : <span className='loading-bar'>
                                <img src={'https://vm4131020.62ssd.had.wf' + props.gameThumb} style={{ width: '100%', height: '100%', position: 'absolute' }} />
                                <div className='loading-spinner'>
                                    <span>Loading...</span>
                                    <BeatLoader color='white' />
                                </div>
                            </span>
                        }
                    </div>


                    <button className='Mob-play-for-money-Btn'> {username ? <NavLink to='/play'><img src={bonusCoinsPNG} /> ИГРАТЬ НА ДЕНЬГИ </NavLink> : <span onClick={() => setLogin(true)}><img src={bonusCoinsPNG} />ИГРАТЬ НА ДЕНЬГИ</span>}</button>
                </div>
                <div className='rightContent'>
                    <div className='searchGames'>
                        <FiSearch />
                        <input type='text' placeholder='Поиск...' />
                    </div>
                    {/* <div className='related-games'>
                        <span>ПОХОЖИЕ ИГРЫ  &ensp; &ensp; &ensp; &ensp;&ensp; &ensp; <span className='swiper-button-prev'>{'<'}</span> &ensp; <span className='swiper-button-next'> {'>'} </span></span>
                        <div className='related-games-list'>
                            <Swiper slidesPerView={1.8}
                                loop={true}
                                spaceBetween={30}
                                navigation={true}
                                autoplay={{
                                    "delay": 2500,
                                    "disableOnInteraction": false
                                }}
                                className="mySwiper">
                                <SwiperSlide className='related-game' >
                                    <img src={gameImg} />
                                </SwiperSlide>
                                <SwiperSlide className='related-game' >
                                    <img src={gameImg} />
                                </SwiperSlide>
                                <SwiperSlide className='related-game' >
                                    <img src={gameImg} />
                                </SwiperSlide>
                            </Swiper>
                        </div>
                    </div> */}
                    <div className='TopGames'>
                        <span>🔥ТОП ИГРЫ  <span className='swiper-nav-btns'> <MdChevronLeft size={20} /> <MdChevronRight size={20} /> </span></span>
                        <div className='top-games-list'>
                            <Swiper slidesPerView={1.8}
                                loop={true}
                                spaceBetween={30}
                                navigation={true}
                                autoplay={{
                                    "delay": 2500,
                                    "disableOnInteraction": false
                                }}
                                className="mySwiper">
                                <SwiperSlide className='top-game' >
                                    <img src={gameImg} />
                                </SwiperSlide>
                                <SwiperSlide className='top-game' >
                                    <img src={gameImg} />
                                </SwiperSlide>
                                <SwiperSlide className='top-game' >
                                    <img src={gameImg} />
                                </SwiperSlide>
                            </Swiper>
                        </div>
                        <div className='EventCard'>
                            <div className='EventHeader'>
                                <img src={gameImg} />
                                <span>🎰Казино</span>
                            </div>
                        </div>
                    </div>
                    {/* <RightTabs /> */}
                </div>
            </div>
        </>
    )
}

export default DemoPlay;