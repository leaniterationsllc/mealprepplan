/* eslint-disable no-undef, react/prop-types */
import React from 'react';
import { TextContextBox, Box, Flex } from '../components/Layout';
import colors from '../utils/colors';
import StoreLinks from '../components/StoreLinks';

export default ({ data }) => {
  const myData = data.allContentJson.edges[0].node.index;
  return (
    <div>
      <TextContextBox bg={colors.white}>
        <Box
          width={[1, 1, 1 / 2]}
          m={['3.5rem 0 0 0', '3.5rem 0 0 0', '3.5rem auto 0 auto']}
          px={[3, 3, 0]}
          color={colors.primary}
          align="center"
        >
          <h1>{myData.title}</h1>
          <h3>{myData.subtitle}</h3>
          <Flex justify="center" wrap={['wrap', 'wrap', 'nowrap']}>
            <StoreLinks />
          </Flex>
        </Box>
      </TextContextBox>
    </div>
  );
};

export const pageQuery = graphql`
  query contentQuery {
    allContentJson {
      edges {
        node {
          index {
            title
            subtitle
          }
        }
      }
    }
  }
`;
