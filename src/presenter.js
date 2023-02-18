const total_items = document.querySelector("#cantidad_items");

const form = document.querySelector("#totalizador_form");
const div = document.querySelector("#resultado-div");

form.addEventListener("submit", (event) => {
  event.preventDefault();

  div.innerHTML = "<p>" + total_items.value + "<p>";
});