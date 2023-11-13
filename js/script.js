// querySelector = seletor de elementos
const buttonTheme = document.querySelector("#buttonTheme")

// addEventListener = adiciona um elemento
buttonTheme.addEventListener('click', mudaTema)

function mudaTema(){
    let body = document.querySelector("body")
    let temaAtual = document.querySelector("#temaAtual")
    let imgLogo = document.querySelector("#imgLogo")

    if(buttonTheme.checked){
        body.setAttribute('data-bs-theme', 'dark')
        imgLogo.setAttribute('src', 'images/logo/logoWhite.svg')
        temaAtual.innerHTML = "Escuro"

    }else{
        body.setAttribute('data-bs-theme', 'light')
        imgLogo.setAttribute('src', 'images/logo/logoDark.svg')
        temaAtual.innerHTML = "Claro"
    } 
}