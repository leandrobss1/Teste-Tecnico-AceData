import { Calcular } from "../../services/salaryCalculator";
import { Container, NavButton } from "../Home/styles";
import {
  TitleSalary,
  SalaryDiv,
  SalaryLabel,
  SalaryCalc,
  SalaryInput,
} from "./styles";

export default function SalaryCalculator() {
  return (
    <Container>
      <TitleSalary>Calculadora de Salário</TitleSalary>

      <SalaryDiv>
        <SalaryLabel>Valor por hora R$:</SalaryLabel>
        <SalaryInput
          id="valorHora"
          type="number"
          min={0}
          placeholder="Ex: 30"
          required
        />
      </SalaryDiv>

      <SalaryDiv>
        <SalaryLabel>Horas trabalhadas no mês : </SalaryLabel>
        <SalaryInput
          id="horasTrabalhadas"
          type="number"
          placeholder="Ex: 160"
          required
        />
      </SalaryDiv>

      <SalaryDiv>
        <SalaryLabel>Filhos menores de 14 anos : </SalaryLabel>
        <SalaryInput
          id="numFilhos"
          type="number"
          placeholder="Ex: 2"
          required
        />
      </SalaryDiv>

      <SalaryCalc onClick={Calcular}>Calcular</SalaryCalc>

      <NavButton to="/">Retornar</NavButton>
    </Container>
  );
}
