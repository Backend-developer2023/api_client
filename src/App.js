import React, { useState, useEffect } from 'react';
import Footer from './components/Footer';
import { Routes, Route, NavLink, useParams } from "react-router-dom";
import './App.css';


// react icons 
import { CgLayoutPin } from 'react-icons/cg'
import { BiDice5 } from 'react-icons/bi'
import { AiOutlineGift } from 'react-icons/ai'
import { CgExtensionAdd } from 'react-icons/cg'
import { CgFilters } from 'react-icons/cg'
import { CgBoy } from 'react-icons/cg'
import { CgReadme } from 'react-icons/cg'
import { AiOutlinePoweroff } from 'react-icons/ai'


// images 
import logo from './images/logo.png'

import { AiFillPlusCircle } from 'react-icons/ai'

import giftPNG from './images/gift.png'
import casinoPNG from './images/Casino.png'
import messagePNG from './images/message.png'
import achivementPNG from './images/achievement.png'

// components 
import Home from './components/Home';
import Header from './components/Header'
import Login from './components/Login';
import Registration from './components/Registration';
import Account from './components/Account';
import Play from './components/Play';
import DemoPlay from './components/DemoPlay';
import TopupAccount from './components/TopupAccount';
import RealPlay from './components/RealPlay';


function App(props) {

  const [loginContainer, setLoginContainer] = useState(false)
  const [registrationContainer, setRegistrationContainer] = useState(false)
  const [acTopUp, setAcTopUp] = useState(false);
  const [acTopUpMob, setAcTopUpMob] = useState(false);

  const [gameThumb, setGameThumb] = useState();
  const [gameid, setGameid] = useState();
  const [gamename, setGameName] = useState();

  const username = sessionStorage.getItem('username')
  const balance = sessionStorage.getItem('balance')
  const currency = sessionStorage.getItem('currency')

  const [strikeDay, setStrikeDay] = useState()
  const [totalStrikesDays, setTotalStrikeDays] = useState()


  const login = (data) => {
    setLoginContainer(data)
  }
  const closeLogin = (data) => {
    setLoginContainer(data)
  }
  const registration = (data) => {
    setRegistrationContainer(data)
  }
  const closeRegistration = (data) => {
    setRegistrationContainer(data)
  }


  // To open Direct TopUp Panel in Account Section 
  const topUpMobile = () => {
    if (acTopUpMob == false) {
      setAcTopUpMob(true)
      document.querySelector('.Container').style.position = 'fixed';
      document.querySelector('.Container').style.height = 'max-content';
      document.querySelector('.Container').style.width = '100%';
      //
      document.querySelector('.topUpIcon').style.color = '#ab0101'
      document.querySelector('.topUpIcon').style.transform = 'rotate(45deg)'
    }
    if (acTopUpMob == true) {
      setAcTopUpMob(false)
      document.querySelector('.Container').style.position = 'relative';
      document.querySelector('.Container').style.height = 'auto';
      document.querySelector('.Container').style.width = 'auto';
      //
      document.querySelector('.topUpIcon').style.color = 'white'
      document.querySelector('.topUpIcon').style.transform = 'rotate(0deg)'
    }
  }

  const topUpMobileMenuAction = (data) => {
    setAcTopUpMob(data)
    document.querySelector('.Container').style.position = 'relative';
    document.querySelector('.Container').style.height = 'auto';
    document.querySelector('.Container').style.width = 'auto';
    //
    document.querySelector('.topUpIcon').style.color = 'white'
    document.querySelector('.topUpIcon').style.transform = 'rotate(0deg)'
  }

  const gameThumbnail = (img) => {
    setGameThumb(img)
  }
  const gameId = (id) => {
    setGameid(id)
  }
  const gameName = (name) => {
    setGameName(name)
  }

  const topUp = (data) => {
    setAcTopUp(data)
  }

  const addStrikeDate = (data) => {
    setStrikeDay(data)
  }
  const totalStrikes = (data) => {
    setTotalStrikeDays(data)
  }

  const logout = () => {
    sessionStorage.removeItem('username')
    sessionStorage.removeItem('balance')
    sessionStorage.removeItem('accessToken')
    window.location.href = '/';
  }


  return (
    <div className='Container'>
      <div className='menu'>
        <div className='logo-brandname'>
          <img src={logo} className='logo' />
          <span className='brandName' style={{ fontWeight: 'bold', fontSize: '24px', }}>Wono<span style={{ color: '#794DFD', fontStyle: 'italic', }}>Rado</span></span>
        </div>
        <nav>
          <NavLink to='/' style={({ isActive }) => { return { color: isActive ? '#794DFD' : "" }; }} className='navlink'><CgLayoutPin size={24} style={{ position: 'fixed' }} /><span className='navText'>Главная</span></NavLink>

          {username && <NavLink to='/a' style={({ isActive }) => { return { color: isActive ? '#794DFD' : "" }; }} className='navlink'><BiDice5 size={24} style={{ position: 'fixed' }} /><span className='navText'>Игры</span></NavLink>}

          {/* <NavLink to='/b' style={({ isActive }) => { return { color: isActive ? '#794DFD' : "" }; }} className='navlink'><AiOutlineGift size={24} style={{ position: 'fixed' }} /><span className='navText'>Бонусы</span></NavLink> */}

          {username && <NavLink to='/c' style={({ isActive }) => { return { color: isActive ? '#794DFD' : "" }; }} className='navlink'><CgExtensionAdd size={24} style={{ position: 'fixed' }} /><span className='navText'>Награды</span></NavLink>}

          {/* <NavLink to='/d' style={({ isActive }) => { return { color: isActive ? '#794DFD' : "" }; }} className='navlink'><CgFilters size={24} style={{ position: 'fixed' }} /><span className='navText'>Сражения</span></NavLink> */}

          {username && <NavLink to='/account' style={({ isActive }) => { return { color: isActive ? '#794DFD' : "" }; }} className='navlink'><CgBoy size={24} style={{ position: 'fixed' }} /><span className='navText'>Профиль</span></NavLink>}


          {/* {!username && <NavLink onClick={() => login(true)} className='navlink'><CgBoy size={24} style={{ position: 'fixed' }} /><span className='navText'>Профиль</span></NavLink>} */}

          {/* <NavLink to='/e' style={({ isActive }) => { return { color: isActive ? '#794DFD' : "" }; }} className='navlink'><CgReadme size={24} style={{ position: 'fixed' }} /><span className='navText'>Сообщения</span></NavLink> */}

        </nav>

        {username &&
          <div className='log-off' style={{ padding: '21px' }} onClick={() => logout()}><AiOutlinePoweroff size={22} style={{ position: 'fixed' }} /><span className='navText'> Выйти </span></div>}
      </div>

      <div className='page-content'>
        <Header login={login} registration={registration} topUp={topUp} topUpMobile={topUpMobileMenuAction} strikeDay={strikeDay} totalStrikes={totalStrikes} />
        {loginContainer && <Login closeLogin={closeLogin} registrationForm={registration} />}
        {registrationContainer && <Registration closeRegistration={closeRegistration} registrationWindow={closeRegistration} />}
        <Routes>
          <Route exact path="/" element={<Home gameThumbnail={gameThumbnail} gameId={gameId} gameName={gameName} topUp={topUp} registrationForm={registration} />} />
          {/* acTopUp--> to open direct topUp panel in account section  */}
          <Route path="account" element={<Account acTopUp={acTopUp} totalStrikesDays={totalStrikesDays} />} />
          <Route path="play" element={<Play />} />
          <Route path="casino/play/demo/:gameKey" element={<DemoPlay gameThumb={gameThumb} gameId={gameid} gameName={gamename} addStrikeDate={addStrikeDate} />} />
          <Route path="casino/play/real/:gameKey" element={<RealPlay gameThumb={gameThumb} gameId={gameid} gameName={gamename} addStrikeDate={addStrikeDate} />} />
        </Routes>
        {/* footer  */}
        <Footer />
      </div>
      {username &&
        <div className='mobile-bottom-bar'>
          <button><AiFillPlusCircle style={{ transition: '0.5s all' }} color='white' size={18} onClick={() => topUpMobile()} className='topUpIcon' /><span>{balance ? balance + ' ' + currency : '0,00' + currency}</span></button>
          <div className='mobile-bottom-bar-opts'>
            <span><img src={giftPNG} style={{ width: '16px' }} /></span>
            <span><img src={casinoPNG} style={{ width: '21px' }} /></span>
            <span><img src={messagePNG} style={{ width: '16px' }} /></span>
            <span><img src={achivementPNG} style={{ width: '16px' }} /></span>
          </div>
        </div>
      }
      {acTopUpMob && <TopupAccount />}
    </div>
  );
}

export default App;
