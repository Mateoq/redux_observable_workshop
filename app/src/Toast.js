import React, { Component } from 'react';
import CSSTransitionGroup from 'react-addons-css-transition-group';
import { connect } from 'react-redux';

import { SIMPLE_TRANSITION } from './constants';

class Toast extends Component {
  renderToast() {
    if (!this.props.show) {
      return null;
    }

    return (
      <div className="toast">
        <span className="toast__message">
          {this.props.message}
        </span>
      </div>
    );
  }

  render() {
    return (
      <CSSTransitionGroup
        transitionName={SIMPLE_TRANSITION}
        transitionEnterTimeout={300}
        transitionLeaveTimeout={300}
      >
        {this.renderToast()}
      </CSSTransitionGroup>
    );
  }
}

const mapStateToProps = state => ({
  ...state.app.toast
});

export default connect(mapStateToProps)(Toast);
