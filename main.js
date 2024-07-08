
/* ############### COURSES ############### */

var technical = {
  "technical": [
    {
      "id": "languages",
      "title": "Languages",
      "description": "a List in no particular order of the programming languages I'm most proficient in.",
      "items": [
        "C",
        "C++",
        "Java",
        "MATLAB",
        "Python",
        "JavaScript"
      ]
    },
    {
      "id": "tools",
      "title": "Tools",
      "description": "A list of the tools and technologies that I'm comfortable with using",
      "items": [
        "Git",
        "Bash",
        "Linux",
        "Visual Studio",
        "OpenGL",
        "Valgrind",
        "GDB"
      ]
    },
    {
      "id": "libraries",
      "title": "Libraries",
      "description": "A list of the libraries and framekworks that I've used in my projects.",
      "items": [
        "Junit",
        "Pytest",
        "Selenium",
        "Mocha & Chai",
        "Flask",
        "React"
      ]
    }
  ]
}

var technicalTemplate = document.getElementById('technical-template').innerHTML;
var renderedTechnicalTemplate = Mustache.render(technicalTemplate, technical);
document.getElementById('technical').innerHTML = renderedTechnicalTemplate;

var technicalNavTemplate = document.getElementById('technical-nav-template').innerHTML;
var renderedTechnicalNavTemplate = Mustache.render(technicalNavTemplate, technical);
document.getElementById('nav-technical').innerHTML = renderedTechnicalNavTemplate;


/* ############### PROJECTS ############### */

var projects = {
  "projects": [
    {
      "id": "raytracer",
      "title": "Ray Tracer",
      "description": `
        This is a ray tracer in C++ that supports rendering diffuse, reflective, and metalic spheres. it supports a positionable camera, a configurable field of view, and a defocus blur adjustment. I followed Peter Shirley's <i>Ray Tracing in One Weekend</i>, and it was a fun introduction to writing shaders. <a href=https://github.com/andyjli0/raytracer>GitHub repository</a>.
        `,
      "Technologies": [
        "C++", "Make",
      ]
    },
    {
      "id": "punch-n-run",
      "title": "Punch-n-Run",
      "description": `
      Punch-n-Run is a 2d endless runner game where the player must punch their way through obstacles. It uses computer vision to detect the player's hand and control the game and players must time their punches with the character in game. The game was developed in Python. <a href=https://github.com/andyjli0/Punch-and-Run>GitHub repository</a>.
        `,
      "Technologies": [
        "Python", "Tensorflow", "OpenCV", "MediaPipe", "Pygame"
      ]
    },
    {
      "id": "imagecompressor",
      "title": "Image Compressor",
      "description": `
        This is a simple image compressor in C++ that uses a quadtree image compression technique. The algorithm was written by myself and supports utility functions for image manipulation like rotating and reflection. The algorithm itself is recursive, however the code is further optimized using dynamic programming to reduce the the utility functions' time complexity. <a href=https://gitfront.io/r/Andyjli0/FonBdihK2nYb/Image-Compressor/>GitHub repository</a>.
        `,
      "Technologies": [
        "C++", "CMake", "GDB", "Valgrind"
      ]
    },
    {
      "id": "gravitysimulator",
      "title": "Gravity Simulator",
      "description": `
      This is under construction.
        `,
      "Technologies": [
        "This is under construction."
      ]
    },

    {
      "id": "anthill",
      "title": "Anthill",
      "description": `
        This is under construction.
        `,
      "Technologies": [
        "This is under construction."
      ]
    }
  ]
};


var projectTemplate = document.getElementById('project-template').innerHTML;
var renderedProjectTemplate = Mustache.render(projectTemplate, projects);
document.getElementById('projects').innerHTML = renderedProjectTemplate;

var projectNavTemplate = document.getElementById('project-nav-template').innerHTML;
var renderedProjectNavTemplate = Mustache.render(projectNavTemplate, projects);
document.getElementById('nav-projects').innerHTML = renderedProjectNavTemplate;

var talks = {
  "talks": [
    {
      "id": "fluidsimulation",
      "title": "An Introduction to Eulerian Fluid Simulation",
      "description": `
      A Talk I gave at the 2024 Canadian Undergraduate Mathematics Conference.
        `,
      "abstract": `Have you ever wondered how movies and games create such realistic fluid flows, like the flowing water of a river or the rising smoke from a fire? Fluid simulators are tools that make these effects possible in the virtual world. In this talk, I will discuss the fundamental properties of fluids, walk through how to create a basic fluid solver, and the math behind everything. We will cover the necessary mathematics, including the Naiver-Stokes equations, basic numerical methods, and the fundamentals of vector calculus, to achieve our goal.`,
      
      "slides": ` `
    }
  ]
};

var talkTemplate = document.getElementById('talk-template').innerHTML;
var renderedTalkTemplate = Mustache.render(talkTemplate, talks);
document.getElementById('talks').innerHTML = renderedTalkTemplate;
// no seperate nav part, apart of projects for now.

var canvas;



let particles = [];

const SCALE = 0.01;
let SPEED = 5;
const VARIATION = 5000;

const TRAILS = 10;
const RES = 7;
const MAX_PARTICLES = 2500;
const BALL_SZ = 2;

function setup() {
  canvas = createCanvas(windowWidth, windowHeight);
  canvas.style('z-index', '-1');
  canvas.position(0, window.scrollY);
  background(240, 240, 240);

}
function draw() {
  SPEED = 1.5;
  noiseDetail(RES, 0.5);
  background(255, 255, 255, TRAILS);

  if (particles.length < MAX_PARTICLES)
    for (let i = 0; i < 5; i++)
      particles.push(createVector(Math.random() * width, Math.random() * height))

  particles.forEach((p) => {
    const angle = noise(
      p.x * SCALE,
      p.y * SCALE,
      millis() / VARIATION
    ) * 2 * PI;
    const dp = p5.Vector.fromAngle(angle, SPEED);
    stroke(0, 50);
    strokeWeight(BALL_SZ);
    point(p.x, p.y);
    p.add(dp);

    p.x = (p.x + width) % width;
    p.y = (p.y + height) % height;
  })
}


function windowScrolled() {
  canvas.position(0, window.scrollY);
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}

window.addEventListener('scroll', windowScrolled);

// function resetSketch() {
//   reset_variables();
//   loop();
//   setup(); // Call the setup function to reset the sketch
// }

// function stopSketch() { // Set the canvas background to white
//   noLoop();
// }