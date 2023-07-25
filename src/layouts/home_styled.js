import styled from "styled-components";
import GlobalStyle from "../fonts/fontStyles";

export const PageContainer = styled.div`
  display: flex;
  flex-direction: row;
  height: 1200px;
`;

export const ContentContainer = styled.div`
  flex: 1;
  flex-grow: 6;
  flex-shrink: 0;
  flex-basis: auto;
  background-color: aliceblue;
`;

export const LeftPanel = styled.div`
  flex: 1;
  flex-grow: 2;
  flex-basis: auto;
  background-color: #ffffff;
`;

export const LeftPanelLogo = styled.div`
  font-family: 'REM'; /* Use the custom font for LeftPanelLogo */
  font-size: 24px;
  color: #fff;
  text-align: center;
  padding: 20px;
`;

export const LeftPanelItem = styled.div`
    
`;