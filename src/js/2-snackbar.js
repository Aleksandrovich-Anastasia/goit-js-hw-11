import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";
import spriteUrl from '../img/sprite.svg';


const form = document.querySelector('.form');

form.addEventListener('submit', event => {
  event.preventDefault();

  const delay = Number(form.elements.delay.value);
  const state = form.elements.state.value;

  createPromise(delay, state)
    .then(delay => {
      iziToast.success({
        message: `
          <svg class="toast-icon" width="24" height="24">
                <use xlink:href="${spriteUrl}#icon-ok"></use>
              </svg>
              <span class="toast-text-acc">Error</span>
              <span class="toast-text">Fulfilled promise in ${delay}ms</span>`,
        position: 'topRight',
        timeout: 3000,
        icon: '',
        close: false,
        class: 'custom-toast custom-toast-success',  
      });
    })
    .catch(delay => {
      iziToast.error({
        message: `
          <svg class="toast-icon" width="24" height="24">
                <use xlink:href="${spriteUrl}#icon-error"></use>
              </svg>
              <span class="toast-text-acc">Error</span>
              <span class="toast-text">Rejected promise in ${delay}ms</span>`,
        position: 'topRight',
        icon: '',
        timeout: 3000,
        close: false,
        class: 'custom-toast custom-toast-error',  
      });
    });

  form.reset();
});

function createPromise(delay, state) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (state === 'fulfilled') {
        resolve(delay);
      } else {
        reject(delay);
      }
    }, delay);
  });
}
