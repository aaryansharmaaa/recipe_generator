import React from 'react'
import { ImSpoonKnife } from "react-icons/im";
import './Header.css';

const Header = () => {
    return (
        <div className="header">
            <div className="upper-container">
                <ImSpoonKnife className='brand' />
            </div>
            <div className="bottom-container">
                 <h3>Recipe App Reactjs</h3>
                 <p>Lets Cook  a wonderfull dish together for your a loved once...</p>
            </div>
        </div>
    )
}

export default Header
