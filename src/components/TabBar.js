import React, { useEffect } from "react";
import '../CSS/TabBar.css'

import { Routes, Route, NavLink } from "react-router-dom";

// react icons 
import { CgLayoutPin } from 'react-icons/cg'
import { BiDice5 } from 'react-icons/bi'
import { AiOutlineGift } from 'react-icons/ai'
import { CgExtensionAdd } from 'react-icons/cg'
import { CgFilters } from 'react-icons/cg'
import { CgBoy } from 'react-icons/cg'
import { CgReadme } from 'react-icons/cg'
import { AiFillPlusCircle } from 'react-icons/ai'
import { AiOutlinePlus } from 'react-icons/ai'
import { IoPowerSharp } from 'react-icons/io5'
import { GiAchievement } from 'react-icons/gi'
import { MdEmail } from 'react-icons/md'

// images 
import logo from '../images/logo.png'
import milestone from '../images/milestone.png'



// For mobile menu when user/client logged in into their account.
function TabBar(props) {
    const username = sessionStorage.getItem('username')
    const balance = sessionStorage.getItem('balance')
    const logout = () => {
        sessionStorage.removeItem('username')
        window.location.reload();
    }

    const lastStrikeDayOfMonth = props.lastStrikeDayOfMonth
    const strikeInit = props.strikeInit
    const progressWidth = props.progressWidth


    return (
        <div className="tabBar-window" >
            <div className="close-tabBar-menu" onClick={() => props.tabBarPanel(false)}></div>

            <div className="tabBar">
                <div className='detail-menu-header'>
                    <img src={logo} className='logo' onClick={() => window.location.href = '/'} style={{ position: 'relative' }} />
                    <h2 style={{ fontSize: '16px' }}>Wono<span style={{ color: '#794DFD', fontStyle: 'italic' }}>Rado</span></h2>
                </div>
                <div className="user-info">
                    <div style={{ display: 'flex', alignItems: 'center' }}>
                        <div><span style={{ fontSize: '11px' }}>👤</span> <span style={{ fontSize: '6px', color: '#C2BFCA' }}>ID: 5689999</span></div>
                        <button><AiFillPlusCircle size={9} style={{ marginRight: '4px' }} /> {balance ? balance + ' ' + '₽' : '0,00 ₽'}</button>
                    </div>
                    <div className="strike-mode-progress-mob">
                        <div className="strike-mode-header-mob">
                            <span style={{ position: 'absolute', left: '2%' }}>Ударный месяц</span>
                            <span style={{ position: 'absolute', right: '2%' }}>День 15 из {lastStrikeDayOfMonth}</span>
                        </div>
                        <div className="progress">
                            <span className="progressBar-mob">
                                <span className="userProgress-mob" style={{ left: `${strikeInit}%`, width: `${progressWidth + parseFloat(9)}%` }}></span>
                            </span>
                            <div className='milestone-in-month-mob'>
                                <span className='first-milestone-day' style={{ width: '30px', height: '18px' }}>
                                    <img src={milestone} style={{ width: '100%', height: '100%' }} />
                                    <span style={{ fontSize: '8px', right: '7px' }}>7</span>
                                </span>
                                <span className='second-milestone-day' style={{ width: '30px', height: '18px' }}>
                                    <img src={milestone} style={{ width: '100%', height: '100%' }} />
                                    <span style={{ fontSize: '8px', right: '6px' }}>14</span>
                                </span>
                                <span className='third-milestone-day' style={{ width: '30px', height: '18px', left: '87%' }}>
                                    <img src={milestone} style={{ width: '100%', height: '100%' }} />
                                    <span style={{ fontSize: '8px', right: '5px' }}>{lastStrikeDayOfMonth}</span>
                                </span>

                            </div>
                        </div>
                    </div>
                </div>
                <nav>
                    <NavLink onClick={() => props.tabBarPanel(false) + props.topUpMobile(false)} to='/' className='navlink' style={({ isActive }) => {
                        return {
                            borderRight: isActive ? '2px solid #794DFD' : "",
                            color: isActive ? '#794DFD' : ''
                        };
                    }}>
                        <CgLayoutPin size={20} className='navlink-icon' />&ensp; &ensp;
                        <span> Главная</span>
                    </NavLink>

                    <NavLink to='/ser' className='navlink' style={({ isActive }) => {
                        return {
                            borderRight: isActive ? '2px solid #794DFD' : "",
                            color: isActive ? '#794DFD' : ''
                        };
                    }}><BiDice5 size={20} className='navlink-icon' />&ensp; &ensp;Игры</NavLink>

                    {/* <NavLink to='/acr' className='navlink' style={({ isActive }) => {
                        return {
                            borderRight: isActive ? '2px solid #794DFD' : "",
                            color: isActive ? '#794DFD' : ''
                        };
                    }}><AiOutlineGift size={20} className='navlink-icon' />&ensp; &ensp;Бонусы</NavLink> */}

                    <NavLink to='/trf' className='navlink' style={({ isActive }) => {
                        return {
                            borderRight: isActive ? '2px solid #794DFD' : "",
                            color: isActive ? '#794DFD' : ''
                        };
                    }}><GiAchievement size={20} className='navlink-icon' />&ensp; &ensp;Награды</NavLink>

                    {/* <NavLink to='/edr' className='navlink' style={({ isActive }) => {
                        return {
                            borderRight: isActive ? '2px solid #794DFD' : "",
                            color: isActive ? '#794DFD' : ''
                        };
                    }}><CgFilters size={20} className='navlink-icon' />&ensp; &ensp;Сражения</NavLink> */}

                    <NavLink onClick={() => props.tabBarPanel(false) + props.topUpMobile(false)} to='/account' className='navlink' style={({ isActive }) => {
                        return {
                            borderRight: isActive ? '2px solid #794DFD' : "",
                            color: isActive ? '#794DFD' : ''
                        };
                    }}><CgBoy size={20} className='navlink-icon' />&ensp; &ensp;Профиль</NavLink>

                    {/* <NavLink to='/rtf' className='navlink' style={({ isActive }) => {
                        return {
                            borderRight: isActive ? '2px solid #794DFD' : "",
                            color: isActive ? '#794DFD' : ''
                        };
                    }}><MdEmail size={20} className='navlink-icon' />&ensp; &ensp;Сообщения</NavLink> */}

                    {/* <span onClick={() => logout()} style={{ display: 'flex', alignItems: 'center', color: '#838286', marginBottom: '4rem', marginTop: '83px' }}><IoPowerSharp className="navlink-icon" size={20} /><span style={{ fontSize: '11px', margin: '0 10px', }}>&ensp;Выйти</span></span> */}

                </nav>
            </div>
        </div >
    )
}
export default TabBar;