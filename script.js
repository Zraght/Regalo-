const poema2020 = document.getElementById('poema2020');
const boton2025 = document.getElementById('boton2025');
const video = document.getElementById('video2025');
const poema2025 = document.getElementById('poema2025');
const fraseFinal = document.getElementById('frase-final');
const volverBtn = document.getElementById('volver');
const contenedorLineas = document.getElementById('lineas-poema');

const lineasPoema = [
  "Cuando todo era simple y sin condición,",
  "brillabas sin dar explicación.",
  "Con pasos suaves, sonrisas sinceras,",
  "sin saber que ya eras primavera.",
  "",
  "Vinieron pruebas, caminos cerrados,",
  "y tú seguiste avanzando, aún en caminos quebrados.",
  "Decías “soy fuerte” en tu caminar,",
  "como quien lucha sin aparentar.",
  "",
  "No es fácil subir a la cima cuando hay peso,",
  "pero tú sigue avanzando, sin dar retroceso.",
  "Porque en cada paso, Dios va contigo con un amor sin condición,",
  "Y es Él quien siempre guía tus pasos y tu gran corazón",
  "",
  "Yo siempre estuve presente, dispuesto a ayudarte",
  "Ser quien te escuche, sin necesidad de juzgarte",
  "Porque no puedo alejarme, ni dejar de cuidar,",
  "a quien tanto aprendí a atesorar"
];

const mensajeFinal = "“Nunca dejes de florecer, para así poder disfrutar y admirar un mejor amanecer.”";

boton2025.addEventListener('click', () => {
  poema2020.style.display = 'none';
  boton2025.style.display = 'none';
  video.style.display = 'block';
  poema2025.classList.remove('oculto');
  mostrarLineasPoema(0);
});

function mostrarLineasPoema(i) {
  if (i < lineasPoema.length) {
    contenedorLineas.innerHTML = `<p class="linea">${lineasPoema[i]}</p>`;
    contenedorLineas.style.opacity = 0;
    setTimeout(() => contenedorLineas.style.opacity = 1, 100);
    setTimeout(() => {
      contenedorLineas.style.opacity = 0;
      mostrarLineasPoema(i + 1);
    }, 4000);
  } else {
    mostrarFraseFinal();
  }
}

function mostrarFraseFinal() {
  contenedorLineas.innerHTML = ''; // limpiar líneas
  fraseFinal.innerText = mensajeFinal;
  fraseFinal.classList.remove('oculto');
  iniciarBrillos();
  volverBtn.classList.remove('oculto');
}

volverBtn.addEventListener('click', () => {
  location.reload();
});

function iniciarBrillos() {
  const canvas = document.getElementById('brillosCanvas');
  const ctx = canvas.getContext('2d');

  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;

  let brillos = [];

  for (let i = 0; i < 100; i++) {
    brillos.push({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      r: Math.random() * 2 + 1,
      d: Math.random() * 1 + 0.5
    });
  }

  function dibujar() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.fillStyle = "#fff57c";
    ctx.shadowBlur = 10;
    ctx.shadowColor = "#fff570";
    for (let i = 0; i < brillos.length; i++) {
      let b = brillos[i];
      ctx.beginPath();
      ctx.arc(b.x, b.y, b.r, 0, Math.PI * 2);
      ctx.fill();
    }
    actualizar();
  }

  function actualizar() {
    for (let i = 0; i < brillos.length; i++) {
      let b = brillos[i];
      b.y += b.d;
      if (b.y > canvas.height) {
        b.y = 0;
        b.x = Math.random() * canvas.width;
      }
    }
  }

  function loop() {
    dibujar();
    requestAnimationFrame(loop);
  }

  loop();
}
