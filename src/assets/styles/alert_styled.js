import styled, {keyframes} from "styled-components";


export const slide = keyframes`
  from {height: 0;}
  to {height: 300px;}
`;

export const AlertContainer = styled.div`
  display: flex;
  height: 250px;
  width: 400px;
  background-color: rgba(187, 186, 186, 0.5);
  border-radius: 20px;
  text-align: center;
  flex-direction: column;
  align-items: center;
  font-weight: 600;
  margin: 20% 0 0 35%;
  animation: ${slide} 1s ease forwards ;
  overflow: hidden;
  
`;



export const AlertTitle = styled.p`
`;

export const AlertInformation = styled.p`
  font-family:"Niramit";
    
`;
export const rotate = keyframes`
  to {
    transform: rotate(1turn);
  }
`;


export const AlertRotationContainer = styled.div`
  display: flex;
  justify-content: center;
  
  &:after {
    content: "";
    border: 10px solid white;
    width: 50px;
    height: 50px;
    border-top-color: green;
    border-radius: 50%;
    animation: ${rotate} 4s linear infinite;
  }
`;


export const AlertButton = styled.button`
  margin-top: 10px;
  font-family: "Nunito";
  font-weight: 600;
  font-size: 15px;
  padding: 10px;
  width: 200px;
  border-radius: 10px;
  border: none;
  background-color: greenyellow;
  text-decoration: none;
  color: black;

  &:hover {
    background-color: #b69f0c;
    transition: box-shadow 0.2s linear, 0.2s linear background-color;
    box-shadow: 10px 5px 5px rgba(0, 0, 0, 0.3);
  }
  
`;