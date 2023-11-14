import styled from "styled-components";

export const StyledUserChat = styled.div`
  display: flex;
    background-color: greenyellow;
    width: 100px;
    height: 50px;
    justify-content: center;
    align-items: center;
    border: 1px solid black;
  border-radius: 15px;
`;

export const ChatDashboardComponent = styled.div`
    display: flex;
    flex-direction: row;
    padding: 20px;
`;

export const ActiveUserList = styled.div`
    width: 200px;
  display: flex;
  flex-direction: column;
`;

export const ChatMessageContainer = styled.div`
    display: flex;
    flex-direction: column;
    overflow-y: scroll;
    width: 100%;
`;

export const Message = styled.div`
      
`;

export const ChatWindows = styled.div`
    display: flex;
    width: 80%;
    background-color: white;
    height: 400px;
  border: 1px solid black;
  border-radius: 15px;
`;
