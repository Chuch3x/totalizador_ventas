function verificar(name, age, gender, hour) {
    let horario = " ";
    if(hour >= 1 && hour < 12)    {
        horario = "Buenos Dias";
    }
    else if (hour > 12 && hour < 20){
        horario = "Buenos Tardes";
    }
    else{
        horario = "Buenos Noches";
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
  }
export default verificar;