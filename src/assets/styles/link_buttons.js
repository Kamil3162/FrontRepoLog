import styled from "styled-components";

export const ButtonLinkContainer = styled.div`
    display: flex;
    flex-grow: 1;
  text-align: center;
`;

export const ButtonLink = styled.button`
  width: 30%;
  border-radius: 10px;
  border: none;
  font-size: 17px;
  padding: 10px;
  font-family: 'Niramit', sans-serif;
  color: white;
  font-weight: 800;
  background-color: blue;
  text-decoration: none;
  text-align: center;


  &:hover {
    background-color: green;
    transition: background-color 100ms linear;
    color: whitesmoke;
    border: none;
  }
`;