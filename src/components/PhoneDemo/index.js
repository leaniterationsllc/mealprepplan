/**
 * Copyright (c) 2017-present, Lean Iterations LLC.
 * All rights reserved.
 *
 * This source code is licensed under the MIT-style license found in the
 * LICENSE file in the root directory of this source tree.
 */
import React from 'react';
import PropTypes from 'prop-types';
import { css } from 'react-emotion';
import Img from 'gatsby-image';
import { Box } from '../Layout';
import phone from '../../assets/images/phoneBlack.svg';
// import media from '../../utils/media';

const phoneCover = css`
  height: 100%;
  width: 100%;
  position: relative;
  display: inline-block;
  background-repeat: no-repeat;
  background-size: 100% auto;
  background-position: center center;
  background-image: url(${phone});
  overflow: hidden;
  opacity: 0.9;
  z-index: 100;
`;

const screen = css`
  top: 74px;
  z-index: 1000;
`;

const PhoneDemo = ({ demoResolutions }) => (
  <Box className={phoneCover}>
    <Img
      title="Demo Screenshot"
      alt="Example screenshot of the meal prep planner and diary."
      outerWrapperClassName={screen}
      resolutions={demoResolutions}
    />
  </Box>
);

PhoneDemo.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  demoResolutions: PropTypes.object.isRequired
};

PhoneDemo.defaultProps = {};

export default PhoneDemo;
