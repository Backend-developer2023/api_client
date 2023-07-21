import React from "react";
import '../CSS/Footer.css'
import visa from '../images/visa.png'
import logo from '../images/logo.png'
import masterCard from '../images/mastercard.png'

function Footer() {
    return (
        <div className="footer">
            <div className="footer-brandName">
                <img src={logo} />
                <span style={{ fontWeight: 'bold', fontSize: '30px', }}>Wono<span style={{ color: '#794DFD', fontStyle: 'italic', }}>Rado</span></span>
            </div>
            <div className="footer-payment-section">
                <div className="footer-payment-methods">
                    <span> Платежные методы </span>
                    <div className="footer-methods">
                        <span className="footer-method">
                            <img src={visa} />
                        </span>
                        <span className="footer-method">
                            <img src={masterCard} />
                        </span>
                    </div>
                </div>
                <div className="footer-our-providers">
                    <span>Наши провайдеры</span>
                    <div className="footer-providers">
                        <span className="footer-provider">
                            <img src={visa} />
                        </span>
                        <span className="footer-provider">
                            <img src={visa} />
                        </span>
                        <span className="footer-provider">
                            <img src={visa} />
                        </span>
                        <span className="footer-provider">
                            <img src={visa} />
                        </span>
                        <span className="footer-provider">
                            <img src={visa} />
                        </span>
                        <span className="footer-provider">
                            <img src={visa} />
                        </span>
                        <span className="footer-provider">
                            <img src={visa} />
                        </span>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Footer;