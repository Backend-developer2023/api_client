import React from "react";
import { BiErrorCircle } from 'react-icons/bi'
import { BsCheck2Circle } from 'react-icons/bs'
import '../CSS/Alert.css'

function Alert(props) {
    const alertMsg = props.alertMsg;
    const alertStatus = props.alertStatus;
    return (
        <div className="Alert">
            <div className="AlertMsg">
                {/* Success icon  */}
                {alertStatus == 200 &&
                    <BsCheck2Circle size={24} color="green" />}
                {/* alert icon  */}
                {alertStatus == 400 &&
                    <BiErrorCircle size={24} color="#ff9800" />}
                <span className="Msg">{alertMsg}</span>
            </div>
        </div>
    )
}
export default Alert;