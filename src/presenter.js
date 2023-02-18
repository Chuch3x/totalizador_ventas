import calcular_precio_neto from "./calcular_total";

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

  div.innerHTML = "<p>" + "El precio neto es: " + calcular_precio_neto(total_items.value, precio_items.value) + "<p>";
});