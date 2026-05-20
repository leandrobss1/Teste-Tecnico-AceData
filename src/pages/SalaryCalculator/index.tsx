import { Calcular } from "../../services/salaryCalculator";
import { Link } from "react-router-dom";

export default function SalaryCalculator() {
  return (
    <div>
      <h1>Calculadora de Salário</h1>

      <div>
        <label>Valor por hora R$ : </label>
        <input
          id="valorHora"
          type="number"
          min={0}
          placeholder="Digite o valor por hora"
          required
        />
      </div>

      <div>
        <label>Horas trabalhadas no mês : </label>
        <input
          id="horasTrabalhadas"
          type="number"
          placeholder="Ex: 160"
          required
        />
      </div>

      <div>
        <label>Filhos menores de 14 anos : </label>
        <input id="numFilhos" type="number" placeholder="Ex: 2" required />
      </div>

      <button onClick={Calcular}>Calcular</button>

      <button>
        <Link to="/">Retornar</Link>{" "}
      </button>
    </div>
  );
}
