import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import 'bulma/css/bulma.css';
import { Box, Column, Columns, Title } from 'bloomer';

const UserProfile = props => {
    const [repos, setRepos] = useState([]);
    const { users } = props;
    const { userName } = useParams();
    const user = users.find((user) => {
        return user.login === userName ? user : null;
    })

    useEffect(() => {
        (async function () {
            const response = await fetch(`https://api.github.com/users/${userName}/repos`);
            const repos = await response.json();
            setRepos(repos);
        })();
    }, [setRepos, userName]);

    return (
        <>
            {!!users.length ? (
                <>
                    <Title isSize={3}>{user.name}</Title>
                    <img src={user.avatar_url} alt="avatar" />
                    <p>{user.bio}</p>
                    <p>{user.location}</p>
                    <Title isSize={4}>Github Repositories:</Title>
                    <Columns isCentered>
                        <Column isSize='1/2'>
                            {
                                repos.map((repo) => {
                                    return (
                                        <Box key={repo.node_id}>
                                            <a href={repo.html_url} target="_blank" rel="noopener noreferrer">{repo.name}</a>
                                            <p>{repo.description}</p>
                                        </Box>
                                    )
                                })
                            }
                        </Column>
                    </Columns>
                </>
            ) : (
                <p>Users array is empty</p>
            )}
        </>
    )
}

export default UserProfile;