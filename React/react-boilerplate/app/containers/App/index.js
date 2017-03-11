
import React from 'react';
import AppBar from 'material-ui/AppBar'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import styled from 'styled-components'


const styles = {
    AppBar: {
        backgroundColor:'black',
        position:'fixed'
    },
};

const Layout = styled.div``
export default class App extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function

  static propTypes = {
    children: React.PropTypes.node,
  };


  render() {
    return (
        <MuiThemeProvider>
            <div>
                <AppBar style={styles.AppBar} />
                {React.Children.toArray(this.props.children)}
            </div>

      </MuiThemeProvider>
    );
  }
}
