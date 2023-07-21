import React from "react";
import '../CSS/Toggel.css'

function Toggel() {
    const checkBar = (checked) => {
        console.log(checked)
        if (checked == true) {
            document.querySelector('.toggel-box').style.left = '20px';
        }
        if (checked == false) {
            document.querySelector('.toggel-box').style.left = '0px';
        }
    }
    return (
        <>
            <label className="switch">
                <input type="checkbox" defaultChecked onChange={(e) => checkBar(e.target.checked)} />
                <span className="toggel-box"></span>
            </label>
        </>
    )
}

export default Toggel;
