var skillsContainer = document.querySelectorAll('.skillsCard')
var skills = ['html5', 'css3', 'javascript', 'react', 'php', 'git', 'mysql', 'photoshop', 'premierepro']
var skillsName = ['HTML 5', 'CSS 3', 'JavaScript', 'React', 'PHP', 'Git', 'MySql', 'Photoshop', 'Premiere']
var skillsColor = ['#FF5F1E', '#2196F3', '#FFDF00', '#5ADAFD', '#777BA3', '#F15233', '#00758F', '#00D4FF', '#9A9AFF']

for(var idx = 0; idx <= 8; idx++) {

    skillsContainer[idx].innerHTML = `
        <i class="devicon-${skills[idx]}-plain" style="--color-icon:${skillsColor[idx]}"></i>

        <p class="skills-title" style="--color-icon:${skillsColor[idx]}">${skillsName[idx]}</p>
    `
}

skillsContainer.forEach(item => {
    item.onclick = () => {
        if(item.classList[1] === 'activeColor') return skillsContainer.forEach(item => item.classList.remove('activeColor'))
        
        skillsContainer.forEach(item => item.classList.remove('activeColor'))
        item.classList.add('activeColor')
    }
})