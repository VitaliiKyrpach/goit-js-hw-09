import { Notify } from 'notiflix/build/notiflix-notify-aio';

function createPromise(position, delay) {
  return new Promise((resolve, reject) => {
    const shouldResolve = Math.random() > 0.3;
    setTimeout(() => {
      if (shouldResolve) {
        resolve(`✅ Fulfilled promise ${position} in ${delay}ms`);
      } else {
        reject(`❌ Rejected promise ${position} in ${delay}ms`);
      }
    }, delay);
  });
}

function onSubmit(evt) {
  evt.preventDefault();
  const {
    elements: { amount, delay, step },
  } = evt.currentTarget;
  let countDel = Number(delay.value);

  for (let i = 0; i < amount.value; i++) {
    createPromise(i + 1, countDel + Number(step.value) * i)
      .then(value => {
        Notify.success(value);
      })
      .catch(error => {
        Notify.failure(error);
      });
  }
}

const form = document.querySelector('form');
form.addEventListener('submit', onSubmit);
