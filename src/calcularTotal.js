import calcularDesc from "./calcularDesc";
import mostrarImpuesto from "./mostrarImpuesto";

function calcularTotal(cant, precio, state, states){
    var impuesto = mostrarImpuesto(states, state) / 100;
    var desc = calcularDesc(cant) / 100;

    var precioNeto = cant * precio;
    var precioImp = (precioNeto * impuesto) + precioNeto;
    var precioTotal =  precioImp - (precioImp * desc) ;
    return precioTotal;
}

export default calcularTotal;