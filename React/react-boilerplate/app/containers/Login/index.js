import React from 'react'
import styled from 'styled-components'
import TextField from 'material-ui/TextField'
import FlatButton from 'material-ui/FlatButton'

import React, {Component}  from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { loginUsingCredentials } from '../../actions/Login';

const Wrapper = styled.div`
display: flex;
flex-direction: column;
align-items: center;
min-height: 100%;
padding: 2rem 6rem;
box-sizing: border-box;
text-align: center;
@media screen and (max-width: 640px) {
  padding: 1rem;
}
background-color: white;
`
const Text = styled.p`
margin: 3rem auto;
max-width: 800px;
font-weight: 300;
font-size: 1.35rem;
line-height: 1.35em;
letter-spacing: 0.07em;
flex-wrap:wrap;
@media screen and (max-width: 640px) {
  font-size: 1rem;
}
`

class Login extends React.PureComponent {
    render() {
        const {loginUsingCredentials} = this.props;
        const onButtonClicked = (username, password) => loginUsingCredentials(username, password);

        return (
            <Wrapper>
                <form>
                <Text>
                    Login
                </Text>
                <span><TextField
                    ref='username'
                    hintText="@username"
                    type="text"
                /></span>
            <span>  <TextField
                    ref='password'
                    hintText="@password"
                    type="password"
                /></span>
                    <FlatButton label="Login" primary={true} onClick={e => {
                            onButtonClicked(
                                ReactDOM.findDOMNode(this.refs.username).value,
                                ReactDOM.findDOMNode(this.refs.password).value
                            );
                        }}/>
            </form>

            </Wrapper>
        );
    }
}

const mapStateToProps = state => ({
    username: state.credentials.username,
    password: state.credentials.password
})

const mapDispatchToProps = dispatch => bindActionCreators({
     loginUsingCredentials 
}, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(Login);
