import React, { useState, useEffect } from 'react';
import '../CSS/Account.css'
import Calendar from 'react-calendar';
import DatePicker from "react-datepicker";
import { registerLocale } from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { ru } from "date-fns/locale";

// icons
import { FcLock } from 'react-icons/fc'
import { BsCheckCircle } from 'react-icons/bs'
import { RxMagicWand } from 'react-icons/rx'

// images 
import lockImg from '../images/lock.png'
import magicWandImg from '../images/magic-wand.png'

function Withdraw() {
    registerLocale("ru", ru);
    const [startDate, setStartDate] = useState(new Date());


    return (
        <div className='accountSection'>
            {/* Account details */}
            <div className='personalAccountInfo'>
                <div className='details'>
                    <h2>Данные аккаунта 👀</h2>
                    <div className='input-and-detals-holder'>
                        <input type='text' placeholder='Номер счёта' />
                        <div className='availableInfo'>
                            <span>5678901</span>
                            <img src={lockImg} style={{ width: '20px' }} />
                        </div>
                    </div>
                    <div className='input-and-detals-holder'>
                        <input type='text' placeholder='Валюта' />
                        <div className='availableInfo'>
                            <span>RUB</span>
                            <img src={lockImg} style={{ width: '20px' }} />
                        </div>
                    </div>
                    <div className='input-and-detals-holder'>
                        <input type='text' placeholder='Пароль' />
                        <div className='availableInfo'>
                            <span>*****</span>
                            <BsCheckCircle size={20} color='#606072' />
                        </div>
                    </div>
                    <div className='input-and-detals-holder'>
                        <input type='text' placeholder='Секретный вопрос' />
                        <div className='availableInfo'>
                            <img src={magicWandImg} style={{ width: '29px' }} />
                        </div>
                    </div>
                    <div className='input-and-detals-holder'>
                        <input type='text' placeholder='Ваш ответ' />
                        <div className='availableInfo'>
                            <img src={magicWandImg} style={{ width: '29px' }} />
                        </div>
                    </div>
                </div>
                <div className='contact'>
                    <h2>Контактные данные 📞</h2>
                    <div className='input-and-detals-holder'>
                        <input type='text' placeholder='Номер телефона' />
                        <div className='availableInfo'>
                            <img src={magicWandImg} style={{ width: '29px' }} />
                        </div>
                    </div>
                    <div className='input-and-detals-holder'>
                        <input type='text' placeholder='Адрес электронной почты' />
                        <div className='availableInfo'>
                            <img src={magicWandImg} style={{ width: '29px' }} />
                        </div>
                    </div>
                </div>
            </div>
            {/* Personal Information  */}
            <div className='personalDetails'>
                <h2>Личная информация 👤</h2>
                <div className='personalInfo-and-extra-details'>
                    <div className='personalInfo'>
                        <div className='input-and-detals-holder'>
                            <input type='text' placeholder='Номер телефона' />
                            <div className='availableInfo'>

                            </div>
                        </div>
                        <div className='input-and-detals-holder'>
                            <input type='text' placeholder='Имя*' />
                            <div className='availableInfo'>

                            </div>
                        </div>
                        <div className='input-and-detals-holder'>
                            <input type='text' placeholder='Пол*' />
                            <div className='availableInfo'>

                            </div>
                        </div>
                        <div className='input-and-detals-holder'>
                            <input type='text' placeholder='Страна*' />
                            <div className='availableInfo'>
                                <img src={lockImg} style={{ width: '20px' }} />
                            </div>
                        </div>
                        <div className='input-and-detals-holder'>
                            <input type='text' placeholder='Город*' />
                            <div className='availableInfo'>

                            </div>
                        </div>
                    </div>
                    <div className='extraPersonalDetails'>
                        <div className='input-and-detals-holder'>
                            <input type='text' placeholder='Никнейм' />
                            <div className='availableInfo'>

                            </div>
                        </div>
                        <div className='input-and-detals-holder'>
                            <span style={{ margin: '17px 12px', color: 'rgb(117 117 117)' }}>День Рождения*</span>

                            <div className='date-container'>
                                {/* locale="ru-GB" */}
                                {/* <Calendar showNeighboringMonth={false} locale="ru-GB" /> */}
                                <DatePicker locale="ru" selected={startDate} onChange={(date) => setStartDate(date)}/>
                            </div>

                            <div className='availableInfo'>
                                <span>ДД.ММ.ГГГГ</span>
                                <span>📆</span>
                            </div>
                        </div>
                        <div className='input-and-detals-holder'>
                            <input type='text' placeholder='Номер документа*' />
                            <div className='availableInfo'>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <button className='saveBtn'>Сохранить 💾</button>
        </div>
    )
}
export default Withdraw;