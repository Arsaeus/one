// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

//VARIABLES

amigos = []
mensajeEnPantalla = document.querySelector("h2")
lista = document.getElementById("listaAmigos")


//FUNCION AGREGAR AMIGO Y ACTUALIZAR LISTA
function agregarAmigo(){
    nuevoAmigo = document.getElementById("amigo").value
    //Verificar si el amigo esta en la lista, para asi agregarlo o pedir que se añada un nuevo
    if(nuevoAmigo == ``) {
        alert(`Por favor ingresa un nombre`); 
    }

    else{
        if (amigos.includes(nuevoAmigo)) {
             mensajeEnPantalla.innerHTML = `Este amigo ya está en la lista, agrega un nuevo!`
        }
        else {
            amigos.push(nuevoAmigo)
            nuevoAmigoEnLista = document.createElement("li")
            nuevoAmigoEnLista.innerHTML = `${nuevoAmigo}`
            lista.appendChild(nuevoAmigoEnLista)
            vaciarCaja(`#amigo`)
            mensajeEnPantalla.innerHTML = "Digite el nombre de sus amigos"

    //mostrar valores del array

            console.log(amigos)
        }
    }
    
//  FUNCION SORTEAR AMIGO



// FUNCION VACIAR CAJA DE TEXTO

}

function vaciarCaja(caja){
    document.querySelector(caja).value = ``
    }

/* 

/* LISTAS: 

<ul id="listaAmigos" class="name-list" aria-labelledby="listaAmigos" role="list"></ul>
<ul id="resultado" class="result-list" aria-live="polite"></ul>

*/

/* Funciones prsentes en el HTML 
<button class="button-draw" onclick="sortearAmigo()" aria-label="Sortear amigo secreto">
<button class="button-add" onclick="agregarAmigo()">Añadir</button>
*/