
import styled from "styled-components";


export const TruckListContainer = styled.div`
    display: flex;
    flex-direction: column;
    margin-left: 50px;
    margin-top: 50px;
`;
export const TruckListTitle = styled.a`
    font-size: 35px;
    word-break: keep-all;
    color: black;
    font-weight: 600;
    font-family: "Raleway", sans-serif;
    margin-bottom: 5px;
`;

export const TruckList = styled.div`
    display: flex;
    flex-direction: column;
  border-top: 1px solid rgba(0, 0, 0, 0.3);
  height: 400px;
  
`;


export const RowListContainer = styled.div`
  display: flex;
  width: 90%;
  height: 80px;
  text-decoration: none;
  border-left: 1px solid rgba(0, 0, 0, 0.3);
  border-bottom: 1px solid rgba(0, 0, 0, 0.3);
  border-right: 1px solid rgba(0, 0, 0, 0.3);

  &:hover {
    background-color: rgb(152, 150, 150);
    transition: 0.3s linear background-color;
    border-radius: 15px;

    .style-text {
      color: white;
      background-color: green;
    }
  }

`;

export const RowListElements = styled.div`
  display: flex;
    flex:1;
  text-align: center;
  align-items: center;
  padding: 0 10px;

`;
export const MachineContainer = styled.div`
  display: flex;
  width: 100%;
  flex-direction: row;
  border-radius: 20px;
  padding: 10px;
  background-color: rgb(253, 253, 253);
  margin-bottom: 10px;
`;

export const StyleText = styled.a`
  font-family: 'Work Sans', sans-serif;
  font-weight: 600;
  padding: 5px;
  width: 100px;
  border-radius: 10px;
  font-size: 17px;
  text-decoration: none;
  color: #070606;
`;
export const StyleAvailable = styled.a`
  font-family: 'Work Sans', sans-serif;
  font-weight: 600;
  font-size: 20px;
  background-color: green;
  color: white;
  padding: 5px;
  width: 60px;
  border-radius: 20px;
`;
export const StyleAvailableFalse = styled.a`
  font-family: 'Work Sans', sans-serif;
  font-weight: 600;
  font-size: 20px;
  background-color: red;
  color: white;
  padding: 5px;
  width: 60px;
  border-radius: 20px;
`;
export const MachineInfo = styled.div`
  flex-grow: 1;
`;
export const MachineInfoContainer = styled.div`
    display: flex;
  align-items:  center;
  margin-bottom: 10px;
`;
export const MachineLabel = styled.div`
  font-family: 'Quicksand',sans-serif;
  font-weight: 600;
  font-size: 20px;
  margin-right: 10px;
  color: black;
`;

export const MachineInput = styled.div`
    border-radius: 15px;
    font-family: 'Varela Round', sans-serif;
    border: 1px solid #676666;
    margin-left: 5px;
    margin-right: 5px;
    margin-bottom: 5px;
    width: 250px;
    padding: 10px;
    background-color: white;
`;
export const MachinePhoto = styled.img`
`;

export const HeaderTablesName = styled.div`
  display: flex;
  width: 90%;
  height: 50px;

`;

export const HeaderName = styled.div`
    flex: 1;
    font-family: 'Varela Round', sans-serif;
    font-weight: 600;
    padding: 10px; /* Adding some padding for better readability */
    align-items: center;
    justify-content: center; /* Center horizontally */

`
export const MachinePhotoBtn = styled.div`
    flex-grow: 3;
`;
export const BtnExplore = styled.button`
`;

export const MachinePhotoInput = styled.input`
  position: absolute;
  order: 2;
  display: inline-block;
  float: right;
`;