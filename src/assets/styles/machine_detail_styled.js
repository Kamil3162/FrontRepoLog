import styled from "styled-components";


export const MachineDetailContainer = styled.div`
    display: flex;
    padding: 20px;
    flex-direction: column;
    max-height: 950px;
`;

export const MachineHeaderName = styled.a`
  font-family: 'Albert Sans', sans-serif;
  font-size: 35px;
  color: white;
`;

export const HeaderContainer = styled.div`
  width: 30%;
  background-color: #070707;
  border-radius: 15px;
  padding: 15px;
`;

export const MachineDetail = styled.div`
    display: flex;
    margin-top: 30px;
    flex-direction: row;
`;

export const MachineInformation = styled.form`
    display: flex;
    flex-grow: 1;
  flex-direction: column;
`;

export const MachineLabel = styled.label`
  font-size: 17px;
  border-radius: 15px;
  padding: 10px;
  width: 200px;
  color: black;
  font-weight: 600;
  margin-right: 15px;
  text-align: center;
`;

export const MachineDetailInformation = styled.input`
  background-color: rgba(141, 139, 139, 0.35);
  width: 350px;
  color: black;
  text-align: center;
  font-size: 15px;
  font-family: 'Varela Round', sans-serif;
  border-radius: 15px;
  border: none;
`;

export const MachineDetailRow = styled.div`
    display: flex;
    margin-bottom: 25px;
    justify-items: center;
`;
export const MachinePhotoContainer = styled.div`
    display: flex;
  flex-grow: 2;
  background-color: black;
`;
// export const MachinePhoto = styled.img`
//     object-fit: contain;
//     max-width: 500px;
//     max-height: 500px;
//     border-radius: 5px;
// `;

export const MachinePhoto = styled.img`
  object-fit: cover; /* this will make sure your image covers the entire container without distorting */
  max-width: 500px;
  max-height: 500px;
  border-radius: 15px;
`;