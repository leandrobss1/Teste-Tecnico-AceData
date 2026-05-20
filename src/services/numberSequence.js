export function processarSequencia(quantidade, sequencia) {
  const numeros = sequencia.split(",").map(Number);

  if (numeros.length !== quantidade) {
    alert(
      `Você informou ${numeros.length} números, mas deveria informar ${quantidade}.`,
    );
    return;
  }

  const menor = Math.min(...numeros);
  const maior = Math.max(...numeros);

  alert(`Sequência: ${numeros.join(", ")}\nMenor: ${menor}\nMaior: ${maior}`);
}

export function Calcular() {
  const quantidade = Number(document.getElementById("quantidade").value);
  const sequencia = document.getElementById("sequencia").value;

  if (!quantidade || !sequencia) {
    alert("Preencha os campos corretamente.");
    return;
  }

  processarSequencia(quantidade, sequencia);

  document.getElementById("quantidade").value = "";
  document.getElementById("sequencia").value = "";
}
