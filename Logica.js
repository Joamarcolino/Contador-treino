//-----------------------------Valor numero principal---------------------------------------//
let numero = 0

//------------------------Mais e menos respectivamente, mudadores do estado.--------------------------------------//
function mais() {
    numero = numero + 1;
    mostrarconteudo()
    mudarcorbody()
}
function menos() {
    numero = numero - 1;
    mostrarconteudo()
    mudarcorbody()
}


//----------------mostra o estado da aplicação no contador-------------------------------------------------------//
function mostrarconteudo() {
    const p = document.querySelector("#principal")
    p.innerText = numero
}



//-----------------muda a cor do body. Cor do h1,p e sombra ---------------------------------//
function mudarcorbody() {
    const principal = document.getElementById("principal")
    const titulo = document.getElementById("titulo")

    if (numero > 0) {
        document.body.style.backgroundColor = "yellow";
        titulo.style.color = "yellow";
        titulo.style.textShadow = "1px 1px 10px yellow"
        principal.style.color = "yellow";
        principal.style.textShadow = "1px 1px 10px yellow"
    } else if (numero < 0) {
        document.body.style.backgroundColor = "red";
        titulo.style.color = "red";
        titulo.style.textShadow = "1px 1px 10px red"
        principal.style.color = "red";
        principal.style.textShadow = "1px 1px 10px red"
    } else {
        document.body.style.backgroundColor = "royalblue";
        titulo.style.color = "white";
        titulo.style.textShadow = "1px 1px 1px black"
        principal.style.color = "white";
        principal.style.textShadow = "1px 1px 1px black"
    }
}

//--------------------------começa o contador--------------------------------------------//
mostrarconteudo()