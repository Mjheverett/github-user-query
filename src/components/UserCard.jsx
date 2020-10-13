import React from 'react';

const UserCard = props => {
    const { user } = props

    return (
        <>
            <img src={user.avatar_url} alt="avatar" />
            <h3>{user.name}</h3>
        </>
    )
}

export default UserCard;