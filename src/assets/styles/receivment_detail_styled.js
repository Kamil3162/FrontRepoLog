import styled from "styled-components";
import {devices} from "./global_responsive_styled";

export const DetailRowReceivment = styled.div`
    display: flex;
    flex-direction: row;
    height: 600px;
    box-sizing: border-box;
    margin-bottom: 50px;
  
  & > *:not(:last-child) {
    margin-right: 20px;  // Adjust this value as needed
  }
`;

export const DetailReceivmentContainer = styled.div`
    display: flex;
    flex-direction: column;
    padding: 30px;
  
  @media ${devices.mobileL}{
    padding: 0;
  }
`;

export const ActiveReceivmentContainer = styled.div`
  
    @media ${devices.mobileL}{
      width: calc(100% - 26%);    
    }
`;

