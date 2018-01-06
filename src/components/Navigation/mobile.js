/**
 * Copyright (c) 2017-present, Lean Iterations LLC.
 * All rights reserved.
 *
 * This source code is licensed under the MIT-style license found in the
 * LICENSE file in the root directory of this source tree.
 */
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';

class MobileNav extends Component {
  constructor(props) {
    super(props);
    this.mobileContainer = document.createElement('div');
    document.body.appendChild(this.mobileContainer);
  }

  componentWillUnmount() {
    document.body.removeChild(this.mobileContainer);
  }

  render() {
    return ReactDOM.createPortal(
      <nav className={this.props.mobileStyle}>
        <div
          onClick={this.props.toggleNav}
          onKeyPress={this.props.toggleNav}
          role="button"
          tabIndex="0"
        >
          <i className="fas fa-times-circle fa-lg" />
        </div>
        {this.props.children}
      </nav>,
      this.mobileContainer
    );
  }
}

MobileNav.propTypes = {
  mobileStyle: PropTypes.string.isRequired,
  toggleNav: PropTypes.func.isRequired,
  children: PropTypes.element.isRequired
};

export default MobileNav;
