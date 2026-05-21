export function FibonacciCalc() {
  const n = Number(document.getElementById("fibonacci").value);

  if (!n) {
    alert("Preencha o campo.");
    return;
  }

  if (n < 0) {
    alert("Valores não podem ser negativos.");
    return;
  }

  if (n > 50) {
    alert("O valor máximo para verificar a sequência é 50.");
    return;
  }

  let seq = [1, 1];

  for (let i = 2; i < n; i++) {
    seq.push(seq[i - 1] + seq[i - 2]);
  }

  seq = seq.slice(0, n);

  alert(
    `Sequência: ${seq.join(", ")}\n${n} ${seq.includes(n) ? "faz parte da sequência de fibonacci." : "não faz parte da sequência de fibonacci."}`,
  );

  document.getElementById("fibonacci").value = "";
}
