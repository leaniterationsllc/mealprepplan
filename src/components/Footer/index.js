/**
 * Copyright (c) 2017-present, Lean Iterations LLC.
 * All rights reserved.
 *
 * This source code is licensed under the MIT-style license found in the
 * LICENSE file in the root directory of this source tree.
 */
import React, { Component } from 'react';
import styled, { css } from 'react-emotion';
import Link from 'gatsby-link';
import PropTypes from 'prop-types';
import colors from '../../utils/colors';
import { Box, Flex } from '../Layout';
import feather from '../../utils/feather';
import media from '../../utils/media';

const footerStyle = css`
  overflow: hidden;
  background-color: ${colors.gray};
  color: ${colors.accent};
  text-align: center;

  & img {
    display: block;
    margin: 0;
  }
  & p {
    color: ${colors.accent};
  }
`;

const ulStyle = css`
  list-style-type: none;
  margin: 0;
  margin-bottom: 1.45rem;
  padding: 0;
  & a {
    cursor: pointer;
    opacity: 0.5;
    transition: opacity 0.15s ease-in;
    transition: color 0.15s ease-in;

    &:hover {
      text-decoration: none;
      box-shadow: none;
      opacity: 1;
      transition: opacity 0.15s ease-in;
    }
  }
  & li {
    margin: 0;
  }
`;

const Wrapper = styled.div`
  width: 100%;
  margin: 0;
  & p {
    margin: 0;
    margin-bottom: 1.45rem;
  }
`;

const socialList = css`
  display: flex;
  justify-content: space-between;
  list-style-type: none;
  margin: 0;
  padding: 0;

  ${media.large`
    width: 50%;
    margin-left: auto;
  `};
`;

const svgStyles = css`
  opacity: 0.5;
  transition: opacity 0.15s ease-in;
  transition: color 0.15s ease-in;

  &:hover {
    text-decoration: none;
    box-shadow: none;
    opacity: 1;
    transition: opacity 0.15s ease-in;
  }
`;

const Copy = styled.p`
  font-size: 0.8rem;
`;

class Footer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      date: new Date()
    };
  }

  render() {
    const { date } = this.state;
    const { name, copy, facebook, instagram, email } = this.props;
    return (
      <div className={footerStyle}>
        <Box p={[3, 3, 4]} align="left" color={colors.accent}>
          <Flex wrap={['wrap', 'wrap', 'nowrap']} justify="space-between">
            <Box width={[1, 1, 1 / 3]}>
              <Wrapper>
                <div>
                  <p>{name}</p>
                </div>
              </Wrapper>
            </Box>
            <Box width={[1, 1, 1 / 3]}>
              <Wrapper>
                <ul className={ulStyle}>
                  <li>
                    <Link to="/">Home</Link>
                  </li>
                  <li>
                    <Link to="/store">Store</Link>
                  </li>
                  <li>
                    <Link to="/blog">Blog</Link>
                  </li>
                  <li>
                    <Link to="/privacy">Privacy Policy</Link>
                  </li>
                </ul>
              </Wrapper>
            </Box>
            <Box width={[1, 1, 1 / 3]}>
              <Wrapper>
                <ul className={socialList}>
                  <li>
                    <a
                      title="Link to our Facebook page"
                      href={facebook}
                      target="_blank"
                      rel="noopener"
                    >
                      {feather('facebook', ['30', '30'], svgStyles)}
                    </a>
                  </li>
                  <li>
                    <a
                      title="Link to out Instragram account"
                      href={instagram}
                      target="_blank"
                      rel="noopener"
                    >
                      {feather('instagram', ['30', '30'], svgStyles)}
                    </a>
                  </li>
                  <li>
                    <a title="Our E-Mail address" href={`mailto:${email}`}>
                      {feather('mail', ['30', '30'], svgStyles)}
                    </a>
                  </li>
                </ul>
              </Wrapper>
            </Box>
          </Flex>
        </Box>
        <Box px={[3, 3, 1]} align="center">
          <Copy>
            {`Copyright © ${date.getFullYear()} ${copy}. All rights reserved.`}
          </Copy>
        </Box>
      </div>
    );
  }
}

Footer.propTypes = {
  name: PropTypes.string,
  copy: PropTypes.string,
  facebook: PropTypes.string,
  instagram: PropTypes.string,
  email: PropTypes.string
};

Footer.defaultProps = {
  name: 'Meal Prep Planner and Diary',
  copy: 'Lean Iterations LLC',
  facebook: 'https://www.facebook.com/groups/550109412047209/',
  instagram: 'https://www.instagram.com/mealprepapp/',
  email: 'support@leaniterationsllc.com'
};

export default Footer;
