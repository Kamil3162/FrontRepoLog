import styled from "styled-components";

export const UsersContainer = styled.div`
    display: flex;
    width: 100%;
  margin-left: 50px;
  margin-top: 100px;
`;
export const UsersListContainer = styled.div`
  display: flex;
  flex-grow: 1;
  flex-direction: column;
  max-width: 300px;
  border-right: 2px solid black;
  overflow-y: scroll;
  max-height: 700px;
  padding: 10px;

  &::-webkit-scrollbar {
    display: none;
  }

`;
export const UserListElement = styled.div`
  display: flex;
  height: 60px;
  padding: 5px;
  background-color: rgb(168 168 168 / 47%);
  border-radius: 10px;
  margin-bottom: 5px;

  &:hover {
    background-color: rgba(34, 121, 43, 0.47);
    border-radius: 15px;
  }
`;
export const UserPhotoContainer = styled.div`
    display: flex;
    flex-grow: 2;
    align-content: center;
    align-items: center;
`;
export const UserPhoto = styled.img`
    max-width: 50px;
    height: auto;
    object-fit: cover;
`
export const UserNameUsername = styled.div`
    display: flex;
    flex-grow: 4;
    align-items: center;
    align-content: center;
  font-family: 'Niramit', sans-serif;
  font-weight: 800;
  font-size: 17px;
  color: black;
`;
export const UserContainer = styled.div`
    display: flex;
    flex-grow: 4;
`;