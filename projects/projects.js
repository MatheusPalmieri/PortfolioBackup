var json = `
{
    "CommentsPost": {
        "id": 1,
        "name": "Comments Post",
        "description": "Criação de interfaces de usuário através da componentização para comentar.",
        "link": "https://commentspost-matheuspalmieri.netlify.app/",
        "technology": "React JS | NPM"
    }, 

    "ReactCards": {
        "id": 2,
        "name": "React Cards",
        "description": "Utilização de API para criação de card com imagens, títulos e descrição.",
        "link": "https://reactcards-matheuspalmieri.netlify.app/",
        "technology": "React Native | NPM"
    },

    "iMovi": {
        "id": 3,
        "name": "iMovi",
        "description": "Uso do Bootstrap para estilizar site.",
        "link": "https://matheuspalmieri.github.io/iMovi/",
        "technology": "HTML | CSS | JavaScript | Bootstrap"
    },

    "LoginRegex": {
        "id": 4,
        "name": "Login Regex",
        "description": "Projeto com validação de login por regex em JavaScript.",
        "link": "https://matheuspalmieri.github.io/Login-Regex/",
        "technology": "HTML | CSS | JavaScript"
    },

    "ThemeMode": {
        "id": 5,
        "name": "Theme Mode",
        "description": "Opção de escolher tema claro/escuro, com mudanças em JavaScript.",
        "link": "https://matheuspalmieri.github.io/Theme-Mode/",
        "technology": "HTML | CSS | JavaScript"
    },

    "PokemonAPI": {
        "id": 6,
        "name": "Pokemon API",
        "description": "Utilização de API de Pokemons.",
        "link": "https://matheuspalmieri.github.io/PokemonAPI/",
        "technology": "HTML | CSS | JavaScript"
    }
}
`

var data = JSON.parse(json)
var projectsContainer = document.querySelectorAll('.project')

const getProject = (id) => {
    switch(id){
        case 1:
            return data.CommentsPost
        case 2:
            return data.ReactCards
        case 3:
            return data.iMovi
        case 4:
            return data.LoginRegex
        case 5:
            return data.ThemeMode
        case 6:
            return data.PokemonAPI
    }
}

{/* <p>${nameProject.description}</p> */}

for(var index = 1; index <= 6; index++) {
    nameProject = getProject(index)

    projectsContainer[index - 1].innerHTML = `
        <a href="${nameProject.link}" target="_blank">
            <h4 class="project-title">${nameProject.name}</h4>

            <div class="project-img">
                <img src="projects/image/animation.gif" alt="Prévia projeto ${nameProject.name}">
            </div>
               
            <p class="project-paragraph">Tecnologias usadas: ${nameProject.technology}</p>
        </a>
    `
}






