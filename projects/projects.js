var json = `
{
    "ZipCodeSearchEngine": {
        "id": 1,
        "preview": "ZipCodeSearchEngine",
        "type": "mp4",
        "name": "Zip Code Search Engine",
        "description": "Busca de CEP através de API.",
        "link": "https://matheuspalmieri-zipcode-searchengine.netlify.app/",
        "technology": "React JS | CSS | NPM"
    },

    "QRCode": {
        "id": 2,
        "preview": "QRCode",
        "type": "mp4",
        "name": "QR Code",
        "description": "Criação de interfaces de usuário através da componentização para comentar.",
        "link": "https://matheuspalmieri-qr-code.netlify.app/",
        "technology": "React JS | CSS | NPM"
    },

    "SendEmail": {
        "id": 3,
        "preview": "SendEmail",
        "type": "mp4",
        "name": "Send E-mail",
        "description": "Envio de e-mail através do EmailJS.",
        "link": "https://matheuspalmieri-send-email.netlify.app/",
        "technology": "React JS | CSS | NPM"
    },

    "CommentsPost": {
        "id": 4,
        "preview": "CommentsPost",
        "type": "gif",
        "name": "Comments Post",
        "description": "Criação de interfaces de usuário através da componentização para comentar.",
        "link": "https://commentspost-matheuspalmieri.netlify.app/",
        "technology": "React JS | CSS | NPM"
    },

    "ReactCards": {
        "id": 5,
        "preview": "ReactCards",
        "type": "gif",
        "name": "React Cards",
        "description": "Utilização de API para criação de card com imagens, títulos e descrição.",
        "link": "https://reactcards-matheuspalmieri.netlify.app/",
        "technology": "React Native | NPM"
    },

    "iMovi": {
        "id": 6,
        "preview": "iMovi",
        "type": "gif",
        "name": "iMovi",
        "description": "Uso do Bootstrap para estilizar site.",
        "link": "https://matheuspalmieri.github.io/iMovi/",
        "technology": "HTML | CSS | Bootstrap"
    },

    "LoginRegex": {
        "id": 7,
        "preview": "LoginRegex",
        "type": "gif",
        "name": "Login Regex",
        "description": "Projeto com validação de login por regex em JavaScript.",
        "link": "https://matheuspalmieri.github.io/Login-Regex/",
        "technology": "HTML | CSS | JavaScript"
    },

    "ThemeMode": {
        "id": 8,
        "preview": "ThemeMode",
        "type": "gif",
        "name": "Theme Mode",
        "description": "Opção de escolher tema claro/escuro, com mudanças em JavaScript.",
        "link": "https://matheuspalmieri.github.io/Theme-Mode/",
        "technology": "HTML | CSS | JavaScript"
    },

    "PokemonAPI": {
        "id": 9,
        "preview": "PokemonAPI",
        "type": "gif",
        "name": "Pokemon API",
        "description": "Utilização de API de Pokemons.",
        "link": "https://matheuspalmieri.github.io/PokemonAPI/",
        "technology": "HTML | CSS | JavaScript | API"
    }
}
`

var data = JSON.parse(json)
var projectsContainer = document.querySelectorAll('.project')

const getProject = (id) => {
    switch(id){
        case 1:
            return data.ZipCodeSearchEngine
        case 2:
            return data.QRCode
        case 3:
            return data.SendEmail
        case 4:
            return data.CommentsPost
        case 5:
            return data.ReactCards
        case 6:
            return data.iMovi
        case 7:
            return data.LoginRegex
        case 8:
            return data.ThemeMode
        case 9:
            return data.PokemonAPI
    }
}

function verifyType(type) {
    console.log(type)
    if(type === 'mp4') {
        return `<video src="projects/assets/${nameProject.preview}.${nameProject.type}" autoplay></video>`
    } else {
        return `<img src="projects/assets/${nameProject.preview}.${nameProject.type}" alt="Prévia projeto ${nameProject.name}">`
    }
}

{/* <p>${nameProject.description}</p> */}
// <img src="projects/assets/${nameProject.preview}.${nameProject.type}" alt="Prévia projeto ${nameProject.name}">

for(var index = 1; index <= 9; index++) {
    nameProject = getProject(index)

    projectsContainer[index - 1].innerHTML = `
        <a href="${nameProject.link}" target="_blank">
            <h4 class="project-title">${nameProject.name}</h4>

            <div class="project-img">
                ${verifyType(nameProject.type)}
            </div>
               
            <p class="project-paragraph">Tecnologias usadas: ${nameProject.technology}</p>
        </a>
    `
}






