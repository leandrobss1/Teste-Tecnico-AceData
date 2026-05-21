import { FibonacciCalc } from "../../services/fibonacci";
import { Container, NavButton } from "../Home/styles";
import { NumberButton } from "../NumberSequence/styles";
import { TitleFibo, LabelFibo, InputFibo } from "./styles";

export default function Fibonacci() {
  return (
    <Container>
      <TitleFibo>Fibonacci</TitleFibo>
      <LabelFibo>
        Digite um numero para verificar a sequência de fibonacci:
      </LabelFibo>
      <InputFibo id="fibonacci" placeholder="Ex: 5"></InputFibo>

      <NumberButton onClick={FibonacciCalc}>Calcular</NumberButton>
      <NavButton to="/">Retornar</NavButton>
    </Container>
  );
}
