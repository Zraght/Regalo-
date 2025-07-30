const poema2020 = document.getElementById('poema2020');
const boton2025 = document.getElementById('boton2025');
const video = document.getElementById('video2025');
const poema2025 = document.getElementById('poema2025');
const fraseFinal = document.getElementById('frase-final');
const volverBtn = document.getElementById('volver');

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
  poema2025.style.display = 'block';

  mostrarLineasPoema(0);
});

function mostrarLineasPoema(i) {
  if (i < lineasPoema.length) {
    poema2025.innerText = lineasPoema[i];
    poema2025.style.opacity = 0;
    setTimeout(() => poema2025.style.opacity = 1, 100);
    setTimeout(() => {
      poema2025.style.opacity = 0;
      mostrarLineasPoema(i + 1);
    }, 4000);
  } else {
    mostrarFraseFinal();
  }
}

function mostrarFraseFinal() {
  poema2025.style.display = 'none';
  fraseFinal.innerText = mensajeFinal;
  fraseFinal.style.display = 'block';
  iniciarBrillos();
  volverBtn.style.display = 'block';
}

// VOLVER A VER
volverBtn.addEventListener('click', () => {
  location.reload();
});

// BRILLOS INTERACTIVOS (Canvas)
function iniciarBrillos() {
  const canvas = document.createElement('canvas');
  document.body.appendChild(canvas);
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
