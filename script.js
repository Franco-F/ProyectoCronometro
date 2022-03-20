/*
1. Pedirle un input al usuario
    1.1. Cronómetro normal.
    1.2. Cronómetro Pomodoro.
    1.3. Cronómetro alarma.
2. Guardar tiempos en un array que contenga un objeto (en caso de ser el primero).
3. Alertar al usuario.
    3.1. El mejor tiempo.
    3.2. Cuando terminen los intervalos (25 de estudio y 5 de descanso).
    3.3. Cuando tenga que sonar.
*/

//DOM
const btn1 = document.createElement("button");
const btn2 = document.createElement("button");
const btn3 = document.createElement("button");
const inicio = document.getElementById("inicio");
const tiempo = document.createElement("div");
const pTiempo = document.createElement("p");


tiempo.setAttribute("class", "tiempo");
btn1.setAttribute("class", "boton");
btn1.textContent = "Iniciar";
btn2.setAttribute("class", "boton");
btn2.textContent = "Terminar";
btn3.setAttribute("class", "boton");
btn3.textContent = "Datos";
pTiempo.innerHTML = "Su tiempo es de 00:00:00";


document.body.appendChild(tiempo);
inicio.appendChild(btn1);
inicio.appendChild(btn2);
inicio.appendChild(btn3);
//Fin DOM


//Eventos
btn1.onclick = botonClick;
btn2.onclick = monstrarTiempo;
btn3.onclick = almacenarDatos;
//Fin eventos

//Funciones
function botonClick(){
    const input = prompt("Ingrese un número entre 1 y 4 o el uso que quiera darle para activar el cronómetro");
}


function monstrarTiempo(){
    tiempo.appendChild(pTiempo);
}

function almacenarDatos(){
    const nombre = prompt("Ingrese su nombre");
    sessionStorage.setItem("Nombre", nombre);
    const saludo = alert(`Hola, ${sessionStorage.getItem("Nombre")}`);
}


//Fin funciones