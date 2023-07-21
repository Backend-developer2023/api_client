import React, { useState, useEffect } from 'react';
import '../CSS/DetailedMenu.css'
import { Routes, Route, NavLink } from "react-router-dom";



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
import logo from '../images/logo.png'


function DetailedMenu(props) {
    const username = sessionStorage.getItem('username')
    return (
        <div className='detailed-menu'>
            <div className='detail-menu-header'>
                <img src={logo} className='logo' onClick={() => window.location.href = '/'} /> &ensp;
                <h2>Wono<span>Rado</span></h2>
            </div>
            <nav>
                <NavLink to='/' className='navlink' style={({ isActive }) => {
                    return {
                        borderRight: isActive ? '2px solid #794DFD' : "",
                        color: isActive ? '#794DFD' : ''
                    };
                }}><CgLayoutPin size={24} className='navlink-icon' />&ensp;Главная</NavLink>

                <NavLink to='/ser' className='navlink' style={({ isActive }) => {
                    return {
                        borderRight: isActive ? '2px solid #794DFD' : "",
                        color: isActive ? '#794DFD' : ''
                    };
                }}><BiDice5 size={24} className='navlink-icon' />&ensp;Игры</NavLink>

                <NavLink to='/acr' className='navlink' style={({ isActive }) => {
                    return {
                        borderRight: isActive ? '2px solid #794DFD' : "",
                        color: isActive ? '#794DFD' : ''
                    };
                }}><AiOutlineGift size={24} className='navlink-icon' />&ensp;Бонусы</NavLink>

                <NavLink to='/trf' className='navlink' style={({ isActive }) => {
                    return {
                        borderRight: isActive ? '2px solid #794DFD' : "",
                        color: isActive ? '#794DFD' : ''
                    };
                }}><CgExtensionAdd size={24} className='navlink-icon' />&ensp;Гайды</NavLink>

                <NavLink to='/edr' className='navlink' style={({ isActive }) => {
                    return {
                        borderRight: isActive ? '2px solid #794DFD' : "",
                        color: isActive ? '#794DFD' : ''
                    };
                }}><CgFilters size={24} className='navlink-icon' />&ensp;Сражения</NavLink>
                {username && <NavLink to='/account' className='navlink' style={({ isActive }) => {
                    return {
                        borderRight: isActive ? '2px solid #794DFD' : "",
                        color: isActive ? '#794DFD' : ''
                    };
                }}><CgBoy size={24} className='navlink-icon' />&ensp;Профиль</NavLink>}

                {!username && <NavLink onClick={() => props.login(true)} className='navlink'><CgBoy size={24} className='navlink-icon' />&ensp;Профиль</NavLink>}

                <NavLink to='/rtf' className='navlink' style={({ isActive }) => {
                    return {
                        borderRight: isActive ? '2px solid #794DFD' : "",
                        color: isActive ? '#794DFD' : ''
                    };
                }}><CgReadme size={24} className='navlink-icon' />&ensp;Новости</NavLink>

            </nav>
            {/* <span className='detailed-menu-favorite'><AiFillStar size={22} className='favorite-icon' /> &ensp;<span> FAVORITE CASINOS </span></span>
            <div className='detailed-menu-2'>
                <span><img src={menuLogo_1} className='menuLogo' />&ensp;<p>Name 1</p><IoEllipse size={18} className='ellipse' /></span>
                <span><img src={menuLogo_2} className='menuLogo' />&ensp;<p>Name 2</p></span>
                <span><img src={menuLogo_3} className='menuLogo' />&ensp;<p>Name 3</p></span>
            </div>
            <span className='add'><AiOutlinePlus size={18} className='add-icon' />&ensp;<p>Name 4</p></span>*/}
            <span className='log-off'><AiOutlinePoweroff size={22} /> &ensp; Выйти</span>
        </div>
    )
}

export default DetailedMenu;