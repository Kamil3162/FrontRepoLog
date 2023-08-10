
import styled from "styled-components";

export const SettingsContainer = styled.div`
  display: flex;
  flex-direction: column;
  
  max-height: 950px;
  padding: 20px;
  margin-left: 50px;
  margin-top: 100px;
  border-radius: 15px;
  background-color: rgba(125, 128, 128, 0.42);
`;

export const SettingTitle = styled.a`
    font-family: 'Raleway', sans-serif;
  font-size: 25px;
  font-weight: 600;
`;

export const SettingElementsContainer = styled.div`
  display: flex;  
    background-color: white;
    height: 100%;
    border-radius: 15px;
  flex-direction: row;
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
  padding: 20px;
  border-radius: 15px;
  border-left: 1px solid rgba(130, 132, 132, 0.27);
`;
export const SettingLeftPanelItem = styled.div`
  font-family: 'Nunito', sans-serif;
  font-weight: 600;
  border-radius: 10px;
  font-size: 20px;
  padding: 5px;
  color: rgba(7, 6, 6, 0.46);
  margin-top: 10px;
  &:hover {
    border-radius: 0px;
    border-bottom: 1px solid #a93939;

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
    padding: 10px;
  border: 1px solid rgba(0, 0, 0, 0.25);
  border-radius: 15px;
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
    
`;


export const InputField = styled.input`
  border-radius: 10px;
  padding: 8px;
  font-family: 'Varela Round', sans-serif;
  border: 1px solid rgba(0, 0, 0, 0.25);
  margin-left: 5px;
  margin-right: 5px;
  margin-bottom: 5px;
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