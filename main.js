function toggleSection(id) {
    const section = document.getElementById(id);
    let icon;
    switch (id) {
        case "projects-content":
            icon = document.getElementById("dropdown-icon-projects");
            break;
        case "skills-content": 
            icon = document.getElementById("dropdown-icon-skills");
            break;
        case "resume-content":
            icon = document.getElementById("dropdown-icon-resume"); 
            break;
        default:
            console.error("Unknown section id:", id);
            return;  // Exit the function on unknown id
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


function rayTracer() {
    window.open('https://github.com/AndyJLi0/RayTracer', '_blank')
}

function prunify() {
    window.open('https://gitfront.io/r/Andyjli0/FonBdihK2nYb/Image-Compressor/', '_blank')
}

function threeBodySystem() {
    window.open('https://github.com/AndyJLi0/3-body-problem-visualization', '_blank')
}

function javaCards() {
    window.open('https://github.com/AndyJLi0/JavaCards', '_blank')
}

function promptGuesser() {
    window.open('https://github.com/Raywnh/imguessr.ai', '_blank')
}


