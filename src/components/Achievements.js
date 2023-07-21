import React from "react";
import '../CSS/Achievements.css'

// Images
import shock60 from '../images/shock-60.png'
import shock90 from '../images/shock-90.png'
import shock180 from '../images/shock-180.png'

function Achievements(props) {

    const totalStrikesDays = props.totalStrikesDays ? props.totalStrikesDays.length : 0;

    console.log(totalStrikesDays)


    return (
        <div className="achievements-data">
            <h3>Мои награды 🏆</h3>
            <div className="achievement-cards">
                <div className="card">
                    <span className="award-name">В ударном режиме 30 дней</span>
                    <div className="base-bar">
                        <span className="achievement-progress" style={totalStrikesDays > 0 && totalStrikesDays <= 30 ? { width: `${totalStrikesDays * 3.4}%` } : totalStrikesDays > 30 ? { width: '100%' } : { width: '0%' }}></span>
                    </div>
                </div>
                <div className="card">
                    <img src={shock60} />
                    <span className="award-name">В ударном режиме 60 дней</span>
                    <div className="base-bar">
                        <span className="achievement-progress" style={totalStrikesDays > 60 && totalStrikesDays <= 90 ? { width: `${totalStrikesDays / 2 * 3.4}%` } : totalStrikesDays > 90 ? { width: '100%' } : { width: '0%' }}></span>
                    </div>
                </div>
                <div className="card">
                    <img src={shock90} />
                    <span className="award-name">В ударном режиме 90 дней</span>
                    <div className="base-bar">
                        <span className="achievement-progress" style={totalStrikesDays > 60 && totalStrikesDays <= 90 ? { width: `${totalStrikesDays / 3 * 3.4}%` } : totalStrikesDays > 90 ? { width: '100%' } : { width: '0%' }} ></span>
                    </div>
                </div>
                <div className="card">
                    <img src={shock180} />
                    <span className="award-name">Ударном режиме 180 дней</span>
                    <div className="base-bar">
                        <span className="achievement-progress" style={totalStrikesDays > 60 && totalStrikesDays <= 90 ? { width: `${totalStrikesDays / 6 * 3.4}%` } : totalStrikesDays > 90 ? { width: '100%' } : { width: '0%' }}></span>
                    </div>
                </div>
                <div className="card">
                    <span className="award-name">Ударном режиме 200 дней</span>
                    <div className="base-bar">
                        <span className="achievement-progress" style={totalStrikesDays > 60 && totalStrikesDays <= 90 ? { width: `${totalStrikesDays / 6.7 * 3.4}%` } : totalStrikesDays > 90 ? { width: '100%' } : { width: '0%' }}></span>
                    </div>
                </div>
                <div className="card">
                    <span className="award-name">Ударном режиме 230 дней</span>
                    <div className="base-bar">
                        <span className="achievement-progress" style={totalStrikesDays > 60 && totalStrikesDays <= 90 ? { width: `${totalStrikesDays / 7.7 * 3.4}%` } : totalStrikesDays > 90 ? { width: '100%' } : { width: '0%' }}></span>
                    </div>
                </div>
                <div className="card">
                    <span className="award-name">Ударном режиме 260 дней</span>
                    <div className="base-bar">
                        <span className="achievement-progress" style={totalStrikesDays > 60 && totalStrikesDays <= 90 ? { width: `${totalStrikesDays / 8.7 * 3.4}%` } : totalStrikesDays > 90 ? { width: '100%' } : { width: '0%' }}></span>
                    </div>
                </div>
                <div className="card">
                    <span className="award-name">Ударном режиме 290 дней</span>
                    <div className="base-bar">
                        <span className="achievement-progress" style={totalStrikesDays > 60 && totalStrikesDays <= 90 ? { width: `${totalStrikesDays / 9.7 * 3.4}%` } : totalStrikesDays > 90 ? { width: '100%' } : { width: '0%' }}></span>
                    </div>
                </div>
                <div className="card">
                    <span className="award-name">Ударном режиме 310 дней</span>
                    <div className="base-bar">
                        <span className="achievement-progress" style={totalStrikesDays > 60 && totalStrikesDays <= 90 ? { width: `${totalStrikesDays / 10.4 * 3.4}%` } : totalStrikesDays > 90 ? { width: '100%' } : { width: '0%' }}></span>
                    </div>
                </div>
                <div className="card">
                    <span className="award-name">Ударном режиме 350 дней</span>
                    <div className="base-bar">
                        <span className="achievement-progress" style={totalStrikesDays > 60 && totalStrikesDays <= 90 ? { width: `${totalStrikesDays / 11.7 * 3.4}%` } : totalStrikesDays > 90 ? { width: '100%' } : { width: '0%' }}></span>
                    </div>
                </div>
                <div className="card">
                    <span className="award-name">Ударном режиме 380 дней</span>
                    <div className="base-bar">
                        <span className="achievement-progress" style={totalStrikesDays > 60 && totalStrikesDays <= 90 ? { width: `${totalStrikesDays / 12.7 * 3.4}%` } : totalStrikesDays > 90 ? { width: '100%' } : { width: '0%' }}></span>
                    </div>
                </div>
                <div className="card">
                    <span className="award-name">Ударном режиме 410 дней</span>
                    <div className="base-bar">
                        <span className="achievement-progress" style={totalStrikesDays > 60 && totalStrikesDays <= 90 ? { width: `${totalStrikesDays / 13.7 * 3.4}%` } : totalStrikesDays > 90 ? { width: '100%' } : { width: '0%' }}></span>
                    </div>
                </div>
                <div className="card">
                    <span className="award-name">Ударном режиме 440 дней</span>
                    <div className="base-bar">
                        <span className="achievement-progress" style={totalStrikesDays > 60 && totalStrikesDays <= 90 ? { width: `${totalStrikesDays / 14.7 * 3.4}%` } : totalStrikesDays > 90 ? { width: '100%' } : { width: '0%' }}></span>
                    </div>
                </div>
                <div className="card">
                    <span className="award-name">Ударном режиме 470 дней</span>
                    <div className="base-bar">
                        <span className="achievement-progress" style={totalStrikesDays > 60 && totalStrikesDays <= 90 ? { width: `${totalStrikesDays / 15.7 * 3.4}%` } : totalStrikesDays > 90 ? { width: '100%' } : { width: '0%' }}></span>
                    </div>
                </div>
            </div>
        </div >
    )
}

export default Achievements;