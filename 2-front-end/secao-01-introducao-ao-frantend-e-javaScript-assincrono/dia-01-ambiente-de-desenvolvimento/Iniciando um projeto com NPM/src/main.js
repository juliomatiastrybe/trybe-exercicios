import { nanoid } from 'nanoid';
import './style.css';
import copy from 'clipboard-copy';

const passwordBtnEl = document.querySelector('button');
const displayPasswordEl = document.querySelector('h2');
const copyBtn = document.querySelector('#copy-password');
const displayAlertEl = document.querySelector('p');

passwordBtnEl.addEventListener('click', () => {
  const randomPassword = nanoid();
  displayPasswordEl.innerHTML = randomPassword;
});

copyBtn.addEventListener('click', () => {
  if (displayPasswordEl.innerHTML === '...') {
    displayAlertEl.innerHTML = 'Senha precisa ser gerada...';
  } else {
    copy(displayPasswordEl.innerHTML);
    displayAlertEl.innerHTML = 'Senha copiada.';
  }
});
