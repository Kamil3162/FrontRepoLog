import styled from "styled-components";

export const PaginationContainer = styled.div`
    display: flex;
    height: 150px;
  margin-top: 20px;
  justify-content: center;
  
  & > *:not(:last-child) {
    margin-right: 10px;  // Adjust this value as needed
  }
`;