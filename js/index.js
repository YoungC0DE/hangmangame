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

const errors = 0 // Armazena erros para atualizar a imagem da forca.

// Gera número aleatório.
const getRnd = (min, max) => {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min;
}

// Definindo valores iniciais.
const rnd        = getRnd(0, secretWords.length),
      sortedTip  = secretWords[rnd][1],
      sortedWord = secretWords[rnd][0]

tip.innerHTML += sortedTip
keyword.innerHTML = "⎽".repeat(sortedWord.length)


// Varrendo palavra secreta e setando letras encontradas
const showWord = () => {
    // sortedWord.length
}

// Atribuindo evento em cada botão dentro da variavel 'buttons'
buttons.forEach(button => button.addEventListener("click", () => {
    // for (let cont = 0; cont < secretWords.length; cont++) {
    //     if (secretWords[cont][0].includes(button.textContent)) {

    //     }
    // }
}))