import React from 'react';
import styles from './users.module.css';

let Users = (props) => {
    if (props.users.length === 0) {
        props.setUsers([
            {
                id: '1',
                photoUrl: 'https://icdn.lenta.ru/images/2020/08/05/13/20200805130643193/square_1280_0b7365786cbd9c48bf2c212b973ba4b5.jpg',
                followed: true,
                fullName: 'Yuri',
                status: 'I am boss',
                location: {city: 'Vitebsk', country: 'Belarus',}
            },
            {
                id: '2',
                photoUrl: 'https://icdn.lenta.ru/images/2020/08/05/13/20200805130643193/square_1280_0b7365786cbd9c48bf2c212b973ba4b5.jpg',
                followed: false,
                fullName: 'Nastya',
                status: 'I women',
                location: {city: 'Moscow', country: 'Russia',}
            },
            {
                id: '3',
                photoUrl: 'https://icdn.lenta.ru/images/2020/08/05/13/20200805130643193/square_1280_0b7365786cbd9c48bf2c212b973ba4b5.jpg',
                followed: false,
                fullName: 'Tamara',
                status: 'I am cat',
                location: {city: 'House', country: 'Bathroom',}
            },
            {
                id: '4',
                photoUrl: 'https://icdn.lenta.ru/images/2020/08/05/13/20200805130643193/square_1280_0b7365786cbd9c48bf2c212b973ba4b5.jpg',
                followed: true,
                fullName: 'AudiA6C5',
                status: 'I am car',
                location: {city: 'street', country: 'Road',}
            },
        ]);
    }

    return (
        <div>{
            props.users.map(u => <div key={u.id}>
                <span>
                    <div>
                        <img src={u.photoUrl} alt="img"
                             className={styles.usersPhoto}/>
                    </div>
                    <div>
                        {u.followed ? <button onClick={() => {
                            props.unFollow(u.id)
                        }}>unFollow</button> : <button onClick={() => {
                            props.follow(u.id)
                        }}>follow</button>}

                    </div>
                </span>
                <span>
                    <span>
                        <div>{u.fullName}</div>
                        <div>{u.status}</div>
                    </span>
                    <span>
                        <div>{u.location.country}</div>
                        <div>{u.location.city}</div>
                    </span>
                </span>
            </div>)
        }</div>
    )
};

export default Users;