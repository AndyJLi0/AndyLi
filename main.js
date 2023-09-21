function toggleSection(id) {
    const section = document.getElementById(id);
    let icon;
    if (id === "projects-content") {
        icon = document.getElementById("dropdown-icon-projects");
    } else {
        icon = document.getElementById("dropdown-icon-skills");
    }

    if (section.style.maxHeight === "0px" || !section.style.maxHeight) {
        const contentHeight = section.scrollHeight;

        section.classList.add("animating");

        section.style.maxHeight = `${contentHeight}px`;

        icon.classList.add("rotate-180");

        icon.addEventListener("transitionend", function () {
            icon.classList.replace("fa-chevron-down", "fa-chevron-up");
            icon.classList.remove("rotate-180");
        }, { once: true });

        setTimeout(() => {
            section.classList.remove("animating");
        }, 500);
    } else {
        section.style.maxHeight = "0px";

        icon.classList.add("rotate-180");
        icon.addEventListener("transitionend", function () {
            icon.classList.replace("fa-chevron-up", "fa-chevron-down");
            icon.classList.remove("rotate-180");
        }, { once: true });

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
