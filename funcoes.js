let verificador
let vez
let cor
let cont = 0
const dado = Array.from(window.document.getElementsByTagName("td"));

quemInicia()

function quemInicia(){
    const inicio = Math.round(Math.random())
    const titulo = window.document.getElementsByTagName("h1")[0]

    if(inicio == 0){
        titulo.innerHTML = `Vez do <span style='color: #9db2cb'> X</span>`
        verificador = true
    }else{
        titulo.innerHTML = `Vez do <span style='color: #e18a93'> O</span>`
        verificador = false
    }
}

function vencedor(){
    const [a, b, c, d, e, f, g, h, i] = dado
    const vitorias = [
        [a, b, c],
        [d, e, f],
        [g, h, i],
        [a, d, g],
        [b, e, h],
        [c, f, i],
        [a, e, i],
        [c, e, g]
    ]

    for(const condicoes of vitorias){
        const [v1, v2, v3] = condicoes

        if (v1.innerText !== "" && v1.innerText === v2.innerText && v2.innerText === v3.innerText){
            return true
        }
    }

    return false
}

function jogar(l){
    const titulo = window.document.getElementsByTagName("h1")[0]

    if(!vencedor()){
        if(!["X", "O"].includes(dado[l].innerText)){
            cont++

            if(verificador){
                dado[l].style.color = `#9db2cb`
                dado[l].innerText = `X`
                verificador = false
                vez = "O"
                cor = `#e18a93`
            }else{
                dado[l].style.color = `#e18a93`
                dado[l].innerText = `O`
                verificador = true 
                vez = "X"
                cor = `#9db2cb`
            }

            if(!vencedor() && cont == 9){
                titulo.innerHTML = `Deu velha <span class="material-symbols-outlined" style='font-size: 1em;color: #ecb0e6;margin-left: 0px;'>elderly_woman</span>!`
                cont = 0
            }else{
                titulo.innerHTML = vencedor() ? `Vitória do <span style='color: ${dado[l].style.color}'>${dado[l].innerHTML}</span> !` : `Vez do <span style='color: ${cor}'>${vez}</span>`
            }
        }
    }     
}

function reiniciar(){
    for(let i = 0; i < 9;i++){
        dado[i].innerText = ""
    }
    quemInicia()
    cont = 0
}