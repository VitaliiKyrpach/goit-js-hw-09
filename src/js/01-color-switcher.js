const body = document.querySelector('body');
const start = document.querySelector('[data-start]');
const stop = document.querySelector('[data-stop]');

start.addEventListener('click', onClick);
stop.setAttribute('disabled', '');
function onClick() {
  start.setAttribute('disabled', '');
  stop.removeAttribute('disabled');
  const autoSwitch = setInterval(() => {
    body.style.backgroundColor = getRandomHexColor();
  }, 1000);
  stop.addEventListener('click', onStop);
  function onStop() {
    clearInterval(autoSwitch);
    start.removeAttribute('disabled');
    stop.setAttribute('disabled', '');
    stop.removeEventListener('click', onStop);
  }
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
