import React, { useState, useEffect } from 'react';
import PersonalAccount from './PersonalAccount';
import TopupAccount from './TopupAccount';
import Settings from './Settings';
import Achievements from './Achievements';
import Withdraw from './Withdraw';
import '../CSS/Account.css'

// SVGs 
import personalDataSVG from '../images/personalData.svg'
import withdrawSVG from '../images/withdraw.svg'
import settingSVG from '../images/settings.svg'
import achivementSVG from '../images/achivements.svg'
import powerSVG from '../images/power.svg'


function Account(props) {
    const [acPanel, setAcPanel] = useState('personal');

    // Only to open Direct topup panel when user click on topup button in header 
    // (Logged in Needed):

    useEffect(() => {
        if (props.acTopUp === true) {
            setAcPanel('topup')
        }
    }, [])


    return (
        <>
            <ul className='steps'>
                <li style={acPanel == 'personal' ? { borderBottom: '2px solid #794DFD', color: 'white' } : { borderBottom: '' }} onClick={() => setAcPanel('personal')} className='personal'>Личные данные</li>
                <li style={acPanel == 'topup' ? { borderBottom: '2px solid #794DFD', color: 'white' } : { borderBottom: '' }} onClick={() => setAcPanel('topup')} className='topUp'> Пополнить  счёт </li>

                <li style={acPanel == 'achievements' ? { borderBottom: '2px solid #794DFD', color: 'white' } : { borderBottom: '' }} onClick={() => setAcPanel('achievements')} className='achievements'>Достижения</li>

                <li style={acPanel == 'withdraw' ? { borderBottom: '2px solid #794DFD', color: 'white' } : { borderBottom: '' }} onClick={() => setAcPanel('withdraw')} className='withdraw'>Вывести со счета</li>

                <li style={acPanel == 'settings' ? { borderBottom: '2px solid #794DFD', color: 'white' } : { borderBottom: '' }} onClick={() => setAcPanel('settings')} className='settings'>Настройки</li>
            </ul>
            <ul className='mobile-steps'>
                <li onClick={() => setAcPanel('personal')} style={acPanel == 'personal' ? { borderBottom: '2px solid #794DFD' } : { borderBottom: '' }}>
                    <img src={personalDataSVG} style={acPanel == 'personal' ? { filter: 'invert(51%) sepia(95%) saturate(5485%) hue-rotate(240deg) brightness(97%) contrast(106%)', width: '30px' } : { width: '30px' }} />
                    <span>Личные данные</span>
                </li>
                <li>
                    <img src={withdrawSVG} style={{ width: '24px' }} />
                    <span>Вывести со счета</span>
                </li>
                <li onClick={() => setAcPanel('settings')} style={acPanel == 'settings' ? { borderBottom: '2px solid #794DFD', color: 'white' } : { borderBottom: '' }}>
                    <img src={settingSVG} style={acPanel == 'settings' ? { filter: 'invert(51%) sepia(95%) saturate(5485%) hue-rotate(240deg) brightness(97%) contrast(106%)', width: '19px' } : { width: '19px' }} />
                    <span>Настройки</span>
                </li>
                <li onClick={() => setAcPanel('achievements')} style={acPanel == 'achievements' ? { borderBottom: '2px solid #794DFD', color: 'white' } : { borderBottom: '' }}>
                    <img src={achivementSVG} style={acPanel == 'achievements' ? { filter: 'invert(51%) sepia(95%) saturate(5485%) hue-rotate(240deg) brightness(97%) contrast(106%)', width: '13px' } : { width: '13px' }} />
                    <span>Достижения</span>
                </li>
                <li>
                    <img src={powerSVG} style={{ width: '16px' }} />
                    <span>Выйти</span>
                </li>
            </ul>
            {acPanel == 'personal' && <PersonalAccount />}
            {acPanel == 'topup' && <TopupAccount />}
            {acPanel == 'settings' && <Settings />}
            {acPanel == 'withdraw' && <Withdraw />}
            {acPanel == 'achievements' && <Achievements totalStrikesDays={props.totalStrikesDays}/>}
        </>
    )
}

export default Account;