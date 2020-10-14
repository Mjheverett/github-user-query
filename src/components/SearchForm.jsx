import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom';
import UserCardList from './UserCardList';
import UserProfile from './UserProfile';

import 'bulma/css/bulma.css';
import { Box, Button, Column, Columns, Container, Control, Field, Hero, HeroBody, Input, Label, Title } from 'bloomer';

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
                    <Hero isColor='success' isSize='small'>
                        <HeroBody>
                            <Container hasTextAlign='centered'>
                                <Title isSize={2}>Search Github User</Title>
                            </Container>
                        </HeroBody>
                    </Hero>
                    
                    <Columns isCentered>
                        <Column isSize='1/2'>
                            <br />
                            <form>
                                <Field>
                                    <Label>
                                        Search for Username:
                                    </Label> 
                                    <Control>
                                        <Input 
                                            type="text"
                                            onChange={event => this._handleChange(event.target.value)}
                                            value={userName}
                                        />
                                    </Control>
                                </Field>
                                <Field>
                                    <Button isColor='primary' type="button" onClick={this._handleSubmit}>
                                        Search
                                    </Button>
                                </Field>
                            </form>
                        </Column>
                    </Columns>
                    
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