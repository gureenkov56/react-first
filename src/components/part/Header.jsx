import React from 'react'
import '../../styles/header.scss'
import darkmodeIcon from '../../images/darkmode.png'
import { Link } from 'react-router-dom'

function Header(props) {

    return (
        <header>
            <div className="wrapper">
                <Link to='/'>
                    <div className="title">User List</div>
                </Link>
                <div className='right-part'>
                    <Link to='/about'>About</Link>
                    <button className='darkmode'>
                        <img onClick={() => props.appNode.current.classList.toggle('darkmode')}
                            className='darkmode__icon'
                            src={darkmodeIcon}
                            alt="mode"
                        />
                    </button>
                </div>
            </div>
        </header>
    )
}

export default Header