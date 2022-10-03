var body = document.querySelector('body')
var switchTheme = document.getElementById('switchTheme')
var notebook = document.getElementById('notebook')

function toggleTheme() {
    if(switchTheme.checked) {
        body.classList.remove('themeDark')
        body.classList.add('themeLight')
        notebook.src = "image/notebookLight.png"
    } else {
        body.classList.remove('themeLight')
        body.classList.add('themeDark')
        notebook.src = "image/coffee.png"
        // notebook.src = "image/notebookWhite.png"
        // notebook.src = "image/notebookDark.png"
    }
}

switchTheme.addEventListener('click', toggleTheme)