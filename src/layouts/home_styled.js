import styled from "styled-components";
import GlobalStyle from "../fonts/fontStyles";

export const PageContainer = styled.div`
  display: flex;
  flex-direction: row;
  height: 1200px;
`;

export const ContentContainer = styled.div`
  flex: 1;
  flex-grow: 100;
  flex-shrink: 0;
  flex-basis: auto;
  background-color: aliceblue;
`;

export const LeftPanel = styled.div`
  flex: 1;
  flex-grow: 1;
  flex-basis: auto;
  background-color: #ffffff;
  font-family: 'REM', sans-serif;
  
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
  margin-left: 50px;
  margin-bottom: 20px;
  padding: 8px;
  text-decoration: none;

  &:hover {
    transition: background-color 0.3s ease, transition-delay 0.2s;
    background-color: #889b7f;
    border-radius: 15px;
    color: white;
    width: 70%;
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
