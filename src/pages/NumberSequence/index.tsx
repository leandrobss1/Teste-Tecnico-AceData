import { Container, NavButton } from "../Home/styles";
import { Calcular } from "../../services/numberSequence";
import {
  TitleNumberSeq,
  NumberDiv,
  NumberButton,
  NumberInput,
  NumberLabel,
} from "./styles";

export default function NumberSequence() {
  return (
    <Container>
      <TitleNumberSeq>Number Sequence</TitleNumberSeq>

      <NumberDiv>
        <NumberLabel>Quantidade de números : </NumberLabel>
        <NumberInput
          id="quantidade"
          type="number"
          min={0}
          placeholder="Ex: 3"
        />
      </NumberDiv>

      <NumberDiv>
        <NumberLabel>Sequência de números : </NumberLabel>
        <NumberInput
          id="sequencia"
          type="text"
          placeholder="Ex: 10, 20, 30 (use a vírgula)"
        />
      </NumberDiv>

      <NumberButton onClick={Calcular}>Calcular</NumberButton>

      <NavButton to="/">Retornar</NavButton>
    </Container>
  );
}
