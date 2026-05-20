import { Container, NavButton } from "../Home/styles";
import { TitleFibo } from "./styles";

export default function Fibonacci() {
  return (
    <Container>
      <TitleFibo>Fibonacci</TitleFibo>
      <NavButton to="/">Retornar</NavButton>
    </Container>
  );
}
