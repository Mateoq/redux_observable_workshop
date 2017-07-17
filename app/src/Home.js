import React, { Component } from 'react';
import CSSTransitionGroup from 'react-addons-css-transition-group';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { replace } from 'react-router-redux';

import {
  addMessageToQueue,
  removeMessages,
  showMessages
} from './reducer';
import { LOGIN, SIMPLE_TRANSITION } from './constants';

class Home extends Component {
  componentDidMount() {
    if (!this.props.user.auth) {
      this.props.replace(LOGIN);
    }
  }

  handleAddMessage = (event) => {
    event.preventDefault();
    const message = event.target.elements.message.value;

    if (message !== '') {
      this.props.addMessageToQueue(message);
      event.target.elements.message.value = '';
    }
  };

  handleShowMessages = () => {
    this.props.showMessages();
  };

  handleRemoveMessages = () => {
    this.props.removeMessages();
  };

  render() {
    const { messages } = this.props;

    return (
      <div className="home">
        <div className="home__form">
          <form onSubmit={this.handleAddMessage}>
            <input name="message" type="text"/>
            <button type="submit">Add Message</button>
          </form>
          <button onClick={this.handleShowMessages}>showMessages</button>
          <button onClick={this.handleRemoveMessages}>Remove Messages</button>
        </div>
        <div className="home__messages">
          <ul>
            <CSSTransitionGroup
              transitionName={SIMPLE_TRANSITION}
              transitionEnterTimeout={300}
              transitionLeaveTimeout={300}
            >
              {messages.map(message => (
                <li key={message.id} className="message">
                  {message.message}
                </li>
              ))}
            </CSSTransitionGroup>
          </ul>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  messages: state.app.messages,
  user: state.app.user
});

const mapDispatchToProps = dispatch => (
  bindActionCreators({
    replace,
    addMessageToQueue,
    removeMessages,
    showMessages
  }, dispatch)
);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home);
