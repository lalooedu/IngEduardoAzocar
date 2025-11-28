const scrollUp = document.getElementById('scroll-up');
const scrollDown = document.getElementById('scroll-down');
const rightSection = document.querySelector('.right');

function toggleScrollButtons() {
  if (rightSection.scrollHeight > rightSection.clientHeight) {
    scrollUp.style.display = 'block';
    scrollDown.style.display = 'block';
  } else {
    scrollUp.style.display = 'none';
    scrollDown.style.display = 'none';
  }
}

// Ejecutar al cargar la página
toggleScrollButtons();

// Ejecutar también al cambiar tamaño de ventana
window.addEventListener('resize', toggleScrollButtons);

const $bigBall = document.querySelector('.cursor__ball--big');
const $smallBall = document.querySelector('.cursor__ball--small');
const $hoverables = document.querySelectorAll('.hoverable');

// Listeners
document.body.addEventListener('mousemove', onMouseMove);
for (let i = 0; i < $hoverables.length; i++) {
  $hoverables[i].addEventListener('mouseenter', onMouseHover);
  $hoverables[i].addEventListener('mouseleave', onMouseHoverOut);
}

// Move the cursor
function onMouseMove(e) {
  TweenMax.to($bigBall, .4, {
    x: e.pageX - 15,
    y: e.pageY - 15
  })
  TweenMax.to($smallBall, .1, {
    x: e.pageX - 5,
    y: e.pageY - 7
  })
}

// Hover an element
function onMouseHover() {
  TweenMax.to($bigBall, .3, {
    scale: 2.5
  })
}
function onMouseHoverOut() {
  TweenMax.to($bigBall, .3, {
    scale: 1
  })
}
//Oculatar parte de la derecha 

document.addEventListener("DOMContentLoaded", function () {
const links = document.querySelectorAll(".nav-link");
const sections = document.querySelectorAll(".right section");

function showSection(id) {
    sections.forEach(section => {
    section.classList.remove("active");
      if (section.id === id) {
        section.classList.add("active");
        }
      });
    }

    // Mostrar la primera sección al cargar (ej. About)
    showSection("about");

    links.forEach(link => {
      link.addEventListener("click", function (e) {
        e.preventDefault(); // Evita el scroll por defecto
        const targetId = this.getAttribute("href").substring(1); // Elimina el #
        showSection(targetId);
      });
    });
  });
// Inicializamos EmailJS con tu Public Key
emailjs.init("LKKxpq41q4b10AJB4"); // ⬅️ Reemplazá esto

document.querySelector("#contact-form").addEventListener("submit", function (e) {
  e.preventDefault();

  emailjs.sendForm("service_eduardoazocar", "template_3c2obdf", this) // ⬅️ Reemplazá con los tuyos
    .then(function () {
      alert("✅ ¡Mensaje enviado con éxito!");
      e.target.reset();
    }, function (error) {
      console.error("❌ Error:", error);
      alert("Error al enviar el mensaje. Inténtalo más tarde.");
    });
});

root = document.documentElement;
const clientLogo = document.querySelectorAll(".slide"),
slideTrack = document.querySelector(".slide_track"),
clientLogoLength = clientLogo.length/2;

/* Width Change */
slideTrack.style.width = `${clientLogoLength*250}px`

/* Animation Change */
root.style.setProperty('--change', -(clientLogoLength*250) + "px");
root.style.setProperty('--animationSpeed', (clientLogoLength*5) + "s");