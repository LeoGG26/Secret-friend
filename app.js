// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let amigos = [];
let texto_amigo =""

function AgregarAmigo(){
    let input_amigo =document.getElementById("amigo");
    texto_amigo=input_amigo.value;
    if(texto_amigo.length<2){
        alert("debes añadir un nombre real")
        input_amigo.value=""
        return;
    }

    amigos.push(texto_amigo)
    Actualizar_lista();
    input_amigo.value=""
}

function Actualizar_lista(){
    let lista=document.getElementById("listaAmigos");
    lista.innerHTML="";

    amigos.forEach((amigo)=>{
        lista.innerHTML=lista.innerHTML+"<li>"+amigo+"</li>";
    })

}

function SortearAmigo(){
    if(amigos.length<3){
        alert("Se necesitan minimo 3 participates para realizar el sorteo \nConsigue amigos :/");
        return;
    }

    let indice = Math.floor(Math.random()*(amigos.length))
    alert("Tu amigo secreto es:\n"+amigos[indice]);

}

