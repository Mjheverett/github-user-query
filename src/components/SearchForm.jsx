import React, { Component } from 'react';
import UserCardList from './UserCardList';

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
                <h1>Search Github User</h1>
                <form>
                    <label>
                        Search for Username: 
                        <input 
                            type="text"
                            onChange={event => this._handleChange(event.target.value)}
                            value={userName}
                        />
                    </label>
                    <button type="button" onClick={this._handleSubmit}>
                        Search
                    </button>
                </form>
                <UserCardList users={users} />
            </>
        )
    }
}

export default SearchForm;