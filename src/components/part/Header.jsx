import React from 'react'
import '../../styles/header.scss'
import darkmodeIcon from '../../images/darkmode.png'

function Header(props) {

    const appNode = document.querySelector('.App');

    return (
        <header>
            <div className="wrapper">
                <div className="title">User List</div>
                <button className='darkmode'>
                    <img onClick={() => appNode.classList.toggle('darkmode')} 
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