function verificarIdiomas(idioma){
    idioma_seleccionado = " ";
    if(idioma == "ES"){
        idioma_seleccionado = "esp";
    }
    else{
        idioma_seleccionado = "ing";
    }
    return idioma_seleccionado;
}

function verificar(name, age, gender, hour, language) {
    let horario = " ";
    if (verificarIdiomas(language) == "esp"){
        if(hour >= 1 && hour < 12)    {
            horario = "Buenas Dias";
        }
        else if (hour > 12 && hour < 20){
            horario = "Buenas Tardes";
        }
        else{
            horario = "Buenas Noches";
        }
    
        if (gender == "M") {
            if (age > 30) {
              return horario + " Señor " + name;
            } 
            else {
              return horario + " Joven " + name;
            }
          } 
          else if (gender == "F") {
            if (age > 30) {
              return horario + " Señora " + name;
            } 
            else {
              return horario + " Jovencita " + name;
            }
          }
    }else{
        if(hour >= 1 && hour < 12)    {
            horario = "Good Morning";
        }
        else if (hour > 12 && hour < 20){
            horario = "Good Afternoon";
        }
        else{
            horario = "Good Night";
        }
    
        if (gender == "M") {
            if (age > 30) {
              return horario + " Mr. " + name;
            } 
            else {
              return horario + " "+ name;
            }
          } 
          else if (gender == "F") {
            if (age > 30) {
              return horario + " Miss " + name;
            } 
            else {
              return horario + " " + name;
            }
          }
    }
    
  }
export default verificar;