let timer = document.querySelector('.cronometro');
let timerId = null;
const iniciarBttn = document.querySelector('.iniciar');
const pausarBttn = document.querySelector('.pausar');
const zerarBttn = document.querySelector('.zerar');

// Iniciar timer
let segundos = 0;
let minutos = 0;
let horas = 0;

iniciarBttn.addEventListener("click", () => {
  clearInterval(timerId)
  timerId = setInterval(() => {
    segundos++;

    if (segundos === 60) {
      segundos = 0;
      minutos++
    }

    if (minutos === 60) {
      minutos = 0;
      horas++
    }

    atualizarCronometro()

  }, 1000)
});

const atualizarCronometro = () => {
  const segundosFormatados = String(segundos).padStart(2, '0');
  const minutosFormatados = String(minutos).padStart(2, '0');
  const horasFormatadas = String(horas).padStart(2, '0');
  timer.innerHTML = `${horasFormatadas}:${minutosFormatados}:${segundosFormatados}`;
}

zerarBttn.addEventListener("click", () => {
  clearInterval(timerId)
  segundos = 0;
  minutos = 0;
  horas = 0;
  timer.innerHTML = `00:00:00`
});



