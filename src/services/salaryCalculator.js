function calcularSalarioFamilia(salarioBruto, numFilhos) {
  if (numFilhos <= 0) return 0;

  let valorPorFilho;

  if (salarioBruto <= 788) {
    valorPorFilho = 30.5;
  } else if (salarioBruto <= 1100) {
    valorPorFilho = 18.5;
  } else {
    valorPorFilho = 11.9;
  }

  return valorPorFilho * numFilhos;
}

export function calcularSalario(valorHora, horasTrabalhadas, numFilhos) {
  const salarioBruto = valorHora * horasTrabalhadas;
  const salarioFamilia = calcularSalarioFamilia(salarioBruto, numFilhos);
  const salarioLiquido = salarioBruto + salarioFamilia;

  return { salarioBruto, salarioFamilia, salarioLiquido };
}

export function Calcular() {
  const valorHora = Number(document.getElementById("valorHora").value);
  const horasTrabalhadas = Number(
    document.getElementById("horasTrabalhadas").value,
  );
  const numFilhos = Number(document.getElementById("numFilhos").value);

  if (!valorHora || !horasTrabalhadas) {
    alert("Preencha os campos corretamente.");
    return;
  }

  if (valorHora < 0 || horasTrabalhadas < 0 || numFilhos < 0) {
    alert("Valores não podem ser negativos.");
    return;
  }

  const resultado = calcularSalario(valorHora, horasTrabalhadas, numFilhos);

  alert(
    `Salário Bruto: R$ ${resultado.salarioBruto.toFixed(2)}\nSalário Família: R$ ${resultado.salarioFamilia.toFixed(2)}\nSalário Líquido: R$ ${resultado.salarioLiquido.toFixed(2)}`,
  );

  document.getElementById("valorHora").value = "";
  document.getElementById("horasTrabalhadas").value = "";
  document.getElementById("numFilhos").value = "";
}
