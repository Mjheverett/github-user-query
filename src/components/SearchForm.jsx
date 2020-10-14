import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom';
import UserCardList from './UserCardList';
import UserProfile from './UserProfile';

import 'bulma/css/bulma.css';
import { Box, Button, Title } from 'bloomer';

class SearchForm extends Component {
    state = {
        userName: '',
        users: [],
    }

    _handleChange = (newUserName) => {
        this.setState({
            userName: newUserName,
        });
    };

    _handleSubmit = async (event) => {
        event.preventDefault();

        const { userName } = this.state;

        const response = await fetch(`https://api.github.com/users/${userName}`);
        const userData = await response.json();

        this.setState({
            userName: '',
            users: [...this.state.users, userData],
        })
    }

    render() {
        const { userName, users } = this.state;
        
        return (
            <>
                <Route exact path="/">
                    <Title isSize={2}>Search Github User</Title>
                    <form>
                        <label>
                            Search for Username: 
                            <input 
                                type="text"
                                onChange={event => this._handleChange(event.target.value)}
                                value={userName}
                            />
                        </label>
                        <Button type="button" onClick={this._handleSubmit}>
                            Search
                        </Button>
                    </form>
                    <UserCardList users={users} />
                </Route>
                <Route path={`/user/:userName`}>
                    <Link to="/">Return to List</Link>
                    <UserProfile users={users} />
                </Route>
            </>
        )
    }
}

export default SearchForm;