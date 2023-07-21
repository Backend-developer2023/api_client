import React, { useState, useEffect } from 'react';
import { NavLink } from "react-router-dom";
import '../CSS/DetailedMenuMob.css'


// react icons 
import { CgLayoutPin } from 'react-icons/cg'
import { BiDice5 } from 'react-icons/bi'
import { AiOutlineGift } from 'react-icons/ai'
import { CgExtensionAdd } from 'react-icons/cg'
import { CgFilters } from 'react-icons/cg'
import { CgBoy } from 'react-icons/cg'
import { CgReadme } from 'react-icons/cg'
import { AiOutlinePoweroff } from 'react-icons/ai'
import { IoMdClose } from 'react-icons/io'
import { IoPowerSharp } from 'react-icons/io5'

// images 
import logo from '../images/logo.png'



function DetailedMenuMob(props) {
    const username = sessionStorage.getItem('username')

    const menuMob = () => {
        props.closeMenuMob(false)
    }

    const logout = () => {
        sessionStorage.removeItem('username')
        window.location.reload();
    }

    return (
        <div className='detailed-menu-mob'>
            <IoMdClose size={24} onClick={() => menuMob()} className='closeMobMenu' />
            <div className='detail-menu-header-mob'>
                <img src={logo} className='logo' style={{ position: 'relative' }} /> &ensp;
                <h2>Wono<span style={{ fontStyle: 'italic' }}>Rado</span></h2>
            </div>
            <nav>
                <NavLink onClick={() => menuMob()} to='/' className='navlink' style={({ isActive }) => { return { color: isActive ? '#794DFD' : '' } }} ><CgLayoutPin size={24} className='navlinkIcon' /> &ensp;Главная</NavLink>
                <NavLink to='/a' className='navlink' style={({ isActive }) => { return { color: isActive ? '#794DFD' : '' } }} ><BiDice5 size={24} className='navlinkIcon' /> &ensp;Игры</NavLink>
                <NavLink to='/b' className='navlink' style={({ isActive }) => { return { color: isActive ? '#794DFD' : '' } }} ><AiOutlineGift size={24} className='navlinkIcon' />&ensp;Бонусы</NavLink>
                <NavLink to='/c' className='navlink' style={({ isActive }) => { return { color: isActive ? '#794DFD' : '' } }} ><CgExtensionAdd size={24} className='navlinkIcon' />&ensp;Гайды</NavLink>
                <NavLink to='/d' className='navlink' style={({ isActive }) => { return { color: isActive ? '#794DFD' : '' } }} ><CgFilters size={24} className='navlinkIcon' />&ensp; Сражения </NavLink>
                {username &&
                    <NavLink onClick={() => menuMob()} to='/account' className='navlink' style={({ isActive }) => { return { color: isActive ? '#794DFD' : '' } }} ><CgBoy size={24} className='navlinkIcon' /> &ensp;Профиль</NavLink>
                }

                <NavLink to='/e' className='navlink' style={({ isActive }) => { return { color: isActive ? '#794DFD' : '' } }} ><CgReadme size={24} className='navlinkIcon' />&ensp;Новости</NavLink>
                {username &&
                    <span onClick={() => logout()} style={{ display: 'flex', alignItems: 'center', color: '#838286', marginBottom: '4rem', }}><IoPowerSharp size={20} style={{ marginLeft: '26px' }} /><span style={{ fontSize: '11px', margin: '0 10px' }}>Выйти</span></span>
                }
            </nav>
        </div>
    )
}

export default DetailedMenuMob;