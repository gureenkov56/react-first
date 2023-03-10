import React, { useEffect, useState } from 'react'
import User from './User'
import UILoader from '../UI/UILoader';
import '../../styles/userList.scss'
import UIButton from '../UI/UIButton';
import UIInput from '../UI/UIInput';

function UserList() {

    const [UserList, setUserList] = useState([]);
    const [FilteredUserList, setFilteredUserList] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [Skip, setSkip] = useState(0);
    const [searchValue, setSearchValue] = useState('');

    function removeUser(id) {
        setUserList(UserList.filter(user => user.id !== id))
    }

    function changeSearchValue(event) {
        setSearchValue(event.target.value);
    }

    useEffect(() => {
        getUsers();
    }, [])

    useEffect(() => {

        function filterBySearch(search = '') {
            setFilteredUserList(UserList.filter(user =>
                user.firstName.toLowerCase().includes(search)
            ))
        }

        filterBySearch(searchValue);
    }, [UserList, searchValue])

    function getUsers() {
        fetch(`https://dummyjson.com/users?limit=10&skip=${Skip}`)
            .then(res => res.json())
            .then(
                (res) => {
                    setUserList([...UserList, ...res.users]);
                },
                (error) => {
                    console.log('Fetch error:', error)
                }
            )
            .finally(() => {
                setIsLoading(false);
                setSkip(Skip + 10);
            })
    }

    return (
        <>
            <div className='search'>
                <UIInput
                    placeholder='Search...'
                    actionOnInput={changeSearchValue}
                    value={searchValue}
                />
            </div>
            {FilteredUserList.map(user =>
                <User
                    info={user}
                    key={user.id}
                    removeUser={removeUser}
                />
            )
            }
            {
                <UIButton UIButton
                    color={'primary'}
                    actionOnClick={getUsers}
                >
                    ?????????????????? ??????
                </UIButton>
            }
            {
                FilteredUserList.length === 0 &&
                !isLoading &&
                <div>
                    <p>???????????? ????????</p>
                </div>
            }
            {isLoading && <UILoader />}

        </>
    )
}

export default UserList