import styled from "styled-components";
import {devices} from "./global_responsive_styled";

export const StyledUserChat = styled.div`
    display: flex;
    background-color: greenyellow;
    width: 200px;
    height: 50px;
    justify-content: center;
    align-items: center;
    border: 1px solid black;
    border-radius: 15px;
    margin-bottom: 10px;
    color: black;
    font-family: "Raleway", sans-serif;
    font-weight: 1000;

  &:hover{
    background-color: whitesmoke;
  }
`;

export const ChatDashboardComponent = styled.div`
    display: flex;
    flex-direction: row;
    padding: 20px;
  
    @media ${devices.mobileL}{
      flex-direction: column;
      padding: 5px;
    }
    
`;

export const ActiveUserList = styled.div`

  display: flex;
  flex-direction: column;
  margin-right: 50px;
  background-color: rgb(70, 69, 69);
  padding: 15px;
  color: whitesmoke;
  border-radius: 20px;
  height: auto;
  
  @media ${devices.mobileL}{
    margin-bottom: 5px;
  }
`;

export const ChatMessageContainer = styled.div`
    display: flex;
    flex-direction: column;
    overflow-y: scroll;
    width: 100%;
    
`;

export const Message = styled.div`
    display: flex;
    background-color: blue;
    color: white;
    font-family: 'Reem Kufi', sans-serif;
    font-size: 15px;
    margin-top: 15px;
    max-width: 150px;
    max-height: 75px ;
    border-radius: 15px;
    padding: 10px;
    justify-content: right;
`;

export const ChatWindowComponent = styled.div`
  display: flex;
  flex-direction: column;
  width: 80%;
  height: 400px;
  border-radius: 15px;
  overflow-y: scroll;
  background-color: #6b6a6a;
  padding: 20px;
  margin-bottom: 15px;
`;


