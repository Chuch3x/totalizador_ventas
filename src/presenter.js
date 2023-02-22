import calcular_precio_neto from "./calcular_precio_neto";
import calcular_precio_neto_total from "./calcular_total";
import mostrar_impuestos from "./mostrar_impuestos";

const total_items = document.querySelector("#cantidad_items");
const precio_items = document.querySelector("#precio_item");
const estados = document.querySelector("#estados");

const form = document.querySelector("#totalizador_form");

const div_precio_neto = document.querySelector("#precio_neto_div");
//const div_descuento = document.querySelector("#descuento_div");
const div_impuesto = document.querySelector("#impuesto_div");
const div_impuesto_con_descuento = document.querySelector("#resultado-div");

const impuestos = new Map([
    ['UT', 6.65],
    ['NV', 8],
    ['TX', 6.25],
    ['AL', 4],
    ['CA', 8.25]
  ]);

form.addEventListener("submit", (event) => {
  event.preventDefault();
  div_precio_neto.innerHTML = "<p>" + "el precio neto es: "+ calcular_precio_neto(total_items.value, precio_items.value) + "<p>";
  div_impuesto.innerHTML = "<p>" + "El impuesto para "+ estados.value + " es de: " + mostrar_impuestos(impuestos, estados.value) + "<p>";
  div_impuesto_con_descuento.innerHTML = "<p>" + "El precio neto es: " + calcular_precio_neto_total(total_items.value, precio_items.value, estados.value, impuestos) + "<p>";
  
});