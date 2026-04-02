
// total
let total = 0;

// arrow function pra atualizar tela
const atualizarTela = () => {
  document.getElementById("total").innerText = total.toFixed(2);
};

// adicionar serviço
function adicionarServico(nome, valor) {
  let valorConvertido = parseFloat(valor);

  total += valorConvertido;

  // adiciona na lista
  let lista = document.getElementById("lista");
  let item = document.createElement("li");
  item.innerText = nome + " - R$ " + valorConvertido.toFixed(2);
  lista.appendChild(item);

  atualizarTela();
}

// finalizar (simula compra)
function finalizar() {
  if (total === 0) {
    alert("Escolha pelo menos um serviço!");
    return;
  }

  alert("Pedido enviado! Total: R$ " + total.toFixed(2));
}

// resetar tudo
function resetar() {
  total = 0;
  atualizarTela();

  document.getElementById("lista").innerHTML = "";
}