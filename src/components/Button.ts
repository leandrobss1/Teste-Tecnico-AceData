import styled from "styled-components";
import { Link } from "react-router-dom";

export const Button = styled(Link)`
  width: 100%;
  font-family: "Source Code Pro", monospace;
  font-weight: 600;
  padding: 12px 16px;
  border-radius: 0;
  margin-bottom: 0.5rem;
  background-color: #ffff;
  color: #000000;
  border: 1px solid #000000;
  cursor: pointer;

  &:hover {
    font-weight: 700;
    border-bottom: 4px solid #000000;
    border-right: 4px solid #000000;
  }
`;
