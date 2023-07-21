import React, { useState, useEffect } from 'react';
import '../CSS/RightTabs.css'

// imgs 
import right_tab_img_1 from '../images/right-tab-img-1.png'
import right_tab_img_2 from '../images/right-tab-img-2.png'
import right_tab_img_3 from '../images/right-tab-img-3.png'
import right_tab_img_4 from '../images/right-tab-img-4.png'
import right_tab_img_5 from '../images/right-tab-img-5.png'
import right_tab_img_6 from '../images/right-tab-img-6.png'
import right_tab_img_7 from '../images/right-tab-img-7.png'
import right_tab_img_8 from '../images/right-tab-img-8.png'
import right_tab_img_9 from '../images/right-tab-img-9.png'
import right_tab_img_10 from '../images/right-tab-img-10.png'

import RTLoadingAnimation from '../SubComponents/RTLoadingAnimation';

function RightTabs(props) {
    const username = sessionStorage.getItem('username');
    const currency = sessionStorage.getItem('currency');
    const gamesData = props.gamesData;
    const gameLoading = props.gameLoading;
    function randomInt(min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min)) + min;
    }
    return (
        < div className='right-tabs'>
            <div className='right-tab-frame first-box'>
                <h2>Высокий бонус 🤑</h2>
                <ul>
                    {!gameLoading && <RTLoadingAnimation />}
                    {gameLoading && gamesData.map(val => (
                        <React.Fragment key={val.id}>
                            {val.id < 10 &&
                                <li key={val.id}>
                                    <div className='tab-img-cover' style={{ background: 'black' }}>
                                        <img src={'https://vm4131020.62ssd.had.wf' + val.image} />
                                    </div>
                                    <span className='text'>{val.name}</span>
                                    {!username && <button>{'₽' + ' ' + randomInt(50, 1000)}</button>}
                                    {username && <button>{currency + ' ' + randomInt(1000, 9000)}</button>}
                                </li>}
                        </React.Fragment>
                    ))}

                    {/* <li>
                        <div className='tab-img-cover' style={{ background: '#1D1D1B' }}>
                            <img src={right_tab_img_2} />
                        </div>

                        <span className='text'>FightClub 🐯</span>
                        <button>$1520</button>
                    </li>
                    <li>
                        <div className='tab-img-cover' style={{ background: '#0E045E' }}>
                            <img src={right_tab_img_3} />
                        </div>

                        <span className='text'>PleDoo 🎪</span>
                        <button>$1415</button>
                    </li>
                    <li>
                        <div className='tab-img-cover' style={{ background: '#050928' }}>
                            <img src={right_tab_img_4} />
                        </div>

                        <span className='text'>BlueLeo 🎠</span>
                        <button>$1400</button>
                    </li>
                    <li>
                        <div className='tab-img-cover' style={{ background: '#245639' }}>
                            <img src={right_tab_img_5} />
                        </div>
                        <span className='text'>Goldencrown ✨</span>
                        <button>$1320</button>
                    </li>
                    <li>
                        <div className='tab-img-cover' style={{ background: '#020002' }}>
                            <img src={right_tab_img_6} />
                        </div>

                        <span className='text'>SpinSamurai 👘</span>
                        <button>$1125</button>
                    </li> */}
                </ul>
            </div>
            <div className='right-tab-frame second-box'>
                <h2>Выбор редакции 😎</h2>
                <ul>
                    <li>
                        <div className='tab-img-cover' style={{ background: 'black' }}>
                            <img src={right_tab_img_7} />
                        </div>
                        <span className='text'>CasinoBerilia 🤑</span>
                        <button>$1550</button>
                    </li>
                    <li>
                        <div className='tab-img-cover' style={{ background: '#161A34' }}>
                            <img src={right_tab_img_8} />
                        </div>

                        <span className='text'>JooCasino 🐬</span>
                        <button>$1550</button>
                    </li>
                    <li>
                        <div className='tab-img-cover' style={{ background: '#1C0032' }}>
                            <img src={right_tab_img_9} />
                        </div>

                        <span className='text'>BitCasino 🎄 </span>
                        <button>$1550</button>
                    </li>
                    <li>
                        <div className='tab-img-cover' style={{ background: '#1A1C29' }}>
                            <img src={right_tab_img_10} />
                        </div>

                        <span className='text'>HellSpin 🔥</span>
                        <button>$1550</button>
                    </li>
                    <li>
                        <div className='tab-img-cover' style={{ background: '#245639' }}>
                            <img src={right_tab_img_5} />
                        </div>

                        <span className='text'>GoldenCrown ✨</span>
                        <button>$1550</button>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default RightTabs;