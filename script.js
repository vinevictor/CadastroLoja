const nome = document.getElementById("nomeLoja");
const endereco = document.getElementById("enderecoLoja");

function changeColor(e) {
  e.target.style.outlineColor = "purple";
}

nome.onfocus = changeColor;
endereco.onfocus = changeColor;

let info = document.querySelectorAll(
  'input[id="nomeLoja"],[id="enderecoLoja"],[id="box1"],[id="box2"],[id="box3"],[id="box4"],[id="box5"],[id="box6"],[id="box7"],[id="aberto"],[id="fechado"]'
);

for (let index = 0; index < info.length; index++) {
  info[index].addEventListener("change", onChange);

  function onChange(e) {
    let information;
    if (index == 0) {
      information = "Nome da Loja";
      window.localStorage.setItem(information, e.target.value);
    } else if (index == 1) {
      information = "Endereco";
      window.localStorage.setItem(information, e.target.value);
    } else if (index == 2) {
      information = "Domingo";
      window.localStorage.setItem(information, e.target.value);
    } else if (index == 3) {
      information = "Segunda";
      window.localStorage.setItem(information, e.target.value);
    } else if (index == 4) {
      information = "Terca";
      window.localStorage.setItem(information, e.target.value);
    } else if (index == 5) {
      information = "Quarta";
      window.localStorage.setItem(information, e.target.value);
    } else if (index == 6) {
      information = "Quinta";
      window.localStorage.setItem(information, e.target.value);
    } else if (index == 7) {
      information = "Sexta";
      window.localStorage.setItem(information, e.target.value);
    } else if (index == 8) {
      information = "Sabado";
      window.localStorage.setItem(information, e.target.value);
    } else if (index == 9) {
      information = "Horario de Abertura";
      window.localStorage.setItem(information, e.target.value);
    } else if (index == 10) {
      information = "Horario de Fechamento";
      window.localStorage.setItem(information, e.target.value);
    }
  }
}

function ValorLocalStorage() {
  document.getElementById("nomeLoja").value =
    window.localStorage.getItem("Nome da Loja");
  document.getElementById("enderecoLoja").value =
    window.localStorage.getItem("Endereco");
  if (window.localStorage.getItem("Domingo") == "on") {
    document.getElementById("box1").checked = true;
  } else {
    document.getElementById("box1").checked = false;
  }

  if (window.localStorage.getItem("Segunda") == "on") {
    document.getElementById("box2").checked = true;
  } else {
    document.getElementById("box2").checked = false;
  }

  if (window.localStorage.getItem("Terca") == "on") {
    document.getElementById("box3").checked = true;
  } else {
    document.getElementById("box3").checked = false;
  }

  if (window.localStorage.getItem("Quarta") == "on") {
    document.getElementById("box4").checked = true;
  } else {
    document.getElementById("box4").checked = false;
  }

  if (window.localStorage.getItem("Quinta") == "on") {
    document.getElementById("box5").checked = true;
  } else {
    document.getElementById("box5").checked = false;
  }

  if (window.localStorage.getItem("Sexta") == "on") {
    document.getElementById("box6").checked = true;
  } else {
    document.getElementById("box6").checked = false;
  }

  if (window.localStorage.getItem("Sabado") == "on") {
    document.getElementById("box7").checked = true;
  } else {
    document.getElementById("box7").checked = false;
  }

  document.getElementById("aberto").value = window.localStorage.getItem(
    "Horario de Abertura"
  );
  document.getElementById("fechado").value = window.localStorage.getItem(
    "Horario de Fechamento"
  );
}

let form = document.querySelector("form");

form.addEventListener("submit", (event) => {
  event.preventDefault();
  console.log("Preparando Envio...");
});
