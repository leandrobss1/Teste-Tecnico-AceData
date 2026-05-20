import styled from "styled-components";

export const TitleNumberSeq = styled.h1``;

export const NumberDiv = styled.div``;

export const NumberLabel = styled.label``;

export const NumberButton = styled.button`
  width: 200px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: "Source Code Pro", monospace;
  font-weight: 600;
  padding: 12px 16px;
  margin: 0.7rem;
  border-radius: 0;
  background-color: #ffff;
  color: #000000;
  border: 1px solid #000000;
  cursor: pointer;

  &:hover {
    background-color: #cbf3bb;
    color: #22792c;
    font-weight: 700;
    border-bottom: 4px solid #22792c;
    border-right: 4px solid #22792c;
  }
`;

export const NumberInput = styled.input`
  border: 1px solid #cecece;
  width: 180px;
`;
