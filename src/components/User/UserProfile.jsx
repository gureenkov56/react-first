import React from 'react'
import '../../styles/userProfile.scss'
import { useLocation, useNavigate } from 'react-router-dom'
import UIButton from '../UI/UIButton'


function UserProfile() {
    const location = useLocation()
    const { userData: user } = location.state

    const navigate = useNavigate();

    return (
        <div className='UserProfile'>
            <section className='first'>
                <div className='avatar'>
                    <img src={user.image} alt="avatar" />
                </div>
                <div>
                    <div className='name'>
                        <h1>{user.firstName} {user.lastName}</h1>
                        <span>#{user.id}</span>
                    </div>
                    <p>
                        Company: {user.company.title} | {user.company.department}
                    </p>
                    <p>Email: {user.email}</p>
                    <UIButton
                        color='primary'
                        actionOnClick={() => navigate(-1)}
                    >
                        Go Back
                    </UIButton>
                </div>

            </section>

        </div>
    )
}


export default UserProfile