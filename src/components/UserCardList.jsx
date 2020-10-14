import React from 'react';
import UserCard from './UserCard';

import 'bulma/css/bulma.css';
import { Column, Columns } from 'bloomer';

const UserCardList = props => {
    const { users } = props;

    return (
        <Columns isCentered>
            <Column isSize='3/4'>
                {
                    users.map((user) => (
                        <UserCard user={user} />
                    ))
                }
            </Column>
        </Columns>
    )
}

export default UserCardList;