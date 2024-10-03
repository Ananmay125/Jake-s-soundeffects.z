const themeToggle = document.getElementById('themeToggle');
const mainStylesheet = document.getElementById('main-stylesheet');
const secStylesheet = document.getElementById('sec-stylesheet');

function toggleTheme() {
    document.body.classList.toggle('dark-mode');

    if (document.body.classList.contains('dark-mode')) {
        mainStylesheet.href = "../css/light-mode/index.css";
        secStylesheet.href = "../css/light-mode/audio-player.css";
        themeToggle.src = "../Images/light-dark/theme-dark.svg";
    } else {
        mainStylesheet.href = "../css/index.css";
        secStylesheet.href = "../css/audio-player.css";
        themeToggle.src = "../Images/light-dark/theme-light.svg";
    }
}

themeToggle.addEventListener('click', toggleTheme);