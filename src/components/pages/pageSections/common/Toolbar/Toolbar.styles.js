import styled from "styled-components";
import { BarSection, media , SectionContainer as SharedSectionContainer} from "../pageSection.styles";

export const Toolbar = styled(BarSection)`

  ${media.mobile`
    position: fixed;
    bottom: 0;
    margin: 0;
    width: 100%;
  `}
`;

export const SelectLabel = styled.span`
  //font-size: 1rem;
  margin-right: 5px;
`;

export const Filter = styled.span`
  margin-right: .5rem;
  font-size: .75rem;
  display: flex;
  flex-wrap: nowrap;
`;

export const SectionContainer = styled(SharedSectionContainer)`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
`;