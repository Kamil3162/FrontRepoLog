import { createGlobalStyle } from 'styled-components';
import REMRegular from '../fonts/REM-VariableFont_wght.ttf';
import REMItalic from '../fonts/REM-Italic-VariableFont_wght.ttf';
import RalewayRegular from '../fonts/Raleway-VariableFont_wght.ttf';
import RalewayItalic from '../fonts/Raleway-VariableFont_wght.ttf';

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
  @font-face {
    font-family: 'Raleway';
    src: url(${RalewayRegular}) format('truetype');
    font-weight: normal;
    font-style: normal;
  }

  @font-face {
    font-family: 'Raleway';
    src: url(${RalewayItalic}) format('truetype');
    font-weight: normal;
    font-style: italic;
  }
  body {
    margin: 0;
    padding: 0;
    /* Add other global styles if needed */
  }
`;

