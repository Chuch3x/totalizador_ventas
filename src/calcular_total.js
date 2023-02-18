function mostrar_impuestos(impuestos, estado){
    return impuestos.get(estado);
}
function calcular_precio_neto(cant, precio){
    //let precio_neto = cant * precio;
    return cant * precio;
}

export default calcular_precio_neto;