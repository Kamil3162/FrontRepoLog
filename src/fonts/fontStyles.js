import { createGlobalStyle } from 'styled-components';
import REMRegular from '../fonts/REM-VariableFont_wght.ttf';
import REMItalic from '../fonts/REM-Italic-VariableFont_wght.ttf';
import RalewayRegular from '../fonts/Raleway-VariableFont_wght.ttf';
import RalewayItalic from '../fonts/Raleway-VariableFont_wght.ttf';
import Rubik from '../fonts/Rubik-VariableFont_wght.ttf';
import Rubiktalic from '../fonts/Rubik-Italic-VariableFont_wght.ttf';
import WorkSans from '../fonts/WorkSans-VariableFont_wght.ttf';
import WorkItalic from '../fonts/WorkSans-Italic-VariableFont_wght.ttf';
import Quicksand from '../fonts/WorkSans-Italic-VariableFont_wght.ttf';
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
  
  @font-face {
    font-family: 'Rubik';
    src: url(${Rubik}) format('truetype');
    font-weight: normal;
    font-style: normal;
  }
  
  @font-face {
    font-family: 'Rubik';
    src: url(${Rubiktalic}) format('truetype');
    font-weight: normal;
    font-style: italic;
  }

  @font-face {
    font-family: 'Rubik';
    src: url(${Rubik}) format('truetype');
    font-weight: normal;
    font-style: normal;
  }

  @font-face {
    font-family: 'Work Sans';
    src: url(${WorkSans}) format('truetype');
    font-weight: normal;
    font-style: italic;
  }

  @font-face {
    font-family: 'Work Sans';
    src: url(${WorkItalic}) format('truetype');
    font-weight: normal;
    font-style: normal;
  }

  @font-face {
    font-family: 'Quicksand';
    src: url(${Quicksand}) format('truetype');
    font-weight: normal;
    font-style: normal;
  }

  body {
    margin: 0;
    padding: 0;
    font-family: 'REM', 'Raleway', 'Rubik', 'Work Sans', 'Quicksand', sans-serif;
    /* Add other global styles if needed */
  }
`;

