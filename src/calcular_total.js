import calcular_descuentos from "./calcular_descuentos";

function calcular_impuestos(impuestos, estado){
    return impuestos.get(estado);
}

function calcular_precio_neto_total(cant, precio, estado, impuestos){
    var impuesto = calcular_impuestos(impuestos, estado) / 100;
    var descuento = calcular_descuentos(cant) / 100;

    var precio_neto = cant * precio;
    var precio_con_impuesto = (precio_neto * impuesto) + precio_neto;
    var precio_total =  precio_con_impuesto - (precio_con_impuesto * descuento) ;
    return precio_total;
}

export default calcular_precio_neto_total;