let numero = 0 

function aumentar() {
    numero++
    mostrarnatela()
}
function zerar() {
    numero = 0
    mostrarnatela()
    
    confetti({
        particleCount: 150,
        spread: 100,
        origin: { y: 0.6 }
    });
}
function diminuir() {
    numero--
    mostrarnatela()
}
function mostrarnatela() {
    const p = document.querySelector("p")
    console.log(p)
    p.innerText = numero
}

mostrarnatela()