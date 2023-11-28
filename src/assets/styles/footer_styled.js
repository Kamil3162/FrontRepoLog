import styled from "styled-components";
import {devices} from "./global_responsive_styled";

export const FooterContainer = styled.div`
    background-color: #5b5a5a;
    height: 20vh;
    display: flex;
    margin-top: auto;
    
  @media ${devices.mobileL}{
    position: static;
    bottom: 0;
  }
`;
export const FooterContentContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex-grow: 1;
  margin-left: 250px;
  
  @media ${devices.mobileL}{
    padding-left: 10px;
  }
`;

export const FooterInformation = styled.div`
    display: flex;
    flex: 1;
    color: white;
    justify-content: center;
`;

export const FooterHeading = styled.p`
  color: whitesmoke; 
  font-weight: 800;
  font-size: 20px;
  font-family: 'Work Sans', sans-serif;
  margin: 10px 0; 
`;