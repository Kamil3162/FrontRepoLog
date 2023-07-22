import styled from "styled-components";

export const NavbarStyle = styled.div`
    background-color: darkblue;
`;


export const NavbarContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: hsl(25, 61%, 100%);
  padding: 10px;
  color: #fff;
  // opacity - przejrzystosc
  // rgba 
  // 
`;

export const NavItem = styled.a`
  color: #fff;
  text-decoration: none;
  margin: 0 10px;

  &:hover {
    text-decoration: underline;
  }
`;

export const Logo = styled.img`
  width: 100px;
  height: 50px;
`;