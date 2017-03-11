
import React, { PropTypes } from 'react';
import Layout from '../../components/Layout';
import s from './styles.css';
import { title, html } from './index.md';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import { EmailSignUpForm } from "redux-auth/material-ui-theme";


class HomePage extends React.Component {

  static propTypes = {
    articles: PropTypes.arrayOf(PropTypes.shape({
      url: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      author: PropTypes.string.isRequired,
    }).isRequired).isRequired,
  };

  componentDidMount() {
    document.title = title;
  }

  render() {
    return (
        <MuiThemeProvider>
      <Layout className={s.content}>
     <EmailSignUpForm />;
      </Layout>
  </MuiThemeProvider>
    );
  }

}

export default HomePage;
