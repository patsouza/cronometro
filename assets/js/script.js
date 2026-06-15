let timer = document.querySelector('.cronometro');
let timerId = null;
const iniciarBtn = document.querySelector('.iniciar');
const pausarBtn = document.querySelector('.pausar');
const zerarBtn = document.querySelector('.zerar');

let segundos = 0;
let minutos = 0;
let horas = 0;

const atualizarCronometro = () => {
  const segundosFormatados = String(segundos).padStart(2, '0');
  const minutosFormatados = String(minutos).padStart(2, '0');
  const horasFormatadas = String(horas).padStart(2, '0');
  timer.innerHTML = `${horasFormatadas}:${minutosFormatados}:${segundosFormatados}`;
}

const iniciarCronometro = () => {
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
}

const pararIntervalo = () => {
  clearInterval(timerId)
}

iniciarBtn.addEventListener("click", iniciarCronometro);
pausarBtn.addEventListener("click", pararIntervalo)
zerarBtn.addEventListener("click", () => {
  pararIntervalo()
  segundos = 0;
  minutos = 0;
  horas = 0;
  timer.innerHTML = `00:00:00`
});



