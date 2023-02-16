import React from 'react'
import '../../styles/footer.scss'
import logo from '../../images/icon.png';

function Footer() {

    return (
        <section className="Footer">
            <span>Powered by</span>
            <img className='Footer__icon'
                src={logo}
                alt="React"
            />
        </section>
    )
}

export default Footer