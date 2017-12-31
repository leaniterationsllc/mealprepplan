/* eslint-disable no-undef, react/prop-types */
import React from 'react';
import styled from 'react-emotion';
import {
  TextContextBox,
  Box,
  FlexFilled,
  FlexItem
} from '../components/Layout';
import colors from '../utils/colors';
import PhoneDemo from '../components/PhoneDemo';
import StoreLinks from '../components/StoreLinks';

const PhoneBox = styled.div`
  flex: 0 280px;
  height: 585px;
`;

export default ({ data }) => {
  const myData = data.allContentJson.edges[0].node.index;
  const { allImageSharp } = data;
  return (
    <div>
      <TextContextBox bg={colors.white}>
        <Box
          width={[1, 1, 0.75]}
          m={['3.5rem 0 0 0', '3.5rem 0 0 0', '3.5rem auto 0 auto']}
          px={[3, 3, 0]}
          color={colors.primary}
          align="center"
        >
          <h1>{myData.title}</h1>
          <h3>{myData.subtitle}</h3>
          <FlexFilled
            wrap="wrap"
            direction="column"
            align="center"
            justify="center"
          >
            <PhoneBox>
              <PhoneDemo screens={allImageSharp.edges[0].node.resolutions} />
            </PhoneBox>
            <FlexItem flex="0 8em">
              <StoreLinks />
            </FlexItem>
          </FlexFilled>
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
    allImageSharp(filter: { id: { regex: "/demo/" } }) {
      edges {
        node {
          resolutions(width: 244) {
            ...GatsbyImageSharpResolutions
          }
        }
      }
    }
  }
`;
