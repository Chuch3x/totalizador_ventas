function verificar(name, age, gender) {
    if (gender == "M") {
        if (age > 30) {
          return "Hola Señor " + name;
        } else {
          return "Hola joven " + name;
        }
      } else if (gender == "F") {
        if (age > 30) {
          return "Hola Señora " + name;
        } else {
          return "Hola jovencita " + name;
        }
      }
  }
export default verificar;