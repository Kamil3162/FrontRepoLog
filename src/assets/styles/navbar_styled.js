import styled from "styled-components";

export const NavbarLoginContainer = styled.div`
    display: flex;
    margin-left: 35%;
`;

export const NavbarLinksContainer = styled.div`
  display: flex;    
`;
export const NavbarContainer = styled.div`
  position: fixed;
  display: flex;
  align-items: center;
  background-color: #5b5a5a;
  justify-content: right;
  height: 60px;
  width: calc(100% - 250px);
  z-index: 1;
  margin-left: 250px;
  
  // opacity - przejrzystosc
  // rgba 
  // 
`;

export const NavItem = styled.a`
  color: white;
  text-decoration: none;
  margin: 0 10px;
  background-color: #008029;
  padding: 10px;
  min-width: 100px;
  max-width: 150px;
  text-align: center;
  border-radius: 10px;
  font-family: Rubik;

  &:hover {
    background-color: #3e0080;
    color: white;
    transition: background-color 100ms linear;

  }
`;

export const Logo = styled.img`
  width: 100px;
  height: 50px;
`;