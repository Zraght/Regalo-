const passwordInput = document.getElementById("inputPassword");
const verificarBtn = document.getElementById("verificarPassword");
const errorPassword = document.getElementById("errorPassword");
const pantallaPassword = document.getElementById("pantalla-password");
const contenido = document.getElementById("contenido");

verificarBtn.addEventListener("click", () => {
  if (passwordInput.value === "poema2020") {
    pantallaPassword.style.display = "none";
    contenido.classList.remove("oculto");
  } else {
    errorPassword.textContent = "Contraseña incorrecta.";
  }
});

// Brillos (Canvas opcional)
const canvas = document.getElementById("brillosCanvas");
const ctx = canvas.getContext("2d");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
let brillos = [];

for (let i = 0; i < 80; i++) {
  brillos.push({
    x: Math.random() * canvas.width,
    y: Math.random() * canvas.height,
    r: Math.random() * 1.5 + 0.5,
    dx: Math.random() * 0.3,
    dy: Math.random() * 0.3
  });
}

function dibujarBrillos() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  brillos.forEach(b => {
    ctx.beginPath();
    ctx.arc(b.x, b.y, b.r, 0, Math.PI * 2);
    ctx.fillStyle = "#fff59d";
    ctx.fill();
    b.x += b.dx;
    b.y += b.dy;
    if (b.x > canvas.width || b.y > canvas.height) {
      b.x = Math.random() * canvas.width;
      b.y = 0;
    }
  });
  requestAnimationFrame(dibujarBrillos);
}
dibujarBrillos();

// Poema 2025
const boton2025 = document.getElementById("boton2025");
const seccion2020 = document.getElementById("poema2020");
const seccion2025 = document.getElementById("poema2025");
const lineasPoema = document.getElementById("lineas-poema");
const fraseFinal = document.getElementById("fraseFinal");
const volverBtn = document.getElementById("volver");

const versos = [
  "Nunca supe por qué llegaste, 🌻",
  "ni por qué te quedaste en mis días más fríos.",
  "Tampoco entendí por qué me diste calma,",
  "ni por qué incluso en tu ausencia, sonreía contigo.",
  "Solo sé que mientras florezcas...",
  "yo también encontraré una razón para seguir 🌅"
];

let index = 0;

boton2025.addEventListener("click", () => {
  seccion2020.classList.add("oculto");
  seccion2025.classList.remove("oculto");
  mostrarVersos();
});

function mostrarVersos() {
  if (index < versos.length) {
    const linea = document.createElement("p");
    linea.textContent = versos[index];
    linea.style.animation = "fadeUp 1.5s ease";
    lineasPoema.appendChild(linea);
    index++;
    setTimeout(mostrarVersos, 2500);
  } else {
    fraseFinal.classList.remove("oculto");
    fraseFinal.style.opacity = "1";
    volverBtn.style.display = "block";
  }
}

volverBtn.addEventListener("click", () => {
  lineasPoema.innerHTML = "";
  fraseFinal.style.opacity = "0";
  volverBtn.style.display = "none";
  index = 0;
  mostrarVersos();
});
