import React from 'react';
import { FormattedMessage } from 'react-intl';
import messages from './messages';
import styled from 'styled-components'
import FontIcon from 'material-ui/FontIcon';
import {BottomNavigation, BottomNavigationItem} from 'material-ui/BottomNavigation';
import Paper from 'material-ui/Paper';
import IconLocationOn from 'material-ui/svg-icons/communication/location-on';
import Login from 'containers/Login'


const recentsIcon = <FontIcon className="material-icons">restore</FontIcon>;
const favoritesIcon = <FontIcon className="material-icons">favorite</FontIcon>;
const nearbyIcon = <IconLocationOn />;



const Footer = styled.footer`
display: flex;
flex-direction: column;
align-items: center;
min-height: 100%;
padding: 2rem 6rem;
box-sizing: border-box;
background-color: black;
text-align: center;
@media screen and (max-width: 640px) {
  padding: 1rem;
}
`

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
`
const AppLayout = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  background:linear-gradient(
    rgba(0,0,0,0.7),
    rgba(0,0,0,0.7)),
    url("https://source.unsplash.com/category/people/800x600") no-repeat center center fixed;
  background-size: cover;
  box-sizing: border-box;
  padding-top: 100px;
`
export default class HomePage extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
        <div>


        <AppLayout>
            <Wrapper>
                <Login />
            </Wrapper>

        </AppLayout>
        <Footer />
        </div>


    );
  }
}
