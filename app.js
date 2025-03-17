//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.
let amigos = [];

function adicionarAmigo() {
    const input = document.getElementById("amigo");
    const nome = input.value.trim();
    const lista = document.getElementById("listaAmigos");
    
    if (nome === "") {
        alert("Digite um nome válido!");
        return;
    }
    
    if (amigos.includes(nome)) {
        alert("Este nome já foi adicionado!");
        return;
    }
    
    amigos.push(nome);
    
    const li = document.createElement("li");
    li.textContent = nome;
    lista.appendChild(li);
    
    input.value = "";
    input.focus();
}

function sortearAmigo() {
    if (amigos.length < 2) {
        alert("Adicione pelo menos dois amigos para sortear!");
        return;
    }
    
    let sorteio = [...amigos];
    let resultado = [];
    
    while (sorteio.length > 1) {
        let amigo1 = sorteio.splice(Math.floor(Math.random() * sorteio.length), 1)[0];
        let amigo2 = sorteio.splice(Math.floor(Math.random() * sorteio.length), 1)[0];
        resultado.push(`${amigo1} tirou ${amigo2}`);
    }
    
    if (sorteio.length === 1) {
        let ultimo = sorteio[0];
        let primeiro = resultado[0].split(" tirou ")[0];
        resultado.push(`${ultimo} tirou ${primeiro}`);
    }
    
    exibirResultado(resultado);
}

function exibirResultado(resultado) {
    const listaResultado = document.getElementById("resultado");
    listaResultado.innerHTML = "";
    
    resultado.forEach(texto => {
        const li = document.createElement("li");
        li.textContent = texto;
        listaResultado.appendChild(li);
    });
}
