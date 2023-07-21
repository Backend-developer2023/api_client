import React, { useState, useEffect } from 'react';
import { NavLink } from "react-router-dom";
import Login from './Login';
import axios from 'axios';
import '../CSS/Games.css'



function Games(props) {
    const [user, setUser] = useState('');
    const [login, setLogin] = useState(false)
    const [games, setGames] = useState([])
    const balance = sessionStorage.getItem('balance')
    const username = sessionStorage.getItem('email');


    const closeLogin = (data) => {
        setLogin(data)
    }
    const topUp = () => {
        props.topUp(true)
    }

    // Getting games 
    useEffect(() => {
        axios.get(process.env.REACT_APP_GAMES).then(allGames => {
            setGames(allGames.data.data)
            props.gameLoaded(true)

        }).catch(error => {
            console.log(error)
        })

    }, [])

    const shareGameInfo = (img, id, name) => {
        props.gameThumbnail(img);
        props.gameId(id);
        props.gameName(name);
    }

    function randomInt(min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min)) + min;
    }


    return (
        <>
            {login && <Login closeLogin={closeLogin} />}
            <div className='games-Data'>
                {games && games.map(val => (
                    <React.Fragment key={randomInt(10000, 400000)}>
                        {!(val.info.includes('92_TNP') || val.info.includes('94_TNP')) ?
                            <div className='img-box'>
                                <img src={'https://vm4131020.62ssd.had.wf' + val.image} className='img-cover' />
                                <img src={'https://vm4131020.62ssd.had.wf' + val.image} className='game-poster' />
                                <div className='gameOpts'>
                                    <span className='gameName'>{val.name}</span>
                                    <div className='optBtns'>
                                        {!balance && <button className='user-play-btn'> <NavLink className='optBtns-navlink' onClick={() => setLogin(true)}> ИГРАТЬ </NavLink> </button>}
                                        {balance == 0 && <button className='user-play-btn'> <NavLink className='optBtns-navlink' to='/account' onClick={() => topUp()}> ИГРАТЬ </NavLink> </button>}
                                        <button className='demo-play-btn' onClick={() => shareGameInfo(val.image, val.id, val.name)}> <NavLink className='demo-navlink' to={'/casino/play/demo/' + val.info}> ДЕМО </NavLink> </button>
                                    </div>
                                </div>
                            </div >
                            : ''
                        }
                    </React.Fragment>
                ))}
            </div >
        </>
    )
}

export default Games;