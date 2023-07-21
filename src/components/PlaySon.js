import React, { useState, useEffect } from 'react';
import { NavLink } from "react-router-dom";
import Login from './Login'
import '../CSS/PlaySon.css'
// images 
import gameImg from '../images/game-img.png'


function PlaySon() {
    const [user, setUser] = useState('')

    const username = sessionStorage.getItem('usename');

    const onTop = () => {
        window.scrollTo(0, 0);
    }
    useEffect(() => {
        onTop()
    }, []);

    return (
        <>
            {user &&
                <div className='playson-game-panel'>
                    <div className='path'>
                        <span>🎰 Казино {'>'} Playson {'>'} Crazy Monkey</span>
                    </div>
                    <div className='game'>
                        <img src={gameImg} />
                    </div>
                </div>
            }
        </>
    )
}

export default PlaySon;