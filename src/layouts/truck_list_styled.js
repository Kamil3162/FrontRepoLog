
import styled from "styled-components";


export const TruckListContainer = styled.div`
    display: flex;
    flex-direction: column;
    margin-left: 50px;
    margin-top: 100px;
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
`;


export const RowListContainer = styled.div`
  display: flex;
  width: 80%;
  height: 80px;
  border-left: 1px solid rgba(0, 0, 0, 0.3);
  border-bottom: 1px solid rgba(0, 0, 0, 0.3);
  border-right: 1px solid rgba(0, 0, 0, 0.3);

  &:hover {
    background-color: rgba(16, 15, 15, 0.62);

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
  background-color: rgba(7, 6, 6, 0.16);
  padding: 5px;
  width: 100px;
  border-radius: 10px;
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
  width: 80%;
  border: 1px solid rgba(0, 0, 0, 0.3);
  height: 50px;

`;

export const HeaderName = styled.div`
    flex: 1;
  border-right:1px solid rgba(0, 0, 0, 0.3);
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