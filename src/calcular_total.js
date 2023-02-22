function calcular_impuestos(impuestos, estado){
    return impuestos.get(estado);
}

function calcular_precio_neto_total(cant, precio, estado, impuestos){
    var impuesto = calcular_impuestos(impuestos, estado) / 100;
    return ((cant * precio) * impuesto) + (cant * precio);
}

export default calcular_precio_neto_total;