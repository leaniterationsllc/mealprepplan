import React from 'react';
import PropTypes from 'prop-types';
import { css } from 'react-emotion';
import { FlexFilled, Box } from '../Layout';
import PlayLogo from '../../assets/images/google.svg';
import AppleLogo from '../../assets/images/apple.svg';
import media from '../../utils/media';

const height = 2.75;

const container = css`
  min-height: ${height * 2.5}em;
  ${media.mid`
    min-height: auto;
  `};
`;

const download = css`
  flex: 1 9.25em;
  width: 9.25em;
  height: ${height}em;
  display: inline-block;
  background-repeat: no-repeat;
  background-size: 100% auto;
  background-position: center center;
  text-indent: -1000em;
  overflow: hidden;
  opacity: 0.9;
`;

const googlePlay = css`
  ${download};
  background-image: url(${PlayLogo});
`;

const appStore = css`
  ${download};
  background-image: url(${AppleLogo});
`;

const StoreLinks = ({ appStoreLink, playStoreLink }) => (
  <Box width={[0.8, 0.8, 1]} className={container}>
    <FlexFilled
      flexDirection={['column', 'column', 'row']}
      justify={['space-around', 'space-around', 'flex-start']}
      align="center"
    >
      <Box>
        <a
          className={appStore}
          href={appStoreLink}
          title="Download on the App Store"
          target="_blank"
          rel="noopener"
        >
          Download on the App Store
        </a>
      </Box>
      <Box>
        <a
          className={googlePlay}
          href={playStoreLink}
          title="Get it on Google Play"
          target="_blank"
          rel="noopener"
        >
          Get it on Google Play
        </a>
      </Box>
    </FlexFilled>
  </Box>
);

StoreLinks.propTypes = {
  appStoreLink: PropTypes.string,
  playStoreLink: PropTypes.string
};

StoreLinks.defaultProps = {
  appStoreLink:
    'https://itunes.apple.com/app/apple-store/id1267860599?pt=118881210&ct=mealprepplan&mt=8',
  playStoreLink:
    'https://play.google.com/store/apps/details?id=com.mealplanpro&referrer=tracking_id=mealprepplan'
};

export default StoreLinks;
