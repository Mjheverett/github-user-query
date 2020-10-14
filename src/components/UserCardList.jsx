import React from 'react';
import UserCard from './UserCard';

import 'bulma/css/bulma.css';
import { Box } from 'bloomer';

const UserCardList = props => {
    const { users } = props;

    return (
        <>
            {
                users.map((user) => (
                    <UserCard user={user} />
                ))
            }
        </>
    )
}

export default UserCardList;