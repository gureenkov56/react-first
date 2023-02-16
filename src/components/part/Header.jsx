import React, { useState } from 'react'
import '../../styles/header.scss'
import darkmodeIcon from '../../images/darkmode.png'

function Header(props) {

    const [darkMode, setDarkMode] = useState(false);

    function newMode() {
        setDarkMode(!darkMode);
        props.setMode(darkMode);
    }

    return (
        <header>
            <div className="wrapper">
                <div className="title">User List</div>
                <button className='darkmode'>
                    <img onClick={newMode} 
                        className='darkmode__icon'
                        src={darkmodeIcon}
                        alt="mode"
                    />
                </button>
            </div>
        </header>
    )
}

export default Header