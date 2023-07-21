import React, { useState, useEffect } from 'react';
import DetailedMenuMob from '../components/DetailedMenuMob';
import TabBar from './TabBar';
import { NavLink } from 'react-router-dom';
import axios from 'axios';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import '../CSS/Header.css';

// images 
import flag from '../images/flag.png'
import logo from '../images/logo.png';
import milestone from '../images/milestone.png'
import wallet from '../images/wallet.png'

// icons 
import { BiSearch } from 'react-icons/bi';
import { RiMenu3Fill } from 'react-icons/ri';
import { AiOutlineLogout } from 'react-icons/ai';
import { FaMoneyBill } from 'react-icons/fa';
import { AiOutlineCloseCircle } from 'react-icons/ai';


function Header(props) {
    const [gamesData, setGamesData] = useState([])
    const [detailedMenuMob, setDetaildeMenuMob] = useState(false)
    const [gameSerachResults, setGameSearchResults] = useState('')
    const [searchWindow, setSearchWindow] = useState(false)
    const [tabBar, setTabBar] = useState(false)
    // Calendar
    const [date, setDate] = useState(new Date());
    // sessionStorage -> username | user info
    const username = sessionStorage.getItem('username')
    const balance = sessionStorage.getItem('balance')
    const accessToken = sessionStorage.getItem('accessToken')
    const [myBalance, setMyBalance] = useState('');
    const [myCurrency, setMyCurrency] = useState('');

    const [strikeDates, setStrikeDates] = useState([]);

    // Fetched live strike from demoplay
    const [liveStrike, setLiveStrike] = useState(false)
    const [firstStrikeDayOfMonth, setFirstStrikeDayOfMonth] = useState('')
    const [lastStrikeDayOfMonth, setLastStrikeDayOfMonth] = useState('')

    const [strikeInit, setStrikeInit] = useState('')
    const [progressWidth, setProgressWidth] = useState('')


    // CHECK EXPIRY OF TOKEN
    useEffect(() => {
        let xhr = new XMLHttpRequest();
        xhr.open("POST", process.env.REACT_APP_AUTH_ME, true);
        xhr.setRequestHeader("Accept", "application/json");
        xhr.setRequestHeader("Authorization", `Bearer ${accessToken}`);
        xhr.onload = () => {
            if (xhr.status === 200) {
                let obj = JSON.parse(xhr.responseText);
                sessionStorage.setItem('balance', obj.balance)
                sessionStorage.setItem('currency', obj.currency)
                setMyBalance(obj.balance);
                setMyCurrency(obj.currency);
            } else {
                sessionStorage.removeItem('username')
                sessionStorage.removeItem('balance')
                sessionStorage.removeItem('accessToken')
                sessionStorage.removeItem('currency')
            }
        }
        xhr.send();
    }, [username])

    const Registration = () => {
        props.registration(true)
    }
    const Login = () => {
        props.login(true)
    }
    // const logout = () => {
    //     sessionStorage.removeItem('username')
    //     sessionStorage.removeItem('balance')
    //     sessionStorage.removeItem('accessToken')
    //     window.location.reload();
    // }
    const closeMenuMob = (data) => {
        setDetaildeMenuMob(data)
    }

    useEffect(() => {
        axios.get(process.env.REACT_APP_GAMES)
            .then(response => {
                setGamesData(response.data.data)
            })
            .catch(erorr => {
                alert('Failed to fetch the games')
            })
    }, [])

    const searchGames = (inputString) => {
        let arr = []
        gamesData.map(val => {
            if (val.name.replace(/ |-/gi, "").toLowerCase().match(inputString.toLowerCase().replace(/ |-/g, '')) && inputString) {
                arr.push(val)
            }
        })
        if (arr !== '' && inputString) {
            setSearchWindow(true)
            setGameSearchResults(arr)
        }
        else {
            setSearchWindow(false)
            setGameSearchResults('')
        }
    }

    const topUp = () => {
        props.topUp(true)
    }

    // GETTING STRIKE DATA 
    useEffect(() => {
        axios.get('https://vm4131020.62ssd.had.wf/api/cabinet/strikes', {
            headers: {
                Authorization: `Bearer ${sessionStorage.getItem('accessToken')}`
            }
        }).then(res => {
            const DemoAttendedDates = [];
            res.data.data.map(val => {
                let d = new Date(val.date);
                let reqDate = d.getFullYear() + '-' + (d.getMonth() + 1) + '-' + d.getDate();
                DemoAttendedDates.push(reqDate)
            });

            //  ADDING LIVE STRIKE DAY 
            if (props.strikeDay) {
                if (DemoAttendedDates.includes(props.strikeDay)) {
                    setLiveStrike(false)
                } else {
                    setLiveStrike(true)
                }
            }
            props.totalStrikes(DemoAttendedDates)
            setStrikeDates(DemoAttendedDates)
            const days = document.querySelectorAll('.react-calendar__month-view__days abbr')
            const russianMonths = ['январь', 'февраль', 'март', 'апрель', 'мая', 'июнь', 'июль', 'август', 'сентябрь', 'октябрь', 'ноябрь', 'декабрь'];
            for (let key in days) {
                if (days[key].ariaLabel !== undefined) {
                    let D = days[key].ariaLabel;
                    let nDate = D.replace(' г.', '').replace('.', '').replace(/\s/g, '-')
                    russianMonths.map(val => {
                        if (nDate.includes(val)) {
                            const originalDate = nDate.replace(val, russianMonths.indexOf(val) + 1)
                            const parts = originalDate.split('-');
                            const newDate = parts[2] + '-' + (parts[1]).slice(-2) + '-' + ('0' + parts[0]).slice(-2);
                            if (DemoAttendedDates.includes(newDate)) {
                                days[key].parentElement.style.background = '#B0876A';
                            }
                            // This is reverse logic for CSS As Upcomming dates from server is in Decending Order 
                            if (DemoAttendedDates[0] === newDate) {
                                // days[key].parentElement.style.borderTopRightRadius = '5rem';
                                // days[key].parentElement.style.borderBottomRightRadius = '5rem';
                            }
                            if (DemoAttendedDates[DemoAttendedDates.length - 1] === newDate) {
                                days[key].parentElement.style.borderTopLeftRadius = '5rem';
                                days[key].parentElement.style.borderBottomLeftRadius = '5rem';
                            }
                        }
                    })
                }
            }
        }).catch(error => {
            console.log(error)
        })
    }, [props.strikeDay])


    // Setting up the Flag for Last Day of the Month:
    useEffect(() => {
        const days = document.querySelectorAll('.react-calendar__month-view__days abbr')
        const lastDayOfMonth = days[days.length - 1];
        setLastStrikeDayOfMonth(lastDayOfMonth.innerHTML)
        lastDayOfMonth.parentElement.innerHTML =
            `<div id='lastDayDiv'>
             <img src='${flag}' id='lastDayFlag'/>
             <span id='lastDayOfMonth'> ${lastDayOfMonth.innerHTML}</span>
         </div>
        `
    }, [username])

    useEffect(() => {
        const days = document.querySelectorAll('.react-calendar__month-view__days abbr')
        const lastDayOfMonth = days[days.length - 1];
        const firstDayOfStrike = new Date(`'${strikeDates[strikeDates.length - 1]}'`)

        const FirstDay = firstDayOfStrike.getDate();
        const LastDay = parseInt(lastDayOfMonth.innerHTML) + 1;
        let startStrike = (FirstDay * 100) / LastDay;
        setStrikeInit(startStrike)

        const availableBarPercent = 100 - startStrike;
        const totalStrikeDays = strikeDates.length

        const progressBarWidth = (totalStrikeDays * availableBarPercent) / LastDay
        setProgressWidth(progressBarWidth)

    }, [strikeDates])



    const fixBody = () => {
        document.querySelector('.Container').style.position = 'fixed';
        document.querySelector('.Container').style.height = 'max-content';
        document.querySelector('.Container').style.width = '100%';
        document.querySelector('.Container').style.overflowY = 'scroll';
    }
    const releaseBody = () => {
        document.querySelector('.Container').style.position = 'relative';
        document.querySelector('.Container').style.height = 'auto';
        document.querySelector('.Container').style.width = 'auto';
        document.querySelector('.Container').style.overflowY = 'auto';
    }

    // Mobile Menu bar 
    const tabBarMenu = () => {
        setTabBar(true);
        fixBody()
    }

    // closing TabBar 
    const tabBarPanel = (data) => {
        setTabBar(data)
        releaseBody();
    }

    const opneStrikeMode = () => {
        document.querySelector('.strikemode-Window').style.display = 'flex';
        fixBody();
    }

    const closeStrikeMode = () => {
        document.querySelector('.strikemode-Window').style.display = 'none';
        releaseBody()
    }

    const [searchInp, setSearchInp] = useState(false)

    const openSearchInput = () => {
        if (window.innerWidth <= 1010) {
            document.querySelector('#searchInp').style.display = 'flex';
            document.querySelector('#searchInp').style.background = '#181928';
            document.querySelector('#searchInp').style.boxShadow = '0 0 5px';
            //
            document.querySelector('#closeSearchInp').style.display = 'flex';
        }

    }
    const closeSearchInp = () => {
        if (window.innerWidth <= 1010) {
            document.querySelector('#searchInp').style.display = 'none';
            //
            document.querySelector('#closeSearchInp').style.display = 'none';
        }

    }
    const topUpMobile = (data) => {
        props.topUpMobile(data)
    }
    return (
        <>
            <header>
                <div className='leftItems'>
                    <BiSearch size={24} className='searchIcon' onClick={() => openSearchInput()} />
                    <div className='input-and-searchResults'>
                        <AiOutlineCloseCircle size={18} id='closeSearchInp' onClick={() => closeSearchInp()} />
                        <input id='searchInp' type='text' placeholder='Поиск казино, игр и многого другого...' onKeyUp={(e) => searchGames(e.target.value)} />
                        {searchWindow &&
                            <div className='searchResults'>
                                {gameSerachResults && gameSerachResults.map(game => (
                                    <span>{game.name}</span>
                                ))}
                                {gameSerachResults == '' && <span>NO SEARCH RESULTS ARE FOUND..!</span>}
                            </div>
                        }
                    </div>
                </div>
                <div className='rightItems'>
                    <select className='languages'>
                        <option>RU</option>
                    </select>
                    <button className='login_Btn'> {username ? <span>{username} </span> : <span onClick={() => Login()}> Войти 🎉</span>}</button>

                    {username && <button className='strick-mode' onClick={() => opneStrikeMode(true)}>🔥 {liveStrike ? strikeDates.length + 1 : strikeDates.length} </button>}
                    {username && <button className='available-balance'><FaMoneyBill size={16} color='white' style={{ margin: '0 8px' }} /> {myBalance ? myBalance + ' ' + myCurrency : '0,00' + myCurrency}</button>}

                    {!username && <button className='Registration_Btn' onClick={() => Registration()}>Регистрация 🚀</button>}
                    {username && <button className='topup_Btn'>
                        <img src={wallet} className='walletImg' />
                        <NavLink to='/account' style={{ textDecoration: 'none', margin: '0 8px', color: 'black' }} onClick={() => topUp()}> Пополнить </NavLink> </button>}
                </div>
            </header>
            {/* Calender  */}

            <div className='strikemode-Window'>
                <div className='close-strikemode-window' onClick={() => closeStrikeMode()}></div>
                <div className='strike-mode-calender' >
                    <div className='strike-mode-progress'>
                        <div className='strike-mode-progress-header'>
                            <span style={{}}>Ударный месяц</span>
                            <span style={{ position: 'absolute', right: 0 }}>День 15 из {lastStrikeDayOfMonth}</span>
                        </div>
                        <div className='strike-mode-progressbar'>
                            <span className='strike-mode-progress-count' style={{ left: `${strikeInit}%`, width: `${progressWidth + parseFloat(9)}%` }}></span>
                            <div className='milestone-in-month'>
                                <span className='first-milestone-day'>
                                    <img src={milestone} />
                                    <span style={{ right: '26%' }}>7</span>
                                </span>
                                <span className='second-milestone-day'>
                                    <img src={milestone} />
                                    <span style={{ right: '23%' }}>14</span>
                                </span>
                                <span className='third-milestone-day'>
                                    <img src={milestone} />
                                    <span style={{ right: '19%' }}>{lastStrikeDayOfMonth}</span>
                                </span>
                            </div>
                        </div>
                    </div>
                    {/* locale="ru-GB" */}
                    <Calendar value={date} showNeighboringMonth={false} locale="ru-GB" />
                </div>
            </div>

            {/* Mobile Header */}
            {detailedMenuMob && <DetailedMenuMob closeMenuMob={closeMenuMob} />}
            <div className='header-phone'>
                <img src={logo} className='logo' style={{ position: 'relative' }} />
                <h2>Wono<span style={{ fontStyle: 'italic' }}>Rado</span></h2>
                {username ? <span className='user-mob'>👤</span> :
                    <div className='mob-auth-buttons'>
                        <button onClick={() => Login()}>Войти 🎉</button>
                        <button onClick={() => Registration()}>Регистрация 🚀</button>
                    </div>
                }
                {username && <RiMenu3Fill className='menu-icon' size={22} onClick={() => tabBarMenu()} />}
                {!username && <RiMenu3Fill className='menu-icon' size={22} onClick={() => setDetaildeMenuMob(true)} />}
            </div>
            {tabBar && <TabBar tabBarPanel={tabBarPanel} topUpMobile={topUpMobile} lastStrikeDayOfMonth={lastStrikeDayOfMonth} strikeInit={strikeInit} progressWidth={progressWidth} />}
        </>
    )
}

export default Header;