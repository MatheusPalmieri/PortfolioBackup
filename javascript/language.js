var toggleLanguage = document.querySelectorAll('.header-language input')
var flags = document.querySelectorAll('.flag')

var titleCareer = document.getElementById('titleCareer')
var titleAbout = document.querySelector('.about h3')
var paragraphAbout = document.querySelector('.about p')
var titleProject = document.querySelector('.projects h3')
var paragraphProject = document.querySelector('.projects .project-paragraph')
var titleSkills = document.querySelector('.skills h3')

function activePortuguese() {
    console.log('activePortuguese')


    flags[0].style.opacity = 1
    flags[1].style.opacity = .5

    titleAbout.textContent = 'Sobre Mim'
    paragraphAbout.textContent = `Oi, me chamo Matheus Palmieri, sou desenvolvedor Front-end. Programo em JavaScript, React Native, Git, GitHub, HTML e CSS. Estudando Bootstrap, PHP e Vue. Cursando atualmente Estrutura e Funcionamento das Redes da Google. Conhecimentos em Designer Gráfico, como Adobe Photoshop, Illustrator, In Design, Premiere e Corel Draw.`
    titleProject.textContent = 'Projetos'
    // paragraphProject.textContent = 'Projetos'
    titleSkills.textContent = 'Habilidades'
}

function activeEnglish() {
    console.log('activeEnglish')

    flags[0].style.opacity = .5
    flags[1].style.opacity = 1

    titleAbout.textContent = 'About Me'
    paragraphAbout.textContent = `Hi, my name is Matheus Palmieri, I'm a Front-end developer. I program in JavaScript, React Native, Git, GitHub, HTML and CSS. Studying Bootstrap, PHP and Vue. Currently studying the Structure and Operation of Google Networks. Knowledge in Graphic Designer, such as Adobe Photoshop, Illustrator, In Design, Premiere and Corel Draw.`
    titleProject.textContent = 'Projects'
    // paragraphProject.textContent = 'Technologies used'
    titleSkills.textContent = 'Skills'
}

toggleLanguage.forEach(item => {
    item.onclick = () => {
        toggleLanguage.forEach(item => item.classList.remove('active'))
        item.classList.add('active')
        item.id === 'languagePT' ? activePortuguese() : activeEnglish()
    }
})
