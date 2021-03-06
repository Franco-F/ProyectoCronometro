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
const divBtn = document.querySelector(".botones");
const textoTiempo = document.querySelector(".textoTiempo");
textoTiempo.innerHTML = "00:00"


tiempo.setAttribute("class", "tiempo");
btn1.setAttribute("class", "boton inicio");
btn1.textContent = "Iniciar";
btn2.setAttribute("class", "boton terminar");
btn2.textContent = "Terminar";
btn3.setAttribute("class", "boton datos");
btn3.textContent = "Datos";
pTiempo.setAttribute("class", "texto")
pTiempo.innerHTML = "Su tiempo es de 00:00:00";


document.body.appendChild(tiempo);
divBtn.appendChild(btn1);
divBtn.appendChild(btn2);
divBtn.appendChild(btn3);
//Fin DOM


//Eventos
btn1.addEventListener("click", cronometro);
btn2.addEventListener("click", pararCronometro);
btn3.onclick = almacenarDatos;


//Fin eventos

//Funciones
function botonClick(){
    const input = prompt("Ingrese un número entre 1 y 4 o el uso que quiera darle para activar el cronómetro");
    
    if (input == 1 || input.toLocaleLowerCase() == "cronometro"){
        alert("Usted eligió el cronómetro normal");
    }
    else if (input == 2 || input.toLowerCase() == "pomodoro"){
    alert("Usted eligió el cronómetro Pomodoro");
    }
    else if (input == 3 || input.toLocaleLowerCase() == "alarma"){
        alert("Usted eligió la alarma");
    }
    else if (input == 4 || input.toLocaleLowerCase() == "terminar"){
        alert("Gracias por usar el crónometro online");
    }
    else{
        alert("Seleccione un valor válido");
    }
}


function monstrarTiempo(){
    tiempo.appendChild(pTiempo);
}

function almacenarDatos(){
    const nombre = prompt("Ingrese su nombre");
    localStorage.setItem("Nombre", nombre);
}

m = 0;
s = 0;

function escribirTiempo(){
    let sAux;
    s++;
    if(s > 59){m++; s = 0;}

    if(s < 10){
        sAux = "0" + s;
    }
    else{
        sAux = s;
    }

    textoTiempo.innerHTML = m + ":" +  sAux;

    storageTiempo = textoTiempo.innerHTML = m + ":" + sAux

    tiempoAnterior = localStorage.setItem("Tiempo", storageTiempo);
}

function cronometro(){
    escribirTiempo();
    intervaloTiempo = setInterval(escribirTiempo, 1000);
    document.querySelector(".inicio").removeEventListener("click", cronometro);
}

function pararCronometro(){
    clearInterval(intervaloTiempo);
    btn2.addEventListener("click", cronometro);

    document.querySelector(".mostrarTiempo").appendChild(tiempoAnterior)

}

//Fin funciones


//Librerias

btn1.addEventListener("click", () =>{
    Toastify({
        text: "¡El cronómetro empezó!",
        duration: 2000,
        close: true,
        gravity: "top",
        position: "right",
        onclick: ()=>{}
    }).showToast();
});

btn2.addEventListener("click", () =>{
    Toastify({
        text: "¡El cronómetro terminó!",
        duration: 2000,
        close: true,
        gravity: "top",
        position: "right",
        onclick: ()=>{}
    }).showToast();
});

btn3.addEventListener("click", () =>{
    Toastify({
        text: `Hola, ${sessionStorage.getItem("Nombre")}`,
        duration: 2000,
        gravity: "top",
        position: "right",
        onclick: ()=>{}
    }).showToast();
})

//Fin librerias