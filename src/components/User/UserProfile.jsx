import React from 'react'
import '../../styles/userProfile.scss'

function UserProfile() {

    return (
        <div className='UserProfile'>
            <section className='first'>
                <div className='avatar'>
                    <img src="https://robohash.org/hicveldicta.png" alt="avatar" />
                </div>
                <div>
                    <div className='name'>
                        <h1>Name Name</h1>
                        <span>#1</span>
                    </div>
                </div>
            </section>

        </div>
    )
}

export default UserProfile