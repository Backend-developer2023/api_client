import React, { useState, useEffect } from 'react';
import Toggel from './Toggel';
import '../CSS/Account.css'
import '../CSS/Toggel.css'


function Settings() {
    return (
        <div className='accountSection'>
            {/* Account details */}
            <div className='personalAccountInfo'>
                <div className='details'>
                    <h2>Настройки аккаунта ⚙️</h2>
                    <div className='input-and-detals-holder'>
                        <input type='text' placeholder='Язык' />
                        <div className='availableInfo' style={{ right: '0%' }}>
                            <select style={{ margin: '0 0', fontSize: '13px', }}>
                                <option defaultValue='Русский'>Русский</option>
                            </select>
                        </div>
                    </div>
                    <div className='input-and-detals-holder'>
                        <input type='text' placeholder='Ваша любимая категория' />
                        <div className='availableInfo' style={{ right: '0%' }}>
                            <select style={{ margin: '0 0', fontSize: '13px' }}>
                                <option defaultValue='не выбрано'>не выбрано</option>
                            </select>
                        </div>
                    </div>
                    <div className='input-and-detals-holder'>
                        <input type='text' placeholder='Ваш любимый режим' />
                        <div className='availableInfo' style={{ right: '0%' }}>
                            <select style={{ margin: '0 0', fontSize: '13px' }}>
                                <option defaultValue='не выбрано'> не выбрано</option>
                            </select>
                        </div>
                    </div>
                    {/* <div className='input-and-detals-holder'>
                        <input type='text' placeholder='Секретный вопрос' />
                        <div className='availableInfo' style={{ right: '0%' }}>
                            <select style={{ margin: '0 0', fontSize: '13px' }}>
                                <option defaultValue='не выбрано'> Да </option>
                            </select>
                        </div>
                    </div> */}
                </div>
                <div className='contact'>
                    <h2>Уведомления 🔔</h2>
                    <div className='input-and-detals-holder'>
                        <input type='text' placeholder='Уведомления о новых тикетах по эл. почте' />
                        <div className='availableInfo'>
                            <Toggel />
                        </div>
                    </div>
                    {/* <div className='input-and-detals-holder'>
                        <input type='text' placeholder='Адрес электронной почты' />
                        <div className='availableInfo'>
                            <img src={magicWandImg} style={{ width: '29px' }} />
                        </div>
                    </div> */}
                </div>
            </div>
            {/* Personal Information  */}
            {/* <div className='personalDetails'>
                <h2>Рассылка 📨</h2>
                <div className='personalInfo-and-extra-details'>
                    <div className='personalInfo'>
                        <div className='input-and-detals-holder'>
                            <input type='text' placeholder='Получать на эл. почту новости о событиях' />
                            <div className='availableInfo'>
                                <Toggel />
                            </div>
                        </div>
                        <div className='input-and-detals-holder'>
                            <input type='text' placeholder='Получать на эл. почту результаты моих ставок' />
                            <div className='availableInfo'>
                                <Toggel />
                            </div>
                        </div>
                        {/* <div className='input-and-detals-holder'>
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
                            <input type='text' placeholder='Получать информацию о рекламных акциях по СМС' />
                            <div className='availableInfo'>
                                <Toggel />
                            </div>
                        </div>
                        <div className='input-and-detals-holder'>
                            <span style={{ margin: '17px 12px', color: 'rgb(117 117 117)' }}>День Рождения*</span>
                            <div className='date-inp-holder'>
                                <span>📆</span>
                                <input type='date' placeholder='День Рождения*' />
                            </div>
                            <div className='availableInfo'>
                                <span>ДД.ММ.ГГГГ</span>
                            </div>
                        </div>
                        <div className='input-and-detals-holder'>
                            <input type='text' placeholder='Номер документа*' />
                            <div className='availableInfo'>

                            </div>
                        </div>
                    </div>
                </div >
            </div > */}
        < button className = 'saveBtn' > Сохранить 💾</button >
        </div >
    )
}
export default Settings;