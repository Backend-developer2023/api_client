import React, { useState, useEffect } from 'react';
import '../CSS/Account.css'
import Payment from './Payment';
// images 
import visa from '../images/visa.png'
import mastercard from '../images/mastercard.png'
import mnp from '../images/mnp.png'
import monetix from '../images/monetix.png'
import bitcoin from '../images/bitcoin.png'
import tether from '../images/tether.png'
import ethereum from '../images/ethereum.png'
import ripple from '../images/ripple.png'
import litecoin from '../images/litecoin.png'
import bitcoincash from '../images/bitcoincash.png'
import binance from '../images/binance.png'
import dogecoin from '../images/dogecoin.png'
import dash from '../images/dash.png'
import zcash from '../images/zcash.png'

function TopupAccount() {
    const [paymentOpt, setPaymentOpt] = useState(false)
    const [companyLogo, setCompanyLogo] = useState('')
    const [companyName, setCompanyName] = useState('')
    const methodSelected = (logo, companyName) => {
        setPaymentOpt(true)
        setCompanyLogo(logo)
        setCompanyName(companyName)
    }

    const PaymentBox = (data) => {
        setPaymentOpt(data)
    }
    return (
        <>
            <div className='topupAccountSection'>
                <h1>ПОПОЛНИТЬ СЧЁТ 5050398</h1>
                <div className='depositeOpts'>
                    <h2>Рекомендовано для вас 👍</h2>
                    <div className='paymentMethods'>
                        <div className='company' onClick={() => methodSelected(visa, 'visa')}>
                            <img src={visa} />
                            <span className='c-name'> Visa</span>
                        </div>
                        <div className='company' onClick={() => methodSelected(mastercard, 'mastercard')}>
                            <img src={mastercard} />
                            <span className='c-name'> master card</span>
                        </div>
                        <div className='company' onClick={() => methodSelected(mastercard, 'mastercard')}>
                            <img src={mnp} />
                            <span className='c-name'> mnp</span>
                        </div>
                        <div className='company' onClick={() => methodSelected(monetix, 'monetix')}>
                            <img src={monetix} />
                            <span className='c-name'> monetex</span>
                        </div>
                        <div className='company' onClick={() => methodSelected(bitcoin, 'bitcoin')}>
                            <img src={bitcoin} />
                            <span className='c-name'> bitcoin</span>
                        </div>
                        <div className='company' onClick={() => methodSelected(tether, 'tether')}>
                            <img src={tether} />
                            <span className='c-name'> tether</span>
                        </div>
                        <div className='company' onClick={() => methodSelected(ethereum, 'ethereum')}>
                            <img src={ethereum} />
                            <span className='c-name'> etereum</span>
                        </div>
                        <div className='company' onClick={() => methodSelected(ripple, 'ripple')}>
                            <img src={ripple} />
                            <span className='c-name'> ripple</span>
                        </div>
                        <div className='company' onClick={() => methodSelected(litecoin, 'litecoin')}>
                            <img src={litecoin} />
                            <span className='c-name'> litecoin</span>
                        </div>
                        <div className='company' onClick={() => methodSelected(bitcoincash, 'bitcoincash')}>
                            <img src={bitcoincash} />
                            <span className='c-name'> bitcoin</span>
                        </div>
                        <div className='company' onClick={() => methodSelected(binance, 'binance')}>
                            <img src={binance} />
                            <span className='c-name'> binance</span>
                        </div>
                        <div className='company' onClick={() => methodSelected(dogecoin, 'dogecoin')}>
                            <img src={dogecoin} />
                            <span className='c-name'> dogecoin</span>
                        </div>
                        <div className='company' onClick={() => methodSelected(dash, 'dash')}>
                            <img src={dash} />
                            <span className='c-name'> dash</span>
                        </div>
                        <div className='company' onClick={() => methodSelected(zcash, 'zcash')}>
                            <img src={zcash} />
                            <span className='c-name'> zcash</span>
                        </div>
                        <div className='company' onClick={() => methodSelected(zcash, 'zcash')}>
                            {/* <img src={zcash} />
                            <span className='c-name'> zcash</span> */}
                        </div>
                        <div className='company' onClick={() => methodSelected(zcash, 'zcash')}>
                            {/* <img src={zcash} />
                            <span className='c-name'> zcash</span> */}
                        </div>
                    </div>
                </div>
            </div>
            {/* Payment Box  */}
            {paymentOpt && <Payment companyLogo={companyLogo} companyName={companyName} PaymentBox={PaymentBox} />}
        </>
    )
}
export default TopupAccount;