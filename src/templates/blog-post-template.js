/**
 * Copyright (c) 2017-present, Lean Iterations LLC.
 * All rights reserved.
 *
 * This source code is licensed under the MIT-style license found in the
 * LICENSE file in the root directory of this source tree.
 */
/* eslint-disable no-undef, react/prop-types, react/no-danger */
import React from 'react';
import { TextContextBox, Box } from '../components/Layout';
import colors from '../utils/colors';

const Template = ({ data }) => {
  const { markdownRemark: post } = data;
  return (
    <TextContextBox bg={colors.white}>
      <Box
        width={[1, 1, 1 / 2]}
        m={['3.5rem 0 0 0', '3.5rem 0 0 0', '3.5rem auto 0 auto']}
        px={[3, 3, 0]}
        color={colors.accent}
      >
        <h1>{post.frontmatter.title}</h1>
        <h5>Written by {post.frontmatter.author.id}</h5>
        <div dangerouslySetInnerHTML={{ __html: post.html }} />
      </Box>
    </TextContextBox>
  );
};

export const pageQuery = graphql`
  query BlogPostByPath($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      timeToRead
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        title
        author {
          id
        }
      }
    }
  }
`;

export default Template;
