
import styled from "styled-components";
import {devices} from "./global_responsive_styled";

export const SettingsContainer = styled.div`
  display: flex;
  flex-direction: column;
  max-height: 950px;
  margin-left: 50px;
  border-radius: 15px;
  
  @media ${devices.mobileL}{
    margin-left: 10px;
  }
`;

export const SettingTitle = styled.a`
    font-family: 'Raleway', sans-serif;
  font-size: 25px;
  font-weight: 600;
`;

export const SettingElementsContainer = styled.div`
  display: flex;  
    height: 100%;
    border-radius: 15px;
  flex-direction: row;
  
  @media ${devices.mobileL}{
    display: flex;
    flex-direction: column;
  }
`;

export const SettingsLeftPanel = styled.div`
  display: flex;
    flex-grow: 1;
  flex-direction: column;
  text-align: center;
  padding: 10px;
`;
export const SettingDetails = styled.div`
  flex-grow: 7;
  border-radius: 15px;
  //border-left: 1px solid rgba(130, 132, 132, 0.27);
`;
export const SettingLeftPanelItem = styled.div`
  font-weight: 600;
  border-radius: 10px;
  font-size: 20px;
  padding: 5px;
  color: rgba(7, 6, 6, 0.46);
  margin-top: 10px;
  font-family: "Raleway", sans-serif;

  &:hover {
    border-radius: 0px;
    border-bottom: 1px solid rgba(64, 169, 57, 0.66);

  }
`;
export const DeleteAccountText = styled.span`
  color: red;
  font-family: 'Nunito', sans-serif;
  font-weight: 600;
  font-size: 20px;
  padding: 5px;

  &:hover {
    border-bottom: 1px solid #a93939;

  }
`;
export const SettingDetailContainer = styled.div`
    padding: 20px;
  //border: 1px solid rgba(0, 0, 0, 0.25);
  border-radius: 15px;
  width: 300px;
  
`;

export const SettingsNavTitle = styled.a`
    color:black;
  font-family: 'Nunito', sans-serif;
  font-weight:  600;
  font-size: 20px;
  
`;

export const PhotoPositionContainer = styled.div`
`;

export const PersonalDataContainer = styled.div`
    display: flex;
  flex-direction: column;
margin-bottom: 5px;
`;
export const PersonalDataFields = styled.div`
    display: flex;
  align-items: center;
`;

export const AddressContainer = styled.div`
  display: flex;
  align-items: center;
`;


export const InputField = styled.input`
  border-radius: 5px;
  font-family: 'Varela Round', sans-serif;
  border: 1px solid #676666;
  font-weight: 600;
  margin-left: 5px;
  margin-right: 5px;
  margin-bottom: 5px;
  width: 150px;
  padding: 10px;


  &:focus {
    //background-color: rgb(101, 196, 62);
    border-color: rgb(101, 196, 62); /* Set border style and color */
    transition: border-color 0.3s ease;

  }
`;

export const LabelFields = styled.a`
    font-family: 'Jost', sans-serif;  
    font-weight: 800;
  margin-right: 10px;
  width: 150px;
  text-align: center;
`;

export const UpdateButton = styled.button`
  margin-top: 10px;
  width: 370px;
  padding: 10px;
  border-radius: 15px;
  border: none;
  color: black;
  font-family: 'Work Sans', sans-serif;
  font-weight: 600;
  background-color: rgb(101, 196, 62);

  &:hover {
    background-color: rgb(62, 196, 104);
    transition: background-color 0.3s ease;
    color: white;
  }

`;