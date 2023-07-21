import React, { useState, useEffect } from 'react';
import axios from 'axios';
import '../CSS/Login.css';
import ScaleLoader from "react-spinners/ScaleLoader";

// icons
import { IoMdClose } from 'react-icons/io'
import { RiGoogleLine } from 'react-icons/ri'
import { TbBrandTelegram } from 'react-icons/tb'

import googleImg from '../images/google.png'
import telegramImg from '../images/telegram.png'

import { googleLogout, useGoogleLogin } from '@react-oauth/google';

function Login(props) {

    const [rememberUser, setRememberUser] = useState()
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [spinner, setSpinner] = useState(false)

    const closeLogin = () => {
        props.closeLogin(false)
    }

    const Login = (e) => {
        e.preventDefault()
        setSpinner(true)
        axios.post(process.env.REACT_APP_LOGIN, {
            email: email,
            password: password,
        }).then(res => {
            setSpinner(false)
            sessionStorage.setItem('username', email)
            sessionStorage.setItem('accessToken', res.data.access_token)
            window.location.reload();
        }).catch(error => {
            setSpinner(false)
            alert('Invalid Credentials')
        })
    }


    //  Google Auth :
    const [user, setUser] = useState([]);
    const [gProfile, setGProfile] = useState([]);

    const Glogin = useGoogleLogin({
        onSuccess: (codeResponse) => {
            setUser(codeResponse)
        },
        onError: (error) => console.log('Login Failed:', error)
    });

    useEffect(
        () => {
            if (user) {
                axios
                    .get(`https://www.googleapis.com/oauth2/v1/userinfo?access_token=${user.access_token}`, {
                        headers: {
                            Authorization: `Bearer ${user.access_token}`,
                            Accept: 'application/json'
                        }
                    })
                    .then((res) => {
                        setGProfile(res.data);
                    })
                    .catch((err) => console.log(err));
            }
        },
        [user]
    );

    return (
        <div className='loginForm'>
            <form onSubmit={Login}>
                <IoMdClose size={24} className='closeLoginForm' onClick={() => closeLogin()} />
                <h2>ВХОД НА САЙТ</h2>
                <div className='inpts'>
                    <input type='email' placeholder='👤 Email или номер телефона' onChange={(e) => setEmail(e.target.value)} name='email' />
                    <input type='password' placeholder='🔒 Пароль' onChange={(e) => setPassword(e.target.value)} name='password' />
                </div>
                <div className='remember'>
                    <input type='checkbox' onChange={(e) => setRememberUser(e.target.checked)} />
                    <span>Запомнить меня</span>
                </div>
                <div className='btn-and-forgot-pass-option'>
                    <button type='submit'>{spinner ? <ScaleLoader color='white' height={16} /> : <> ВОЙТИ </>} </button>
                    <span>Забыли пароль?</span>
                </div>
                <div className='login-options-header'>
                    <span>войти c помощью</span>
                    <p></p>
                </div>
                <div className='login-options'>
                    <img onClick={() => Glogin()} src={googleImg} className='google' style={{ width: '28px' }} /> &ensp;
                    <img src={telegramImg} className='telegram' style={{ width: '28px' }} />
                </div>
                <div className='registration-header'>
                    <span>Ещё не зарегистрированы?</span>
                    <p></p>
                </div>
                <span className='registration-btn' onClick={() => props.registrationForm(true)}>РЕГИСТРАЦИЯ</span>
            </form>
        </div>
    )
}

export default Login;