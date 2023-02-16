import React from 'react'
import '../styles/user.scss'
import UIButton from './UI/UIButton'

function User() {

    return (
        <>
            <section className='User'>
                <div className="avatar">
                    <img src="https://robohash.org/hicveldicta.png" alt="avatar" />
                </div>
                <div className="info">
                    <h2 className='info__fullname'>Terry Smith</h2>
                    <div className="info__age">23 y.o</div>
                    <div className="info__location">Washington</div>
                </div>
                <div className="buttons">
                    <UIButton color='primary'
                    >Profile</UIButton>

                    <UIButton color='danger'
                    >Remove</UIButton>
                </div>
            </section>
        </>
    )
}

export default User