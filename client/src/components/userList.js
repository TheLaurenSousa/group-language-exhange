import React, { useEffect, useState } from 'react';
import '../App.css';
import getUsers from '../components/users/getUsers';
import { useNavigate } from 'react-router-dom';

const UserList = () => {
    const [users, setUsers] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        getUsers()
            .then((res) => {
                const userData = res.data
                const userList = [];
                for (const key of Object.keys(userData)) {
                    userList.push(userData[key])
                }
                setUsers(userList);
            })
    }, []);

    const startChat = (e) => {
        navigate('/chat')
    }

    return (
        <div>
            <h2>Users:</h2>
            {users.map((user, i) => {
                return (
                    <p key={i}>
                        <button onClick={startChat}>{user.username}</button>
                    </p>
                )
            })}
        </div>
    )

}

export default UserList;