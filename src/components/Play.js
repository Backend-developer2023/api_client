import React, { useState, useEffect } from 'react';
import { NavLink } from "react-router-dom";
import Login from './Login'
import '../CSS/Play.css'
// images 
import gameImg from '../images/game-img.png'


function PlaySon() {
    const onTop = () => {
        window.scrollTo(0, 0);
    }
    useEffect(() => {
        onTop()
    }, []);


    const [user, setUser] = useState('')
    const username = sessionStorage.getItem('email');
    useEffect(() => {
        setUser(username)
    }, [])


    return (
        <>
            {user &&
                <div className='playson-game-panel'>
                    <div className='path'>
                        <span>🎰 Казино {'>'} Playson {'>'} Crazy Monkey</span>
                    </div>
                    <div className='game'>
                        <iframe id='game-container' src='https://playsonsite-dgm.ps-gamespace.com/launch?key=TEST1100000&partner=playsonsite-prod&gameName=book_of_gold&lang=en&wl=pl_gate'>
                        </iframe>
                    </div>
                </div>
            }
        </>
    )
}

export default PlaySon;