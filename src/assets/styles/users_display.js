import styled from "styled-components";

export const UsersContainer = styled.div`
  display: flex;
  margin-left: 50px;
  width: 1600px;
  height: 90%;
  flex-direction: column;
  padding: 20px;
  border-radius: 15px;
`;
export const UsersListContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 300px;
  overflow-y: scroll;
  max-height: 500px;

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
  margin-left: 10px;

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

export const UserSearchContainer = styled.div`
    display: flex;
  position: absolute;
    text-align: center;
    margin-bottom: 10px;
    height: 50px;
    width: 250px;
  margin-top: 18em;
  justify-items: center;
  align-items: center;
  margin-left: 40px;
`;

export const SeachUserField = styled.input`
    height: 25px;
    flex-grow: 1;
  font-size: 15px;
  font-family: 'Work Sans', sans-serif;
  font-weight: 600;

`;

export const MainUsersContentContainer = styled.div`
  display: flex;
`;
