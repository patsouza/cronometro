let timer = document.querySelector('.cronometro');
let timerId = null;
const iniciarBttn = document.querySelector('.iniciar');
const pausarBttn = document.querySelector('.pausar');
const zerarBttn = document.querySelector('.zerar');

// Iniciar timer
let contador = 0;
let segundos = 0;
let minutos = 0;
let horas = 0;

iniciarBttn.addEventListener("click", () => {
  clearInterval(timerId)
  timerId = setInterval(() => {
    segundos++;
    segundos = String(segundos).padStart(2, '0');
    minutos = String(minutos).padStart(2, '0');
    horas = String(horas).padStart(2, '0');
    
    if (segundos === '59') {
      segundos = '00';
      minutos++
      minutos = String(minutos).padStart(2, '0');
    }

    if (minutos === '59') {
      minutos = '00';
      horas++
      horas = String(horas).padStart(2, '0');
    }
    
    timer.innerHTML = `${horas}:${minutos}:${segundos}`;
  }, 1000)
});

zerarBttn.addEventListener("click", () => {
  clearInterval(timerId)
  contador = 0;
  timer.innerHTML = `00:00:00`
});



