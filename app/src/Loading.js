import React, { Component } from 'react';
import CSSTransitionGroup from 'react-addons-css-transition-group';
import { connect } from 'react-redux';

import { SIMPLE_TRANSITION } from './constants';

class Loading extends Component {
  renderLoading() {
    if (!this.props.show) {
      return null;
    }

    return (
      <div className="loading">
        <span className="loading__text">
          Loading...
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
        {this.renderLoading()}
      </CSSTransitionGroup>
    );
  }
}

const mapStateToProps = state => ({
  show: state.app.loading
});

export default connect(mapStateToProps)(Loading);
