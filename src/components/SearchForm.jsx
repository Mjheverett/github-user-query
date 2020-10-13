import React, { Component } from 'react';
import UserCardList from './UserCardList';

class SearchForm extends Component {
    state = {
        userName: '',
        users: [],
    }

    loadData = async () => {
        const { userName } = this.state;
        const response = await fetch(`https://api.github.com/users/${userName}`);
        const data = await response.json();
        console.log("user data", data);
        return data;
    }

    _handleChange = (newUserName) => {
        this.setState({
            userName: newUserName,
        });
    };

    _handleSubmit = async () => {
        const userData = await this.loadData();

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