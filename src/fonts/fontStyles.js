import { createGlobalStyle } from 'styled-components';
import REMRegular from '../fonts/REM-VariableFont_wght.ttf';
import REMItalic from '../fonts/REM-Italic-VariableFont_wght.ttf';

export const GlobalStyle = createGlobalStyle`
  @font-face {
    font-family: 'REM';
    src: url(${REMRegular}) format('truetype');
    font-weight: normal;
    font-style: normal;
  }

  @font-face {
    font-family: 'REM';
    src: url(${REMItalic}) format('truetype');
    font-weight: normal;
    font-style: italic;
  }
`;

