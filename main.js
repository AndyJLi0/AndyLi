
/* ############### COURSES ############### */

var technical = {
  "technical": [
    {
      "id": "languages",
      "title": "Languages",
      "description": "Here are the programming languages I use most frequently.",
      "items": [
        "Python",
        "MATLAB",
        "JavaScript",
        "HTML",
        "CSS",
        "SQL"
      ]
    },
    {
    },
    {
      "id": "tools",
      "title": "Tools",
      "description": "Here are the tools I use most frequently.",
      "items": [
        "Jupyter",
        "MATLAB Online",
        "GitHub",
        "D3",
        "Flask",
        "SQLite"
      ]
    },
    {
      "id": "libraries",
      "title": "Libraries",
      "description": "Here are the libraries I use most frequently.",
      "items": [
        "NumPy",
        "SciPy",
        "Matplotlib",
        "Pandas",
        "Seaborn",
        "Plotly",
        "D3",
        "Flask",
        "SQLite"
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

var courses = {
  "courses": [
    {
      "id": "math210",
      "code": "MATH 210",
      "title": "Introduction to Mathematical Computing",
      "goals": [
        "Create computational narratives in <a href='https://jupyter.org'>Jupyter</a> notebooks with explanatory text written in <a href='https://en.wikipedia.org/wiki/Markdown'>markdown</a>, mathematical equations rendered with <a href='https://www.latex-project.org'>LaTeX</a> and computations executed by <a href='https://python.org'>Python</a> code",
        "Perform matrix computations with <a href='https://numpy.org'>NumPy</a>, create mathematical graphics with <a href='https://matplotlib.org'>Matplotlib</a> and implement mathematical algorithms with <a href='https://scipy.org/scipylib'>SciPy</a>",
        "Approximate solutions of non-linear equations",
        "Approximate definite integrals and estimate error",
        "Compute solutions of large linear systems of equation",
        "Approximate solutions of ordinary differential equations"
      ],
      "resources": [
        "<a href='docs/math210_outline_2023W2.pdf'>Course Outline 2023W2</a>",
        "<a href='https://patrickwalls.github.io/mathematicalpython'>Mathematical Python</a>",
        "Jupyter notebooks on <a href='https://ubc.syzygy.ca'>Syzygy</a>",
        "Lecture notes on <a href='https://github.com/ubc-math210'>GitHub</a>",
        "Lecture time and location: <a href='https://courses.students.ubc.ca/cs/courseschedule?pname=subjarea&tname=subj-course&dept=MATH&course=210'>UBC Course Schedule</a>"
      ]
    },
    {
      "id": "math258",
      "code": "MATH 258",
      "title": "Differential Equations for Mechanical Engineering",
      "goals": [
        "Compute analytical solutions of first and second order differential equations",
        "Compute the Laplace transform of elementary functions and apply the tranform to differential equations",
        "Describe qualitative properties of non-linear systems of differential equations by graphical methods",
        "Create mathematical models of real-world phenomenon such as fluid mixing, friction, drag, vibrations and RLC circuits",
        "Approximate and visualize solutions of differential equations with <a href='https://www.mathworks.com/products/matlab.html'>MATLAB</a>"
      ],
      "resources": [
        "<a href='docs/math258_outline.pdf'>Course Outline</a>",
        "<a href='https://www.jirka.org/diffyqs/'>Notes on DiffyQs</a> by Jiri Lebl",
        "<a href='https://matlab.mathworks.com'>MATLAB Online</a>",
        "More information about <a href='https://mech.ubc.ca/undergraduate/mech-2/'>MECH 2</a>"
      ]
    },
    {
      "id": "math254",
      "code": "MATH 254",
      "title": "Multivariable and Vector Calculus for Mechanical Engineering",
      "goals": [
        "Compute double and triple integrals in cartesian, polar and spherical coordinates",
        "Compute partial derivatives of functions of several variables",
        "Find extreme values of functions of several variables",
        "Compute line and surface integrals of vector fields",
        "Summarize integral equations given by the Divergence Theorem, Stokes Theorem and the Fundamental Theorem of Line Integrals",
        "Create mathematical models of real-world phenomenon arising in fluid dynamics and thermodynamics",
        "Approximate definite integrals and visualize curves and surfaces in 3D with <a href='https://www.mathworks.com/products/matlab.html'>MATLAB</a>"
      ],
      "resources": [
        "<a href='docs/math254_outline.pdf'>Course Outline</a>",
        "<a href='http://www.apexcalculus.com'>APEX Calculus</a> by Gregory Hartman",
        "<a href='https://matlab.mathworks.com'>MATLAB Online</a>",
        "More information about <a href='https://mech.ubc.ca/undergraduate/mech-2/'>MECH 2</a>"
      ]
    },
    {
      "id": "math307",
      "code": "MATH 307",
      "title": "Applied Linear Algebra",
      "goals": [
        "Summarize properties and constructions of matrix decompositions LU, QR and SVD",
        "Perform matrix computations using mathematical software <a href='https://python.org'>Python</a>, <a href='https://scipy.org'>SciPy</a> and <a href='https://jupyter.org'>Jupyter</a>",
        "Compute solutions of large systems of linear equations using matrix decompositions",
        "Compute least squares approximations of large linear systems using matrix decompositions",
        "Compute eigenvalues of large matrices using iterative methods",
        "Analyze digital signals using the discrete Fourier transform",
        "Create mathematical models of real-world phenomenon such as computed tomography and digital signal processing"
      ],
      "resources": [
        "<a href='https://ubcmath.github.io/MATH307/'>MATH 307 Course Notes</a>",
        "<a href='docs/math307_outline_2022W1.pdf'>Course Outline 2022W1</a>",
        "Lecture time and location: <a href='https://courses.students.ubc.ca/cs/courseschedule?pname=subjarea&tname=subj-course&dept=MATH&course=307'>UBC Course Schedule</a>"
      ]
    },
    {
      "id": "math441",
      "code": "MATH 441",
      "title": "Discrete Optimization Problems",
      "goals": [
        "Formulate well-defined optimization problems based on real-world phenomena",
        "Describe and contrast algorithms for solving optimization problems",
        "Describe and contrast the computational complexity of optimization problems",
        "Use mathematical software to compute solutions of optimization problems",
        "Communicate solutions of optimization problems to a general mathematical audience"
      ],
      "resources": [
        "<a href='docs/math441_outline_2023W2.pdf'>Course Outline 2023W2</a>",
        "<a href='docs/math441_project_2023W2.pdf'>Project Outline 2023W2</a>",
        "<a href='docs/math441_portfolio_2023W2.pdf'>Learning Portfolio Outline 2023W2</a>"
      ]
    }
  ]
};

// var courseTemplate = document.getElementById('course-template').innerHTML;
// var renderedCourseTemplate = Mustache.render(courseTemplate, courses);
// document.getElementById('courses').innerHTML = renderedCourseTemplate;

// var courseNavTemplate = document.getElementById('course-nav-template').innerHTML;
// var renderedCourseNavTemplate = Mustache.render(courseNavTemplate, courses);
// document.getElementById('nav-courses').innerHTML = renderedCourseNavTemplate;

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
        "Python", "Tensorflow", "OpenCV", "MediaPipe",  "Pygame"
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
      "id": "fluidsimulation",
      "title": "A Talk on Fluid Simulation",
      "description": `
      This is under construction.
        `,
      "Technologies": [
        "This is under construction."
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

var canvas;



let particles = [];

const SCALE = 0.01;
let SPEED = 2;
const VARIATION = 10000;

const TRAILS = 10;
const RES = 4;
const MAX_PARTICLES = 1500;
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
  
  if(particles.length < MAX_PARTICLES)
    for(let i = 0; i< 5; i++)
      particles.push(createVector(Math.random()*width,Math.random()*height))

  particles.forEach((p)=>{
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