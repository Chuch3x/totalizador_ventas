import mostrar_impuestos from "./calcular_total";

const total_items = document.querySelector("#cantidad_items");
const precio_items = document.querySelector("#precio_item");
const estados = document.querySelector("#estados");

const form = document.querySelector("#totalizador_form");
const div = document.querySelector("#resultado-div");

const impuestos = new Map([
    ['UT', 6.65],
    ['NV', 8],
    ['TX', 6.25],
    ['AL', 4],
    ['CA', 8.25]
  ]);

form.addEventListener("submit", (event) => {
  event.preventDefault();

  div.innerHTML = "<p>" + "La cant de items es: " +total_items.value + " y el precio unitario es: "+ precio_items.value + " el estado selecionado es: " + estados.value + " el impuesto es" + mostrar_impuestos(impuestos,estados.value) + "<p>";
});