import React from 'react'
import '../../styles/user.scss'
import UIButton from '../UI/UIButton'
import { Link } from 'react-router-dom'

function User({ info }) {

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
                    <Link to={`user/${info.id}`} state={{ userData: info }}>
                        <UIButton color='primary'>
                            Profile
                        </UIButton>
                    </Link>
                    <UIButton color='danger'
                    >Remove</UIButton>
                </div>
            </section>
        </>
    )
}

export default User