const user_name = document.querySelector("#name");
const user_gender = document.querySelector("#gender");
const user_age = document.querySelector("#age");
const form = document.querySelector("#saludador-form");
const div = document.querySelector("#resultado-div");

const edad_usuario =Number.parseInt(user_age);

form.addEventListener("submit", (event) => {
  event.preventDefault();
  if(edad_usuario >= 30){
    if(user_gender == 'M'){
        div.innerHTML = "Hola señor" + user_name.value;
    }
    else{
        div.innerHTML = "Hola seniora " + user_name.value;
    }
  }
  else{
    if(user_gender == 'M'){
        div.innerHTML = "Hola " + user_name.value;
    }
    else{
        div.innerHTML = "Hola señorita " + user_name.value;
    }
  }
  
});
