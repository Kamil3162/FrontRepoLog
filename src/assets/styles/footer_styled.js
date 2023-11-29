import styled from "styled-components";
import {devices} from "./global_responsive_styled";

export const FooterContainer = styled.div`
    background-color: #5b5a5a;
    height: 20vh;
    max-width: calc(100% - 250px) ;
    display: flex;
    margin-top: auto;
    width: auto;
    margin-left: 250px;
  
  @media ${devices.mobileL}{
    
    position: static;
    bottom: 0;
    width: 100%;
    max-width: 100%; // Ensure max-width is not restricting on smaller screens
    margin-left: 0; // Adjust margin for smaller screens

  }
`;

export const FooterContentContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex-grow: 1;
  
  @media ${devices.mobileL}{
    padding-left: 10px;
    margin-left: 100px;
    font-size: 15px;
    
  }
`;

export const FooterInformation = styled.div`
  flex-grow: 1;
  flex-shrink: 1;
  flex-basis: 0; // This will ensure each flex item starts with an equal share of the space
  color: white;
  text-align: center;
  word-wrap: break-word;
  overflow-wrap: break-word;
  white-space: normal;
  padding: 10px;
  box-sizing: border-box;
`;

export const FooterHeading = styled.p`
  color: whitesmoke; 
  font-weight: 800;
  font-size: 20px;
  font-family: 'Work Sans', sans-serif;
  margin: 10px 0; 
  
  @media ${devices.mobileL}{
    font-size: 10px;
    text-align: center;
  }
`;

export const FooterTextInformation = styled.p`
    color: white;
    font-family: 'Work Sans', sans-serif;
    font-weight: 400;
    max-width: 100%; // Set a maximum width
    flex-grow: 0;
    flex-shrink: 1; // Allow it to shrink if necessary
    word-wrap: break-word; // Ensure long words can break and wrap
    overflow-wrap: break-word; // Similar to word-wrap
    white-space: normal; // Allow normal white space behavior
`;

