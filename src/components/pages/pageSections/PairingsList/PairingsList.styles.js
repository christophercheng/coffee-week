import styled from "styled-components";
import {  MainSection as SharedMainSection, SectionContainer as SharedSectionContainer, media} from '../common/pageSection.styles';


export const MainSection = styled(SharedMainSection)`
  padding: 3rem 4rem 0rem;
  border: none;

  ${media.mobile `
    background: LightGray;
    border: none;
    padding-top: 0rem;
  `}

`;


export const SectionContainer = styled(SharedSectionContainer)`
  background-color: white;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-content: flex-start;
  width: 100%;
  padding: 0;
  border: none;
  margin: 0;
  ${media.mobile `
    padding: 2px;
    padding-bottom: 100px;
    background-color: LightGray;
    border: none;
`}
`;
