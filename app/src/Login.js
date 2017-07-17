import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { replace } from 'react-router-redux';

import { requestLogin } from './reducer';
import { HOME } from './constants';

class Login extends Component {
  componentDidMount() {
    if (this.props.user.auth) {
      this.props.replace(HOME);
    }
  }

  handleSubmitForm = (event) => {
    event.preventDefault();
    const elements = event.target.elements;
    const username = elements.username.value;
    const password = elements.password.value;

    if (username !== '' && password !== '') {
      this.props.requestLogin(username, password);
    }
  };

  render() {
    return (
      <form onSubmit={this.handleSubmitForm}>
        <input
          name="username"
          placeholder="Username"
          type="text"
        />
        <input
          name="password"
          placeholder="Password"
          type="password"
        />
        <button type="submit">Submit</button>
      </form>
    );
  }
}

const mapStateToProps = state => ({
  user: state.app.user
});

const mapDispatchToProps = dispatch => (
  bindActionCreators({
    replace,
    requestLogin
  }, dispatch)
);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Login);
