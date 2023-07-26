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
  font-family: 'REM', sans-serif;
  
`;

export const LeftPanelLogo = styled.div`
  font-family: 'Raleway';
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
  padding: 5px;

  &:hover {
    transition: background-color 0.3s ease, transition-delay 0.2s;
    background-color: #828484;
    border-radius: 15px;
    color: white;
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