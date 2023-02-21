function calcular_impuestos(impuestos, estado){
    return impuestos.get(estado);
}
function calcular_precio_neto(cant, precio, estado, impuestos){
    //let precio_neto = cant * precio;
    var impuesto = calcular_impuestos(impuestos, estado) / 100;
    return ((cant * precio) * impuesto) + (cant * precio);
}

export default calcular_precio_neto;