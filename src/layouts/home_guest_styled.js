import styled from "styled-components";
import GlobalStyle from "../fonts/fontStyles";

export const HomeContainer = styled.div`
    position: absolute;
    display: flex;
    background-color: white;
  flex-direction: column;
  width: 80%;
  height: 80%;
`;

export const HomeNavbar = styled.div`
    display: flex;
  margin-top: 10px;
  flex-direction: row;
`;

export const ContentContainerHome = styled.div`
    display: flex;
    flex-direction: column;
  margin-left: 100px;
  margin-right: 100px;
  margin-top: 50px;
`;

export const InformPostContainer = styled.div`
  display: flex;
  flex-direction: row;
    
`;

export const InformPostContentContainer = styled.div`
    display: flex;
    flex-grow: 2;
  flex-direction: column;
  max-width: 1200px;
    
`;

export const InformPostPhoto = styled.img`
  object-fit: contain;
  max-width: 500px;
  max-height: 500px;
  border-radius: 5px;
`;

export const HomeLoginBtn = styled.button`
  width: auto;
  border-radius: 15px;
  padding: 5px;
  border: 1px solid black;
  font-family: 'Reem Kufi', sans-serif;
  font-size: 14px;
  font-weight: 600;
  margin-left: 10px;
  margin-right: 10px;
  
  
  &:first-of-type {
    background-color: white;
    color: blue;
  }
  
  &:first-of-type:hover {
    background-color: blue;
    color: white;
    transition: background-color 0.3s ease-in;
  }
  
  &:last-of-type{
    background-color: blue;
    color: white;
  }
  
  &:last-of-type:hover{
    background-color: blue;
    color: white;
    transition: background-color 0.3s ease-in;
  }
  
`;

export const HomeCreateBtn = styled.button`
  background-color: #889b7f;
  color: white;
  width: 100px;
  
`;

export const InfoButton = styled.button`
    
`;

export const LogoHome = styled.img`
    
`;

export const TextTitle = styled.p`
  font-size: 15px;
  color: #57ea57;
  font-weight: 600;
  font-family: "Raleway", sans-serif;
  margin-bottom: 5px;
`;

export const MainTextTitle = styled.p`
  font-size: 35px;
  word-break: keep-all;
  color: black;
  font-weight: 600;
  font-family: "Raleway", sans-serif;
  margin-bottom: 5px;
`;

export const PhotoBigTitle = styled.p`
    
`;
export const PostStory = styled.p`
  color: rgba(91, 88, 88, 0.5);
  width: 50%;
`;