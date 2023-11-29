import styled,{keyframes} from "styled-components";
import GlobalStyle from "../../fonts/fontStyles";
import {devices} from "./global_responsive_styled";

export const PageContainer = styled.div`
  display: flex;
  flex-direction: row;
  min-height: 100vh;
  max-width: 1920px;
  margin: 0;
  padding: 0;
  
  
  @media ${devices.mobileL}{
    height: 400px;
  }
`;

export const ContentContainer = styled.div`
  display: flex;
  flex: 1;
  flex-shrink: 0;
  //background-color: rgb(7, 7, 7);
  margin-left: 250px;
  margin-top: 50px;
  
  @media ${devices.mobileL}{
    margin-left: 26%;
    display: block;
  }
`;

export const LeftPanel = styled.div`
  display: flex;
  position: fixed;
  flex-direction: column;
  flex: 1;
  flex-basis: auto;
  background-color: rgb(62, 196, 104);
  font-family: 'REM', sans-serif;
  justify-items: center;
  height: 100%;
  padding-top: 15px;
  
  @media ${devices.mobileL}{
    width: 100px;
    position: fixed;
  }
`;

export const MenuItems = styled.div`
    display: ${props => props.isVisible ? 'block' : 'none'};
    width: ${props => props.isVisible ? '0px' : '250px'};
    width: 250px;
    
    //flex-direction: row;
  
    @media ${devices.mobileL}{
      //display: flex;
    }
`;

export const LeftPanelLogo = styled.div`
  font-family: 'Raleway', sans-serif;
  font-weight: 600 ;
  font-size: 32px;
  color: #070707;
  text-align: center;
  padding: 20px;
  margin-bottom: 50px;
`;


export const backIn = keyframes`
    50% {
        transform: scale(0.8);
    }
    100%{
        transform: scale(0.5);
    }
`;


export const LeftPanelItem = styled.div`
  display: flex;
  align-items: center;
  text-align: center;
  justify-items: center;
  margin-bottom: 20px;
  padding: 8px;
  text-decoration: none;
  width: calc(100% - 50px); /* Set width minus the margin */
  margin-left: 25px;
  color: #070707;
  font-family: "Raleway",sans-serif;
  font-weight: 800;
  
  
  &:hover {
    transition: background-color 0.3s ease, transition-delay 0.2s;
    border-radius: 15px;
    background-color: white;
    width: 80%;
  }
  
  @media ${devices.mobileL}{
    &:hover {
      transition: none;
      border-radius: 15px;
      background-color: white;
      width: 20%;
    }
  }
  
`;
export const PanelItemText = styled.div`
    margin-left: 15px;
    font-size: 20px;
  
  @media ${devices.mobileL}{
    display: none;
  }
`
export const LogoPanelItem = styled.img`
    width: 30px;
   height: 30px;
  color: darkblue;
`;
