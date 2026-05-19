import {
  Container,
  NavButton,
  ListItem,
  UnorderedList,
  NavMenu,
  TitleHome,
} from "./styles";

export default function Home() {
  return (
    <Container>
      <TitleHome>Home Page</TitleHome>

      <NavMenu>
        <UnorderedList>
          <ListItem>
            <NavButton to="/salary" className="nav-button">
              Salary Calculator
            </NavButton>
          </ListItem>
          <ListItem>
            <NavButton to="/fibonacci" className="nav-button">
              Fibonacci
            </NavButton>
          </ListItem>
          <ListItem>
            <NavButton to="/sequence" className="nav-button">
              Number Sequence
            </NavButton>
          </ListItem>
        </UnorderedList>
      </NavMenu>
    </Container>
  );
}
