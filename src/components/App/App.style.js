import { createGlobalStyle } from 'styled-components'
import reset from 'styled-reset'
import "typeface-roboto";
import { media } from '../pages/pageSections/common/pageSection.styles';

const GlobalStyle = createGlobalStyle`
  ${reset}

  body {
    padding: 0;
    margin: 0;
    font-family: Roboto, sans-serif;
    font-weight: 350;
    background: white;

    ${media.mobile`
      background-color: LightGray;
    `}
  }
`
export default GlobalStyle;
