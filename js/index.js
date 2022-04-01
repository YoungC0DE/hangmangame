// Pegando todos os botões dentro da div com id 'keyboard'.
const buttons = document.querySelectorAll("#keyboard .btKey"),
      image   = document.getElementById("image"),
      tip     = document.getElementById("tip"),
      keyword = document.getElementById("keyword")

// Lista com palavras secretas e suas respectivas dicas.
const secretWords = [
    // Formato: palavra secreta + dica.
    ["lamborguini", "Carro"],
    ["Portugal", "País"],
    ["Piratas do Caribe", "Filme"],
    ["Will Smith", "Ator Famoso"],
    ["Abacaxi", "Fruta"],
    ["Programador", "Profissão"],
    ["Cafe", "Bebida"],
    ["Peaky Blinders", "Série"],
    ["Hamster", "Animal"],
]

let errors = 0 // Armazena erros para atualizar a imagem da forca.

// Gera número aleatório.
const getRnd = (min, max) => {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min;
}

// Definindo valores iniciais.
const rnd        = getRnd(0, secretWords.length),
      sortedTip  = secretWords[rnd][1],
      sortedWord = (secretWords[rnd][0]).toUpperCase()

tip.innerHTML += sortedTip
keyword.innerHTML = "⎽".repeat(sortedWord.length)
let cache = keyword.textContent

// Atribuindo evento em cada botão dentro da variavel 'buttons'
buttons.forEach(button => button.addEventListener("click", () => {
    // Quando clicado, o botão é desativado.
    button.className = "btKeyDesabled"

    // Botao que tenha a mesma letra dentro da palavra sorteada, é destacado.
    // Revela a letra encontrada nas posições, dentro da frase sorteada. 
    if (sortedWord.includes(button.textContent)) {
        button.style.backgroundColor = "rgb(0 255 0 / 15%)"
        
        // Aplicando as letras encontradas nas posições da palavra sorteada que esta oculta.
        for(let count = 0; count < sortedWord.length; count++){
            if(sortedWord[count] == button.textContent) {
                console.log(cache[count])
            }
        }
    }
    else {
        // Caso a letra do botao clicado não estiver na palavra sorteada,
        // então o 'errors' é incrementado e a imagem da forca é definida com a variável.
        errors++
        image.style.backgroundImage = `url(./images/forca${errors}.png)`

        // Caso atinga 6 erros, então o jogo acaba.
        if(errors == 6) {
            alert("você perdeu!")
            window.location.reload(true)
        }
    }
}))