const inputEmail = document.querySelector('#email-login');
const inputPassword = document.querySelector('#password-login');
const btnSubmitFormHeader = document.querySelector('form button');
const btnSubmitFormMain = document.querySelector('#submit-btn');
const checkboxAgreement = document.querySelector('#agreement');
const loginObject = { email: '', password: '' };
inputEmail.addEventListener('change', () => {
  loginObject.email = inputEmail.value;
});
inputPassword.addEventListener('change', () => {
  loginObject.password = inputPassword.value;
});
btnSubmitFormHeader.addEventListener('click', (event) => {
  event.preventDefault();
  if (loginObject.email === 'tryber@teste.com' && loginObject.password === '123456') {
    alert('Olá, Tryber!');
  } else {
    alert('Email ou senha inválidos.');
  }
});

window.onload = () => {
  btnSubmitFormMain.addEventListener('click', (event) => {
    event.preventDefault();
  });
  const enableBtnSubMain = () => {
    if (checkboxAgreement.checked) {
      btnSubmitFormMain.disabled = false;
    } else {
      btnSubmitFormMain.disabled = true;
    }
  };
  enableBtnSubMain();
  checkboxAgreement.addEventListener('change', enableBtnSubMain);
};
