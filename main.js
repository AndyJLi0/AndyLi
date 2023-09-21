function toggleSection(id) {
    const section = document.getElementById(id);
    if (section.style.maxHeight === "0px" || !section.style.maxHeight) {
        const contentHeight = section.scrollHeight;

        section.classList.add("animating");

        section.style.maxHeight = `${contentHeight}px`;

        setTimeout(() => {
            section.classList.remove("animating");
        }, 500);
    } else {
        section.style.maxHeight = "0px";
    }
}


function toggleDarkMode() {
    document.body.classList.toggle("latex-dark");
}

document.addEventListener('keydown', function (event) {
    if (event.altKey && (event.key === 't' || event.key === 'T')) {
        toggleDarkMode();
    }
});

function threeBodySystem() {
    window.open('https://github.com/AndyJLi0/3-body-problem-visualization', '_blank')
}


function javaCards() {
    window.open('https://github.com/AndyJLi0/JavaCards', '_blank')
}

function promptGuesser() {
    window.open('https://github.com/Raywnh/imguessr.ai', '_blank')
}
