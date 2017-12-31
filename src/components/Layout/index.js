import styled from 'react-emotion';
import {
  space,
  width,
  fontSize,
  color,
  textAlign,
  justifyContent,
  flexWrap,
  alignItems,
  flexDirection
} from 'styled-system';
import media from '../../utils/media';

export const Box = styled.div`
  overflow: hidden;
  ${space} ${width} ${fontSize} ${color} ${textAlign};
`;

export const Flex = styled.div`
  display: flex;
  ${flexDirection} ${justifyContent} ${flexWrap} ${alignItems};
`;

export const TextContextBox = styled.div`
  overflow: hidden;
  min-height: 30rem;

  ${media.large`
    min-height: 40rem;
  `};
  ${space} ${width} ${fontSize} ${color} ${textAlign};
`;
