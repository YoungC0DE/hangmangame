// Pegando todos os botões dentro da div com id 'keyboard'.
const buttons = document.querySelectorAll("#keyboard .btKey"),
    image = document.getElementById("image"),
    tip = document.getElementById("tip"),
    keyword = document.getElementById("keyword"),
    endGame = document.getElementById("endGame"),
    divEndGame = document.getElementById("DivEndGame"),
    resultGame = document.getElementById("resultGame"),
    spanEndGame = document.getElementById("spanEndGame"),
    resetGame = document.getElementById("resetGame")

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

let errors = 0, // Armazena erros para atualizar a imagem da forca.
    usedWords = "", // Letras ja usadas.
    hits = 0 // acertos.

// Gera número aleatório.
const getRnd = (min, max) => {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min;
}

// Definindo valores iniciais.
const rnd = getRnd(0, secretWords.length),
    sortedTip = secretWords[rnd][1],
    sortedWord = (secretWords[rnd][0]).toUpperCase(),
    hidden = "⎽ ".repeat(sortedWord.length)

tip.innerHTML += sortedTip // Insere respectiva dica no campo de dicas. 
keyword.innerHTML = hidden // Insere caracteres "_" multiplicados pelo tamanho da palavra secreta.

// Variavel onde ocorre a revelação das letras em suas respectivas posições.
let cache = hidden.split(" ")

// Iniciado para tirar espaços em forma de campo.
for (let i = 0; i < sortedWord.length; i++) {
    if (sortedWord[i] == ' ') {
        cache.splice(i, 1, "-")
        keyword.innerHTML = cache.join(" ")
    }
}

// Função que define valores na modal do EndGame.
const endGameFunc = result => {
    endGame.style.display = "flex"
    divEndGame.style.display = "flex"
    resultGame.innerHTML = result == 1 ? "Você venceu!" : "Você perdeu.."
    spanEndGame.innerHTML += sortedWord
}

// Atribuindo evento em cada botão dentro da variavel 'buttons'
buttons.forEach(button => button.addEventListener("click", () => {
    let count = 0

    // Botao que tenha a mesma letra dentro da palavra sorteada, é destacado.
    // Revela a letra encontrada nas posições, dentro da frase sorteada. 
    if (button.className == "btKey" && hits < sortedWord.length) {
        if (sortedWord.includes(button.textContent)) {
            button.style.backgroundColor = "rgb(0 255 0 / 15%)"

            // Aplicando as letras encontradas nas posições da palavra sorteada que esta oculta.
            while (count < sortedWord.length) {
                if (sortedWord[count] == button.textContent) {
                    cache.splice(count, 1, button.textContent).join(" ")
                    keyword.innerHTML = cache.join(" ")
                    usedWords = keyword.textContent
                    hits++
                }
                count++
            }
        }
        else {
            // Caso a letra do botao clicado não estiver na palavra sorteada,
            // então o 'errors' é incrementado e a imagem da forca é definida com a variável.
            errors++
            image.style.backgroundImage = `url(./images/forca${errors}.png)`

            // Caso atinga 6 erros, então o jogo acaba.
            if (errors == 6) endGameFunc(0)
        }
        if (hits == sortedWord.length) endGameFunc(1)
        // Quando clicado, o botão é desativado.
        button.className = "btKeyDesabled"
    }
}))

// Botao para reiniciar o jogo.
resetGame.addEventListener("click", () => window.location.reload(true))