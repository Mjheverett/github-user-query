import React from 'react';
import { Link } from 'react-router-dom';

import 'bulma/css/bulma.css';
import { Box } from 'bloomer';

const UserCard = props => {
    const { user } = props

    return (
        <>
            <img src={user.avatar_url} alt="avatar" />
            <br />
            <Link to={`/user/${user.login}`}>{user.name}</Link>
        </>
    )
}

export default UserCard;