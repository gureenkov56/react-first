import React from 'react'
import '../../styles/footer.scss'
import logo from '../../images/icon.png';

function Footer() {

    return (
        <footer>
            <span>Powered by</span>
            <img className='icon'
                src={logo}
                alt="React"
            />
        </footer>
    )
}

export default Footer