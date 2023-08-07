import styled from "styled-components";

export const ReceivmentContainer = styled.div`
    padding: 10px;
    display: flex;
    flex-direction: column;
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