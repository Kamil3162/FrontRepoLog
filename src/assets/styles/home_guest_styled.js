import styled from "styled-components";
import GlobalStyle from "../../fonts/fontStyles";

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
  margin-bottom: 30px;
    
`;

export const InformPostContentContainer = styled.div`
    justify-content: space-between;
    //max-width: 1200px;
`;

export const InfoTestService = styled.div`
  //width: 300px;
  //max-width: 300px;
  display: flex;
  flex-direction: column;
  background-color: #2b0080;
  flex: 1;
  text-align: center;
  height: 30vh;
  margin-right: 5px;
  border-radius: 10px;
  padding: 10px;
  justify-items: center;
  align-items: center;
`;

export const InfoTestServiceTitle = styled.p`
    font-size: 25px;
    font-weight: 600;
  font-family: 'Raleway', sans-serif;
  background-color: white;
  border-radius: 15px;
  color: black;
  width: 300px;
  padding: 10px;
`;

export const InfoTestServiceMain = styled.p`
  color: white;
  font-size: 15px;
  font-weight: 600;
  font-family: 'Work Sans', sans-serif;
  border-radius: 15px;
  width: 300px;
  padding: 10px;
`;

export const InfoTestServiceContent = styled.p`
`;


export const TextPostContainer = styled.div`
    display: flex;
    flex-direction: column;
    flex-grow: 2;
`;

export const CreateButtonPostContainer = styled.div`
    display: flex;
    align-items: center;
    flex-grow: 1;
`;
export const InformPostPhoto = styled.img`
  object-fit: contain;
  max-width: 800px;
  max-height: 500px;
  border-radius: 10px;
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

export const MainTextTitleFontChange = styled(MainTextTitle)`
    font-family: 'Niramit', sans-serif;
`;

export const PhotoBigTitle = styled.p`
    
`;
export const PostStory = styled.p`
  color: rgba(91, 88, 88, 0.5);
  width: 50%;
`;
export const PostStoryButtonContainer = styled.div`
    display: flex;
`;