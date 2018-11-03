import styled, { css } from "styled-components";

const sizes = {
  desktop: 992,
  tablet: 768,
  mobile: 576,
}

// Iterate through the sizes and create a media template
export const media = Object.keys(sizes).reduce((acc, label) => {
  acc[label] = (...args) => css`
    @media (max-width: ${sizes[label] / 16}em) {
      ${css(...args)}
    }
  `
  return acc
}, {})

export const BarSection = styled.div`
  box-sizing: border-box;
  font-size: 1rem;
  margin-bottom: 1rem;
  ${media.mobile`
    background-color: white;
    padding: .75rem 2rem;
    font-size: 3rem;
    border: 1px solid DarkGray;
  `}
`;

export const MainSection = styled(BarSection)`
  background-color: white;
  border: 1px solid DimGray;
  ${media.mobile`
    background-color: LightGray;
    font-size: 1.25rem;
  `}
`;

export const SectionContainer = styled.div`
  box-sizing: border-box;
  background-color: DimGray;
  color: white;
  padding: 1rem 4rem;
  border: 1px solid DarkGray;
  ${media.mobile`
    padding: 1.5rem 1.5rem;
    font-size: 1.75rem;
  `}
`;