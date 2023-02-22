function calcular_descuentos(cantidad){
    var descuento = 0;
    if(cantidad >= 0 && cantidad <1000){
        return descuento;
    }
    else if(cantidad >999 && cantidad < 3000){
        return 5;
    }
    else if(cantidad >2999 && cantidad < 7000){
        return 7;
    }
    else if(cantidad >6999 && cantidad < 30001){
        return 10;
    }
    else if(cantidad >=29999){
        return 15;
    }
   // return descuento;
}
export default calcular_descuentos;