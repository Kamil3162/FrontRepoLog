import styled from "styled-components";
import GlobalStyle from "../fonts/fontStyles";

export const ReceivmentContainer = styled.div`
    padding: 10px;
    display: flex;
    flex-direction: column;
    max-width: 1200px;
`;

export const SemiTrailerList = styled.div`
    position: relative;
    display: inline-block;
    background-color: greenyellow;

    &:hover {
        display: block;
        background-color: black;
    }
`;

export const ListElement = styled.a`
    color: black;
    display: none;
    position: absolute;
    top: 100%;
    left: 0;
    margin: 0;
    padding: 8px 16px;
    background-color: #f0f0f0;
    border: 1px solid #ccc;
    border-radius: 4px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

export const ListElements = styled.div`
  display: none;

  ${ListElement} {
    display: block;
  }
`;


export const DropdownContent = styled.div`
  display: none;
  text-align: center;
  position: absolute;
  background-color: #e7e1e1;
  width: 300px;
  border-radius: 10px;
  box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
  z-index: 1;
  top: 100%; // Ensure it appears below the button
  left: 0; // Align to the left of the button
  margin-left: 150px; // Reset the margin
`;

export const DropdownButton = styled.button`
  background-color: rgb(101, 196, 62);
  position: relative;
  color: #050505;
  padding: 10px;
  border: none;
  padding: 10px;
  width: 150px;
  border-radius: 15px;
  font-size: 15px;

  &:hover {
    transition: background-color 0.3s ease, transition-delay 0.2s;
    background-color: rgb(101, 196, 62);
    border-radius: 15px;
    color: white;
  }
`;

export const Dropdown = styled.div`
    position: relative;
    display: inline-block;
    text-align: left;
  
    &:hover ${DropdownContent} {
    display: block;
    }
`;

export const DropdownConElement = styled.a`
    color: black;
    padding: 12px 16px;
    text-decoration: none;
    display: block;
    font-family: 'Raleway', sans-serif;
    font-size: 15px;
    margin-bottom: 2px;

  &:hover {
    //background-color: #460080;
    background-color: #008033;
    border-radius: 10px;
    color: white;
  }
`;

export const ReceivmentInfoContainer = styled.div`
    display: flex;
    flex-direction: column;
    width: 70%;
    margin-top: 60px;
    margin-left: 50px;
  margin-bottom: 50px;
`;
export const ReceivmentTitle = styled.div`
  font-size: 40px;
  font-weight: 600;
  color: #070707;
  font-family: 'Raleway', sans-serif;

`;

export const ReceivmentStory = styled.a`
  padding: 10px;
  color: black;
  font-weight: 600;
  background-color:rgb(101, 196, 62);
  border-radius: 10px;
  font-family: 'Work Sans', sans-serif;
`;

export const ChoiceContainer = styled.div`
    margin-left: 50px;
  display: flex;
  flex-direction: row;
  width: 100%;
  
`;

export const TruckChoice = styled.div`
  flex: 1; /* Equal distribution of available space */
  flex-basis: 50%; /* Initial width of 50% */
  text-align: center;
  margin-right: 10px;
  
`;
export const SemiTrailerChoice = styled.div`
  flex: 1; /* Equal distribution of available space */
  flex-basis: 50%; /* Initial width of 50% */
  text-align: center;
`;

export const TruckViewContainer = styled.div`
  display: flex;
  max-height: 300px;
  background-color: rgb(255, 255, 255);
  margin-bottom: 5px;
  border-radius: 10px;
  justify-items: center;
  //-webkit-box-shadow: 4px 2px 28px 6px rgb(5, 5, 5);
  //-moz-box-shadow: 4px 2px 28px 6px rgb(5, 5, 5);
  //box-shadow: 4px 2px 28px 6px rgb(5, 5, 5);
`;

export const TruckPhoto = styled.img`
    object-fit: cover;    
    width: 100%;
  border-radius: 100px;
`;
export const TruckImagePick = styled.div`
  flex: 1;
    display: flex;
    flex-direction: column;
  width: 100%;
`;
export const PhotoContainer = styled.div`
    display: flex;
    flex-grow: 2;
    flex-basis: 0; /* Distribute remaining space equally */
    border-radius: 100px;
    padding: 5px;
`;
export const TruckDetail = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  padding: 10px;
  margin-right: 5px;
  
`;
export const TruckInfo = styled.a`
    background-color: white;
  color: black;
  font-family: 'Work Sans', sans-serif;
  font-size: 15px;
  text-align: left;
  padding: 5px;
  font-weight: 600;
  border-radius: 10px;
  width: 100%;
  margin-bottom: 10px;
`;
export const SemiTrailerViewContainer = styled.div`
  height: 150px;
    
`;
export const ButtonPick = styled.button`
  align-items: center; /* This will center the button vertically */
  background-color: #540a1d;
  font-family: 'Work Sans', sans-serif;
  padding: 5px;
  font-size: 15px;
  border-radius: 10px;
  border: none;
  color: white;
  font-weight: 600;
  width: 100px;
  margin-left: 80px;
  &:hover {
    background-color: green;
    transition: background-color 0.3s;
    color: white;
  }
`;