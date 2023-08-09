
import styled from "styled-components";

export const SettingsContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 700px;
  padding: 20px;
  margin-left: 50px;
  margin-top: 100px;
  border-radius: 15px;
`;

export const SettingTitle = styled.a`
    font-family: 'Raleway', sans-serif;
  font-size: 45px;
  font-weight: 600;
`;

export const SettingElementsContainer = styled.div`
  display: flex;  
    background-color: white;
    height: 60%;
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
  border-left: 1px solid rgba(0, 0, 0, 0.25);
`;
export const SettingLeftPanelItem = styled.div`
  font-family: 'Cabin', sans-serif;
  font-weight: 600;
  border-radius: 10px;
  padding: 5px;
  color: rgb(7, 6, 6);

  &:hover {
    background-color: rgba(5, 5, 5, 0.63);
    color: rgb(21, 24, 19);
    border-radius: 10px;

  }
`;
export const DeleteAccountText = styled.span`
  color: red;
  font-family: 'Cabin', sans-serif;
  font-weight: 600;
  padding: 5px;

  &:hover {
    background-color: rgba(246, 19, 19, 0.63);
    color: rgb(7, 7, 7);
    border-radius: 10px;

  }
`;
export const SettingDetailContainer = styled.div`
    padding: 10px;
  border: 1px solid rgba(0, 0, 0, 0.25);
  border-radius: 15px;
`;

export const SettingsNavTitle = styled.a`
    color:black;
  font-family: 'Reem Kufi', sans-serif;
  font-weight:  600;
  font-size: 20px;
`;

export const InputField = styled.input`
    
`;

export const LabelFields = styled.a`
    
`;