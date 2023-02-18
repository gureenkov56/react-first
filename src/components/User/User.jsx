import React from 'react'
import '../../styles/user.scss'
import UIButton from '../UI/UIButton'

function User({info}) {

    return (
        <>
            <section className='User'>
                <div className="avatar">
                    <img src={info.image} alt="avatar" />
                </div>
                <div className="info">
                    <h2 className='info__fullname'>{info.firstName} {info.lastName}</h2>
                    <div className="info__age">{info.age} y.o</div>
                    <div className="info__location">{info.address.city}</div>
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