import styled from "styled-components";
import GlobalStyle from "../fonts/fontStyles";

export const PageContainer = styled.div`
  display: flex;
  flex-direction: row;
  min-height: 950px;
`;

export const ContentContainer = styled.div`
  flex: 1;
  flex-grow: 100;
  flex-shrink: 0;
  flex-basis: auto;
  background-color: rgb(255, 255, 255);
`;

export const LeftPanel = styled.div`
  flex-direction: column;
  flex: 1;
  flex-grow: 1;
  flex-basis: auto;
  background-color: rgb(101, 196, 62);
  font-family: 'REM', sans-serif;
  justify-items: center;
`;

export const LeftPanelLogo = styled.div`
  font-family: 'Raleway', sans-serif;
  font-weight: 600 ;
  font-size: 32px;
  color: #070707;
  text-align: center;
  padding: 20px;
  margin-bottom: 100px;
`;

export const LeftPanelItem = styled.div`
  display: flex;
  align-items: center;
  justify-items: center;
  margin-bottom: 20px;
  padding: 8px;
  text-decoration: none;
  width: calc(100% - 50px); /* Set width minus the margin */
  margin-left: 50px;

  &:hover {
    transition: background-color 0.3s ease, transition-delay 0.2s;
    border-radius: 15px;
    background-color: white;
    width: 100%;
  }
`;
export const PanelItemText = styled.div`
    margin-left: 15px;
    font-size: 20px;
`
export const LogoPanelItem = styled.img`
    width: 30px;
   height: 30px;
  color: darkblue;
`;
