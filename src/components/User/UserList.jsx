import React, { useEffect, useState } from 'react'
import User from './User'
import UILoader from '../UI/UILoader';
import '../../styles/userList.scss'
import UIButton from '../UI/UIButton';
import UIInput from '../UI/UIInput';

function UserList() {

    const [UserList, setUserList] = useState([]);
    const [FilteredUserList, setFilteredUserList] = useState(UserList);
    const [isLoading, setIsLoading] = useState(true);

    function removeUser(id) {
        setUserList(UserList.filter(user => user.id !== id))
    }

    function filterBySearch(event) {
        const search = event.target.value.toLowerCase();
        setFilteredUserList(UserList.filter(user => 
            user.firstName.toLowerCase().includes(search)
        ))
    }

    useEffect(() => {
        getUsers();
    }, [])

    function getUsers() {
        fetch('https://dummyjson.com/users')
            .then(res => res.json())
            .then(
                (res) => {
                    setUserList(res.users);
                    setFilteredUserList(res.users);
                    console.log(res);
                },
                (error) => {
                    console.log('Fetch error:', error)
                }
            )
            .finally(() => setIsLoading(false))
    }

    return (
        <>
            <div className='search'>
            <UIInput 
                placeholder='Search...'
                actionOnInput={filterBySearch}
            />
            </div>
            {FilteredUserList.map(user =>
                <User
                    info={user}
                    key={user.id}
                    removeUser={removeUser}
                />
            )}
            {
                UserList.length === 0 &&
                !isLoading &&
                <div>
                <p>Список пуст</p>
                    <UIButton 
                    color={'primary'}
                    actionOnClick={getUsers}
                    >
                        Загрузить еще
                    </UIButton>
                </div>
            }
            {isLoading && <UILoader />}

        </>
    )
}

export default UserList