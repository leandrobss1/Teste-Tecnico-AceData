import { Link } from "react-router-dom";
import styled from "styled-components";

export const TitleHome = styled.h1``;

export const ListItem = styled.li``;

export const Container = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  padding: 2rem;
`;

export const NavMenu = styled.nav`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

export const NavButton = styled(Link)`
  width: 200px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: "Source Code Pro", monospace;
  font-weight: 600;
  padding: 12px 16px;
  border-radius: 0;
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

export const UnorderedList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 6px;
`;
