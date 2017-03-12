import React from 'react'
import styled from 'styled-components'
import TextField from 'material-ui/TextField'
import FlatButton from 'material-ui/FlatButton'

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

export default class Login extends React.PureComponent {
    render() {
        return (
            <Wrapper>
                <form>
                <Text>
                    Login
                </Text>
                <span><TextField
                    hintText="@username"
                    type="text"
                /></span>
            <span>  <TextField
                    hintText="@password"
                    type="password"
                /></span>
                    <FlatButton label="Login" primary={true} />
            </form>

            </Wrapper>
        )
    }
}
