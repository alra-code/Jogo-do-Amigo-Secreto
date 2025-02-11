// criar lista zerada
let amigos = [];

// capturar valor no campo de entrada 
function adicionarAmigo(){
    let amigo = document.querySelector('input').value;
// validação da entrada do valor no campo     
    console.log (amigo);
// condição ao incluir o nome e alerta de erro 
    if (amigo ==""){
        alert("Por favor, insira um nome.");
    }else {
//atualiza a lista de amigos 
        amigos.push(amigo);
        console.log(`O amigo ${amigo} foi adicionado na lista`, amigos);
// limpar campo de entrada 
        document.querySelector("input").value = "";
        atualizarListaDeAmigos();
    }
}

function atualizarListaDeAmigos(){
// obter elemento da lista 
    let lista = document.getElementById("listaAmigos");
//Limpar a lista existente
    lista.innerHTML = "";
// Loop para percorrer a lista 
    for(i = 0; i < amigos.length; i++){
        let li = document.createElement("li");
        li.textContent = amigos[i]; 
// adiciona elemntos a lista amigos
        lista.appendChild(li);
    }
}
// verifica se a lista amigos não está vazia 
function sortearAmigo(){
    if(amigos.length == 0){
        console.log('Esta lista está vazia')
    }else{
// geração de um indice aleátorio 
        let random = Math.floor(Math.random() * amigos.length);
// usa o indice aletório para acessar o nome correspondente na lista 
        console.log(amigos[random]);
        exibirNaTela("resultado", `O amigo secreto sorteado foi: ${amigos[random]}`)
        amigos = [];
        atualizarListaDeAmigos();
    }   
}
// mostrar o resultado
function exibirNaTela(tag,texto){
    let campo = document.getElementById(tag);
    campo.innerHTML = texto;
}