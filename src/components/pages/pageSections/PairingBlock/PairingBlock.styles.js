import styled from "styled-components";
import { media } from '../common/pageSection.styles'

export const Block = styled.div`
  border: 1px solid DimGray;
  margin-bottom: 1rem;
  background-color: #E6E6E6;
  color: black;
  padding: 1rem 1.5rem;
  font-size: .75rem;
  width: 42%;
  min-height: 100px;
  
  ${media.tablet`
  width: 38%;
`}
  ${media.mobile`
    width: 100%;
    min-height: 0;
  `}
`;

export const Divider = styled.div`
  border: 1px solid DarkGray;
  margin-top: .5rem;
  margin-bottom: .5rem;
`;

export const Name = styled.span`
  display: inline-block;
  font-size: 1rem;
`;