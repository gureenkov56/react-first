import React from 'react'
import '../../styles/userProfile.scss'
import { useLocation } from 'react-router-dom'


function UserProfile() {
    const location = useLocation()
    const { userData: user  } = location.state

    console.log(user);

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
                </div>
            </section>

        </div>
    )
}

export default UserProfile