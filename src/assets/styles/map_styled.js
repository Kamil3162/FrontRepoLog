import styled from "styled-components";

export const MapInfoContainer = styled.div`
  display: flex;
  position: sticky;
  color: white;
  z-index: 1;
  justify-items: center;
  margin-top: 50px;
  background-color: rgba(7, 6, 6, 0.7);
  border-radius: 10px;
  width: 600px;
  height: 120px;
  padding: 5px;
  flex-direction: column;
  margin-bottom: 20px;
`;

export const MapInputField = styled.input`
  width: 100px;
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

export const MapFinalAddressField = styled(MapInputField)`
    width: 300px;
`;

export const HeaderInfoContainer = styled.div`
    display: flex;
    flex-direction: row;
    
`;
export const InfoHeader = styled.p`
    width: 100px;
    text-align: center;
    font-weight: 800;
    font-family: "Raleway",sans-serif;
    color: whitesmoke;
    margin-right: 10px;
    padding: 6px;
`;
export const InfoHeaderFinalAddress = styled(InfoHeader)`
    margin-left: 50px;
`;

export const MapContainer = styled.div`
    display: flex;
    justify-content: center;
    border-radius: 15px;
    flex-grow: 1;
`;