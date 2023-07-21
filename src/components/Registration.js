import React, { useState, useEffect } from 'react';
import axios from 'axios';
import '../CSS/Registration.css'
import ScaleLoader from "react-spinners/ScaleLoader";
import checkMaker from '../images/checkMark-gif.gif'

// icons 
import { IoMdClose } from 'react-icons/io'
import { AiFillEyeInvisible } from 'react-icons/ai'
import { AiFillEye } from 'react-icons/ai'
import { TbAlertCircle } from 'react-icons/tb'

// images 
import BonusImg_1 from '../images/BonusImg-1.png'
import BonusImg_2 from '../images/BonusImg-2.png'
import FeaturesIcon_1 from '../images/FeaturesIcon-1.png'
import FeaturesIcon_2 from '../images/FeaturesIcon-2.png'
import googleImg from '../images/google.png'
import telegramImg from '../images/telegram.png'

function Registration(props) {
    const [registrationType, setRegistrationType] = useState('oneclick')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [currency, setCurrency] = useState('')
    const [country, setCountry] = useState('')
    const [spinner, setSpinner] = useState(false)
    const [hidePass, setHidePass] = useState(true)
    const [errorMsg, setErrorMsg] = useState([]);
    const [checkMark, setCheckMark] = useState(false)

    const closeRegistration = () => {
        props.closeRegistration(false)
    }

    const registerByEmail = (e) => {
        e.preventDefault();
        setSpinner(true)
        const formdata = new FormData();
        formdata.append('email', email)
        formdata.append('login', 'testLogin')
        formdata.append('password', password)
        formdata.append('password_confirmation', password)
        formdata.append('fingerprint', process.env.REACT_APP_FINGERPRINT)
        formdata.append('currency', currency)
        formdata.append('country', country)

        axios.post('https://vm4131020.62ssd.had.wf/api/auth/register', formdata)
            .then(res => {
                setCheckMark(true)
                setSpinner(false)

                // Removing All error indications:
                document.querySelector('.passwordBox').style.border = '2px solid white';
                document.querySelector('.passAlertIcon').style.display = 'none';
                document.querySelector('.emailBox').style.border = '2px solid white';
                document.querySelector('.emailAlertIcon').style.display = 'none';
                document.querySelector('.currency').style.border = '2px solid white';
                setErrorMsg('')

                setTimeout(() => {
                    axios.post(process.env.REACT_APP_LOGIN, {
                        email: email,
                        password: password,
                    }).then(res => {
                        sessionStorage.setItem('username', email)
                        sessionStorage.setItem('accessToken', res.data.access_token)
                        window.location.reload();
                    }).catch(error => {
                        alert('Invalid Credentials')
                    })

                }, 2000)
            }).catch(error => {
                if (error.response.status === 500) {
                    setSpinner(false)
                    setErrorMsg(['Oops :( Something went wrong at our end !'])
                } else {
                    setSpinner(false)
                    let obj = JSON.parse(error.response.data)
                    const arr = []
                    if (obj.password) {
                        document.querySelector('.passwordBox').style.border = '2px solid red';
                        document.querySelector('.passAlertIcon').style.display = 'flex';
                        obj.password.map(val => {
                            arr.push(val)
                        })
                    } else {
                        document.querySelector('.passwordBox').style.border = '2px solid white';
                        document.querySelector('.passAlertIcon').style.display = 'none';
                    }
                    if (obj.email) {
                        document.querySelector('.emailBox').style.border = '2px solid red';
                        document.querySelector('.emailAlertIcon').style.display = 'flex';

                        obj.email.map(val => {
                            arr.push(val)
                        })
                    } else {
                        document.querySelector('.emailBox').style.border = '2px solid white';
                        document.querySelector('.emailAlertIcon').style.display = 'none';
                    }

                    if (obj.currency) {
                        document.querySelector('.currency').style.border = '2px solid red';
                        obj.currency.map(val => {
                            arr.push(val)
                        })
                    } else {
                        document.querySelector('.currency').style.border = '2px solid white';
                    }

                    setErrorMsg(arr);
                }
            })
    }

    const showPass = () => {
        let inp = document.getElementById('password');
        if (inp.type === 'password') {
            setHidePass(false)
            inp.type = 'text';
        } else {
            setHidePass(true)
            inp.type = 'password';
        }
    }

    return (
        <div className='registration-window'>
            <div className='registration-form'>
                <IoMdClose size={20} className='close-registration-form' onClick={() => closeRegistration()} />
                <div className='registration-form-header'>
                    <div className='feturesIcons'>
                        <img src={FeaturesIcon_1} />
                        <img src={FeaturesIcon_2} />
                    </div>
                    <h2>250 FS + 25 000RUB</h2>
                    <span>БОНУС НА ПЕРВЫЙ ДЕПОЗИТ</span>

                </div>
                <h1>РЕГИСТРАЦИЯ</h1>
                <div className='taglines'>
                    <span onClick={() => setRegistrationType('oneclick')} style={{ borderBottom: registrationType == 'oneclick' && '2px solid #794DFD', color: registrationType == 'oneclick' && 'white' }}>👆В ОДИН КЛИК</span>
                    <span onClick={() => setRegistrationType('email')} style={{ borderBottom: registrationType == 'email' && '2px solid #794DFD', color: registrationType == 'email' && 'white' }}>📨 ПО ЭЛ.ПОЧТЕ</span>
                    <span onClick={() => setRegistrationType('social')} style={{ borderBottom: registrationType == 'social' && '2px solid #794DFD', color: registrationType == 'social' && 'white' }}>📱ЧЕРЕЗ СОЦ.СЕТИ</span>
                </div>
                {/* One Click Registartion  */}
                {registrationType == 'oneclick' &&
                    <>
                        <div className='form-content'>
                            <div className='country-currency-inputs'>
                                <select className='country'>
                                    <option value=''> uz Узбекистан </option>
                                    <option value=''> ka  Казахстан </option>
                                </select>
                                <select className='currency'>
                                    <option value=''>SOM</option>
                                    <option value=''>KZT</option>
                                </select>
                            </div>
                            <div className='bonus-mob'>
                                <img src={BonusImg_1} className='bonus-popup-img' />
                                <span>БОНУС В КАЗИНО</span>
                                <div className='bonus-percent'>
                                    <span>200%+250FS</span>
                                </div>
                            </div>
                            <div className='age-confirmation'>
                                <input type='checkbox' className='checkBoxInp' />
                                <span>Я подтверждаю свое совершеннолетие и соглашаюсь с <span style={{ color: 'white' }}> правилами</span> </span>
                            </div>
                            <button className='resister-btn'>ЗАРЕГИСТРИРОВАТЬСЯ</button>
                            <span className='cancel-bonus'>Отказаться от бонуса</span>
                            {/* start the game for mobile  */}
                            <button className='start-game-btn'>НАЧАТЬ ИГРУ</button>
                        </div>
                        {/* <div className='bonus'>
                            <h2>ВЫБРАТЬ БОНУС</h2>
                            <div className='bonus-popups'>
                                <div className='first-bonus-popups'>
                                    <div className='popup-text-content'>
                                        <div className='popup-text-header'>
                                            <span>КАЗИНО</span>
                                            <span className='percentage'>200%+250FS</span>
                                        </div>
                                        <span className='bonus-info'>Бонус на первый депозит для ставок в казино</span>
                                    </div>
                                    <img src={BonusImg_1} className='bonus-popup-img' />
                                </div>
                                {/* <div className='second-bonus-popups'>
                                    <div className='popup-text-content'>
                                        <div className='popup-text-header'>
                                            <span>СПОРТ</span>
                                            <span className='percentage'>200%</span>
                                        </div>
                                        <span className='bonus-info'>Бонус на первый депозит для ставок в казино</span>
                                    </div>
                                    <img src={BonusImg_2} className='bonus-popup-img' />
                                </div> 
                            </div>
                        </div> */}
                    </>
                }

                {/* By Email  */}
                {registrationType == 'email' &&
                    <>
                        <form className='form-content' onSubmit={(e) => registerByEmail(e)}>
                            <div className='country-currency-inputs'>
                                <select className='country' onChange={(e) => setCountry(e.target.value)}>
                                    <option value=''>Select Country</option>
                                    <option value='Uzbekistan '> Uzbekistan </option>
                                    <option value='Kazakhstan '> Kazakhstan  </option>
                                </select>
                                <select className='currency' onChange={(e) => setCurrency(e.target.value)}>
                                    <option value=''>Select Currency</option>
                                    <option value='SOM'>SOM</option>
                                    <option value='KZT'>KZT</option>
                                </select>
                            </div>
                            <div className='emailBox'>
                                <input type='email' placeholder='📨 Электронная почта' onChange={(e) => setEmail(e.target.value)} />
                                <TbAlertCircle className='emailAlertIcon' size={22} />
                            </div>
                            <div className='passwordBox'>
                                <input id='password' type='password' placeholder='🔐  Пароль' onChange={(e) => setPassword(e.target.value)} />
                                {hidePass ? <AiFillEyeInvisible onClick={() => showPass()} size={22} className='eyeIcon' /> :
                                    <AiFillEye onClick={() => showPass()} size={22} className='eyeIcon' />}
                                <TbAlertCircle className='passAlertIcon' size={22} />
                            </div>
                            <div className='bonus-mob'>
                                <img src={BonusImg_1} className='bonus-popup-img' />
                                <span>БОНУС В КАЗИНО</span>
                                <div className='bonus-percent'>
                                    <span>200%+250FS</span>
                                </div>
                            </div>
                            <div className='age-confirmation'>
                                <input type='checkbox' className='checkBoxInp' />
                                <span>Я подтверждаю свое совершеннолетие и соглашаюсь с <span style={{ color: 'white' }}> правилами</span> </span>
                            </div>
                            <button className='resister-btn'> {spinner ? <ScaleLoader color='white' height={16} /> : <> ЗАРЕГИСТРИРОВАТЬСЯ </>}</button>
                            <span className='cancel-bonus'>Отказаться от бонуса</span>
                            {/* start the game for mobile  */}
                            <button className='start-game-btn'>{spinner ? <ScaleLoader color='white' height={8} /> : <> НАЧАТЬ ИГРУ </>} </button>
                            {checkMark &&
                                <div className='checkMark'>
                                    <img src={checkMaker} />
                                    <span>Registration successful !</span>
                                </div>
                            }
                            {errorMsg &&
                                <span id='formError'>
                                    {errorMsg.map(val => (
                                        <div className='errorBox'>
                                            <TbAlertCircle style={{ color: 'red', marginRight: '8px' }} size={16} />
                                            <span id='errorMsg'>{val}</span>
                                        </div>
                                    ))}

                                </span>
                            }
                        </form>
                        {/* <div className='bonus'>
                            <h2>ВЫБРАТЬ БОНУС</h2>
                            <div className='bonus-popups'>
                                <div className='first-bonus-popups'>
                                    <div className='popup-text-content'>
                                        <div className='popup-text-header'>
                                            <span>КАЗИНО</span>
                                            <span className='percentage'>200%+250FS</span>
                                        </div>
                                        <span className='bonus-info'>Бонус на первый депозит для ставок в казино</span>
                                    </div>
                                    <img src={BonusImg_1} className='bonus-popup-img' />
                                </div>
                            </div>
                        </div> */}
                    </>
                }
                {/* By Social  */}
                {registrationType == 'social' &&
                    <>
                        <div className='form-content'>
                            <div className='country-currency-inputs'>
                                <select className='currency social-currency'>
                                    <option value=''>UZS</option>
                                </select>
                            </div>
                            {/* confirmation Message  */}
                            <span className='infoMessage'>Выберите валюту и социальную сеть, затем подтвердите разрешение на чтение ваших данных и использование их как регистрационных.</span>
                            {/* google and Telegram  */}
                            <div className='socialHandles'>
                                <img src={googleImg} className='google' title='google' />
                                <img src={telegramImg} className='telegram' title='telegram' />
                            </div>
                            <div className='bonus-mob'>
                                <img src={BonusImg_1} className='bonus-popup-img' />
                                <span>БОНУС В КАЗИНО</span>
                                <div className='bonus-percent'>
                                    <span>200%+250FS</span>
                                </div>
                            </div>
                            <div className='age-confirmation'>
                                <input type='checkbox' className='checkBoxInp' />
                                <span>Я подтверждаю свое совершеннолетие и соглашаюсь с <span style={{ color: 'white' }}> правилами</span> </span>
                            </div>
                            <br></br>
                            {/* <button className='resister-btn'>ЗАРЕГИСТРИРОВАТЬСЯ</button> */}
                            <span className='cancel-bonus'>Отказаться от бонуса</span>
                            {/* start the game for mobile  */}
                            <button className='start-game-btn'>НАЧАТЬ ИГРУ</button>
                        </div>
                        {/* <div className='bonus'>
                            <h2>ВЫБРАТЬ БОНУС</h2>
                            <div className='bonus-popups'>
                                <div className='first-bonus-popups'>
                                    <div className='popup-text-content'>
                                        <div className='popup-text-header'>
                                            <span>КАЗИНО</span>
                                            <span className='percentage'>200%+250FS</span>
                                        </div>
                                        <span className='bonus-info'>Бонус на первый депозит для ставок в казино</span>
                                    </div>
                                    <img src={BonusImg_1} className='bonus-popup-img' />
                                </div>
                                <div className='second-bonus-popups'>
                                    <div className='popup-text-content'>
                                        <div className='popup-text-header'>
                                            <span>СПОРТ</span>
                                            <span className='percentage'>200%</span>
                                        </div>
                                        <span className='bonus-info'>Бонус на первый депозит для ставок в казино</span>
                                    </div>
                                    <img src={BonusImg_2} className='bonus-popup-img' />
                                </div>
                            </div>
                        </div> */}
                    </>
                }

            </div>
        </div>
    )
}
export default Registration;