import styled from "styled-components";

export const MapInfoContainer = styled.div`
  display: flex;
    position: fixed;
  color: white;
  z-index: 1;
  justify-items: center;
  margin-top: 50px;
  background-color: white;  
  border-radius: 10px;
  width: 500px;
  height: 150px;
  padding: 5px;
  flex-direction: column;
`;

export const MapInputField = styled.input`
  width: 140px;
  border-radius: 10px;
  height: 30px;
  padding: 5px;
  border: 1px solid black;
  color: black;
  text-align: center;
  font-family: 'Niramit', sans-serif;
  font-weight: 800;
  margin-right: 10px;
`;

export const HeaderInfoContainer = styled.div`
    display: flex;
    flex-direction: row;
    
`;
export const InfoHeader = styled.p`
    color: black;
    width: 160px;
  text-align: center;
`;

export const MapContainer = styled.div`
    display: flex;
    justify-content: center;
`;