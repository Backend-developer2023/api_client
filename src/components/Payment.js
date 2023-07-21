import React, { useState, useEffect } from 'react';
import axios from 'axios'
import ScaleLoader from "react-spinners/ScaleLoader";
import Alert from '../SubComponents/Alert';
import '../CSS/Payment.css'

// images 
import bonuscoins from '../images/bonuscoins.png'

function Payment(props) {
    const [amount, setAmount] = useState('');
    const [spinner, setSpinner] = useState(false)
    const [alert, setAlert] = useState(false)
    const [alertMsg, setAlertMsg] = useState('')
    const [alertStatus, setAlertStatus] = useState('')

    const closePaymentBox = () => {
        props.PaymentBox(false)
    }

    // Add balance in Account 
    const addBalance = () => {
        setSpinner(true)
        const formdata = new FormData();
        formdata.append('currency', 'CARDKZT')
        formdata.append('amount', amount)
        axios.post(process.env.REACT_APP_INVOICE, formdata, {
            headers: {
                Authorization: `Bearer ${sessionStorage.getItem('accessToken')}`
            }
        }).then(res => {
            setSpinner(false)
            setAlert(true)
            setAlertMsg(res.data.data.message)
            setAlertStatus(200)
            setTimeout(() => {
                setAlert(false)
                window.location.href = `${res.data.data.form_link}`;
            }, 1500);
        }).catch(error => {
            setAlert(true)
            setSpinner(false)
            setAlertMsg('Something went wrong !')
            setAlertStatus(400)
            // setAlertMsg(error.response.data.message)
            // console.log(error.response.data.message)
            setTimeout(() => {
                setAlert(false)
            }, 2000);
        })
    }

    const fixAmount = (amount) => {
        setAmount(amount)
    }

    return (
        <div className='paymentPanel'>
            <div className='close-paymentBox' onClick={() => closePaymentBox()}></div>
            <div className='payment-box'>
                <h2>Пополнить счёт 💰</h2>
                <div className='bonusPts'>
                    <img src={bonuscoins} />
                    <div className='bonusPts-text'>
                        <span>250FS</span>
                        <span>Бонус 100% на депозит для казино + 250FS при пополнении от 1000 ₽</span>
                    </div>
                </div>
                <div className='paymentCompany'>
                    <img src={props.companyLogo} />
                </div>
                <span className='sum'>Сумма</span>
                <input type='text' placeholder='0' onChange={(e) => setAmount(e.target.value)} value={amount} />
                <div className='quickPaymentOpts'>
                    <span onClick={() => fixAmount('500')}>500₽</span>
                    <span onClick={() => fixAmount('1000')}>1 000₽</span>
                    <span onClick={() => fixAmount('2500')}>2 500₽</span>
                    <span onClick={() => fixAmount('5000')}>5000₽</span>
                </div>
                <button onClick={() => addBalance()}>  {spinner ? <ScaleLoader color='white' height={16} /> : <> Пополнить💰 </>}  </button>
                <div className='box-footer'>
                    <span>Баланс после пополнения</span>
                    <span>{amount ? amount + '.' + '00' + '₽' : '0'}</span>
                </div>
            </div>
            {alert && <Alert alertMsg={alertMsg} alertStatus={alertStatus} />}
        </div>
    )
}
export default Payment;