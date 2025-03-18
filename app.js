// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

//VARIABLES

amigos = []
mensajeEnPantalla = document.querySelector("h2")
listaDeAmigos = document.getElementById("listaAmigos")
listaDeResultados = document.getElementById(`resultado`)


//FUNCION AGREGAR AMIGO Y ACTUALIZAR LISTA
function agregarAmigo(){
    nuevoAmigo = document.getElementById("amigo").value
    
    //Validar si la caja de texto esta vacía
    if(nuevoAmigo == ``) {
        alert(`Por favor ingresa un nombre`); 
    }

    else{
        //Validar si el amigo a agregar ya está en la lista
        if (amigos.includes(nuevoAmigo)) {
             mensajeEnPantalla.innerHTML = `Este amigo ya está en la lista, agrega un nuevo!`
        }
        else {
            //Agrear amigo al array
            amigos.push(nuevoAmigo)

            //Mostrar amigo en lista de amigos
            nuevoAmigoEnLista = document.createElement("li")
            nuevoAmigoEnLista.innerHTML = `${nuevoAmigo}`
            listaDeAmigos.appendChild(nuevoAmigoEnLista)

            //Vaciar caja de texto
            vaciarCaja(`#amigo`)
            mensajeEnPantalla.innerHTML = "Digite el nombre de sus amigos"
    

    //mostrar valores del array

            console.log(amigos)
        }
    }
} 

//FUNCION SORTEAR AMIGO

function sortearAmigo(){
    //Validar si el array esta vacio o no
    if(!amigos.length) {
        alert(`No hay amigos para sortear, porfa agrega uno!`); 
    }
    else {
        //Escoger amigo
        indiceElegido = Math.floor(Math.random()*amigos.length);
        amigoElegido= amigos[indiceElegido];
        
        //Mostrar amigo en lista de resultados
        amigoElegidoEnLista = document.createElement("li");
        amigoElegidoEnLista.innerHTML = `${amigoElegido}`;
        listaDeResultados.appendChild(amigoElegidoEnLista);
        
        //Mostrar mensaje indicando a quien se tiene que regalar
        alert(`Felicidades, ${amigoElegido} es tu amigo secreto!`);
    }
}

// FUNCION VACIAR CAJA DE TEXTO

function vaciarCaja(caja){
    document.querySelector(caja).value = ``
    }

    /* 


LISTAS: 

<ul id="listaAmigos" class="name-list" aria-labelledby="listaAmigos" role="list"></ul>
<ul id="resultado" class="result-list" aria-live="polite"></ul>



 Funciones prsentes en el HTML 
<button class="button-draw" onclick="sortearAmigo()" aria-label="Sortear amigo secreto">
<button class="button-add" onclick="agregarAmigo()">Añadir</button>
*/ 
