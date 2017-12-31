/* eslint-disable no-undef, react/prop-types */
import React from 'react';
import { Box, TextContextBox } from '../components/Layout';
import colors from '../utils/colors';

const Privacy = () => (
  <Box bg={colors.white}>
    <TextContextBox
      width={[1, 1, 1 / 2]}
      m={['3.5rem 0 0 0', '3.5rem 0 0 0', '3.5rem auto 0 auto']}
      px={[3, 3, 0]}
      color={colors.accent}
    >
      <h1>Store</h1>
      <p>Coming soon!</p>
    </TextContextBox>
  </Box>
);

export default Privacy;
