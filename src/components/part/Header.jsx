import React from 'react'
import '../../styles/header.scss'
import darkmodeIcon from '../../images/darkmode.png'

function Header(props) {

    return (
        <header>
            <div className="wrapper">
                <div className="title">User List</div>
                <button className='darkmode'>
                    <img onClick={() => props.appNode.current.classList.toggle('darkmode')} 
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