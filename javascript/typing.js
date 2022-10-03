function getLanguage() {
    var inputs = document.querySelectorAll('.header-language input')
    var titleEnglish = ['Front-end Developer', 'Graphic Designer']
    var titlePortuguese = ['Desenvolvedor Front-end', 'Designer Gráfico']

    for(var i = 0; i < inputs.length; i++) {
        if(inputs[i].className === 'active') {
            if(inputs[i].id === 'languagePT') {
                return titlePortuguese
            } else {
                return titleEnglish
            }
        }
    }
}

function typingEffect() {
    var contactTexts = shuffleArray(['Front-end Developer', 'Graphic Designer'])
    // clearInterval(typing)
    // var contactTexts = shuffleArray(getLanguage())
    var typedtext = document.getElementById("titleCareer")
    var removing = false
    var idx = char = 0

    var typing = setInterval(() => { // We define the interval of the typing speed

        // If we do not reach the limit, we insert characters in the html
        if (char < contactTexts[idx].length) typedtext.innerHTML += contactTexts[idx][char]

        // 15*150ms = time before starting to remove characters
        if (char == contactTexts[idx].length + 15) removing = true

        // Removing characters, the last one always
        if (removing) typedtext.innerHTML = typedtext.innerHTML.substring(0, typedtext.innerHTML.length - 1)

        char++; // Next character

        // When there is nothing else to remove
        if (typedtext.innerHTML.length === 0) {

            // If we get to the end of the texts we start over
            if (idx === contactTexts.length - 1) idx = 0
            else idx++

            char = 0; // Start the next text by the first character
            removing = false // No more removing characters
        }

    }, 150) // Typing speed, 150 ms

}

// Start Application
typingEffect()

function shuffleArray(array) {
    var currentIndex = array.length,
        temporaryValue, randomIndex

    // While there remain elements to shuffle...
    while (0 !== currentIndex) {

        // Pick a remaining element...
        randomIndex = Math.floor(Math.random() * currentIndex)
        currentIndex -= 1

        // And swap it with the current element.
        temporaryValue = array[currentIndex]
        array[currentIndex] = array[randomIndex]
        array[randomIndex] = temporaryValue
    }

    return array
}
