let arr = new Set();

function agregarAmigo() {
  let nombre = document.getElementById("amigo").value;
  if (nombre != "") {
    arr.add(nombre);
    document.querySelector("#amigo").value = "";
    mostrarAmigos(arr);
  } else {
    alert("Porfavor inserta un nombre");
  }
}

function mostrarAmigos(arr) {
  let lista = document.getElementById("listaAmigos");
  lista.innerHTML = "";
  cleanSecretFriend();
  for (let nombre of arr) {
    let item = document.createElement("li");
    item.textContent = nombre;
    lista.appendChild(item);
  }
}

function sortearAmigo() {
  if (arr.size) {
    let index = Math.floor(Math.random() * arr.size);
    let amigoSecreto = document.getElementById("resultado");
    amigoSecreto.innerHTML = "";
    let array = Array.from(arr);
    let item = document.createElement("li");
    item.textContent = "Tu amigo secreto es: " + array[index];
    cleanSet();
    amigoSecreto.appendChild(item);
  }
}

function cleanSet() {
  let lista = document.getElementById("listaAmigos");
  lista.innerHTML = "";
  arr.clear();
}

function cleanSecretFriend() {
  let amigoSecreto = document.getElementById("resultado");
  amigoSecreto.innerHTML = "";
}
