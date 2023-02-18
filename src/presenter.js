const total_items = document.querySelector("#cantidad_items");
const precio_items = document.querySelector("#precio_item");
const estados = document.querySelector("#estados");

const form = document.querySelector("#totalizador_form");
const div = document.querySelector("#resultado-div");

form.addEventListener("submit", (event) => {
  event.preventDefault();

  div.innerHTML = "<p>" + "La cant de items es: " +total_items.value + " y el precio unitario es: "+ precio_items.value + " el estado selecionado es: " + estados.value + "<p>";
});