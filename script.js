function pronto() {
  let nome = document.getElementById("nome").value.trim();
  let idade = parseFloat(document.getElementById("idade").value);
  let quantidade = parseInt(document.getElementById("quantidade").value);
  let acompanhado = document.getElementById("menor").checked;
  let estudante = document.getElementById("estudante").checked;
  let resposta = document.getElementById("resultado");
  const valor_ingresso = 20;

  if (!nome || isNaN(idade) || isNaN(quantidade) || quantidade <= 0) {
    resposta.textContent = "Por favor, preencha todos os campos corretamente.";
    return;
  }

  if (idade <= 10) {
    resposta.textContent = `${nome}, você tem entrada gratuita!`;
    return;
  }

  if (idade < 18 && !acompanhado) {
    resposta.textContent = `${nome}, menores de idade precisam estar acompanhados pelos pais.`;
    return;
  }

  let total;
  if (estudante) {
    total = (valor_ingresso / 2) * quantidade;
  } else {
    total = valor_ingresso * quantidade;
  }

  if (idade < 18) {
    resposta.textContent = `${nome}, sua passagem está liberada. Seus pais pagarão R$ ${total.toFixed(2)}.`;
  } else {
    resposta.textContent = `${nome}, sua passagem está liberada. Você pagará R$ ${total.toFixed(2)}.`;
  }
}
