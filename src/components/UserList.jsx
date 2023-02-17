import React, { useEffect, useState } from 'react'
import User from './User'

function UserList() {

    const [UserList, setUserList] = useState([]);

    useEffect(() => {
        fetch('https://dummyjson.com/users')
            .then(res => res.json())
            .then(
                (res) => {
                    setUserList(res.users);
                    console.log(res);
                },
                (error) => {
                    console.log('error')
                }
            )
    }, [])

    return (
        <>
            {UserList.map(user => 
                <User info={user} />
            ) }
        </>
    )
}

export default UserList