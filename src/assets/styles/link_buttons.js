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
  }
`;

export const FunctionalButtonLink = styled(ButtonLink)`
  /* Copy the styles from ButtonLink */
  width: 75px;
  height: 35px;
  background-color: ${props => props.color || 'purple'}; /* Use the color prop or default to purple */

  &:hover {
    /* You can override hover styles here if needed */
    background-color: ${props => props.hoverColor || 'orange'}; /* Use the hoverColor prop or default to orange */

  }
`;
