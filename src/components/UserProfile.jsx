import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import 'bulma/css/bulma.css';
import { Box, Title } from 'bloomer';

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
    }, [setRepos]);

    return (
        <>
            <Title isSize={2}>{user.name}</Title>
            <img src={user.avatar_url} alt="avatar" />
            <p>{user.bio}</p>
            <p>{user.location}</p>
            <h4>Github Repositories:</h4>
                <ul>
                    {
                        repos.map((repo) => {
                            return (
                                <li>
                                    <Box key={repo.node_id}>
                                        <a href={repo.html_url} target="_blank">{repo.name}</a>
                                        <p>{repo.description}</p>
                                    </Box>
                                </li>
                                
                            )
                        })
                    }
                </ul>
            
        </>
    )
}

export default UserProfile;