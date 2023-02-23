import calcularNeto from "./calcularNeto";
import mostrarImpuesto from "./mostrarImpuesto";

const cant = document.querySelector("#cant");
const precio = document.querySelector("#precio");
const states = document.querySelector("#states");
const form = document.querySelector("#ventas-form");
const div = document.querySelector("#resultado-div");

const impuesto = new Map([
  ['UT', 6.65],
  ['NV', 8],
  ['TX', 6.25],
  ['AL', 4],
  ['CA', 8.25]
]);


form.addEventListener("submit", (event) => {
  event.preventDefault();

  div.innerHTML = "<p>" + calcularNeto(cant.value,precio.value ) + " el impuesto para "+states.value+" es de "+ mostrarImpuesto(impuesto,states.value) + "</p>";
});
