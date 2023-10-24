//alert("Hola este es mi Javascript");

//let nombre = "Ale";
//var nombre1 = "Ale";
//const nombre2 = "Ale"; // variable constante (nunca cambia)

//console.log(nombre);
//console.log(nombre1);
//console.log(nombre2);

//variables
let menu_responsive = document.querySelector(".checkbtn");
const form = document.getElementById("form");
const nombre = document.getElementById("name");
const parrafo= document.getElementById("alert");


//funciones

menu_responsive.onclick = function () {
  navBar = document.querySelector(".navbar");
  navBar.classList.toggle("active");
};

function validarFormulario(){
    let warnings = "";
    let valido= true;
    parrafo.innerHTML = "";

    if (nombre.value.length < 4){
        warnings += 'Name must contain at least 4 characters';
        valido = false;
    }
    if (!valido){
        parrafo.innerHTML = warnings;
    }else{
        parrafo.innerHTML = "Submitted";
    }
    return valido;
}

form.addEventListener("submit", (e) =>{
    if (validarFormulario()){
        formulario.submit();
    } else {
        e.preventDefault();
    }
});
