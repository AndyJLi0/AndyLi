function toggleDarkMode() {
    document.body.classList.toggle("latex-dark");
}

document.addEventListener('keydown', function (event) {
    if (event.altKey && (event.key === 't' || event.key === 'T')) {
        toggleDarkMode();
    }
});

function downloadResume() {
    const a = document.createElement('a');
    a.href = './assets/Andy Li Resume.pdf';
    a.download = 'Andy_Li_Resume.pdf';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
  }
  