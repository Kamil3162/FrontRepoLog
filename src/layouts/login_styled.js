import styled from "styled-components";
import GlobalStyle from "../fonts/fontStyles";
export const LoginPageContainer = styled.div`
    display: flex;
    flex-direction: row;
    height: 100vh;
`;

export const LoginPart = styled.div`
    display: flex;  
    flex-grow: 1;
    flex-direction: column;
`;

export const LoginEntry = styled.p`
    font-size: 30px;
    margin-top: 100px;
    font-family: 'Rubik', sans-serif;
    margin-left: 20%;
    text-shadow: -26px 4px 9px rgba(66, 68, 90, 1);
  
`;
export const LoginForm = styled.form`
    display: flex;
    flex-direction: column;
    flex-grow: 1;
    margin-left: 20%;
    margin-top: 100px;
    height: 5vh;
`;

export const LoginLabel = styled.label`
  font-family: 'Quicksand',sans-serif;
  font-size: 12px;
  font-weight: 600;
`;

export const LoginInput = styled.input`
  width: 350px;
  border-radius: 5px;
  border: 1px solid #e7e1e1;
  padding: 10px;
  
`;

export const LoginButton = styled.button`
  margin-top: 10px;
  width: 370px;
  padding: 10px;
  border-radius: 15px;
  border: none;
  color: black;
  font-family: 'Work Sans', sans-serif;
  font-weight: 600;
  background-color: rgb(101, 196, 62);

`;



export const HorizontalLine = styled.div`
  margin-top: 100px;
  width: 100%;
  content: "-";
  height: 1px;
  color: #474949;
  text-align: center;
  line-height: 0.1em; /* Adjust the line-height to make the line thinner */
  font-size: 1.5px;
`;

export const LoginLink = styled.div`
    
`;

export const LoginDisplay = styled.div`
    display: flex;
  flex-direction: row;
    flex-grow: 2;
  //background-color: rgb(28 28 26);
  //background-image: linear-gradient(8deg, rgb(136 137 125) 0%, rgb(117 166 223) 47%);
  overflow: hidden;
`;

export const  LoginDisplayPhotoContainer = styled.div`
  position: relative;
  width: 100px; /* Set the desired width of the visible portion */
  height: 100px; /* Set the desired height of the visible portion */
`;
export const LoginDisplayPhoto = styled.img`
  position: absolute;
  width: auto; /* Set the actual width of the image */
  height: auto; /* Set the actual height of the image */
  top: 200px;
  left: 100px;
  object-fit: cover;
  margin: 0; /* Remove default margin */
  border-radius: 15px;
`;