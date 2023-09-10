import validator from 'validator';

const inputValue = document.querySelector('#value');
const optionSelected = document.querySelector('#option');
const validatorBtn = document.querySelector('#button');
const displayAnswer = document.querySelector('#answer');

const validatorValues = () => {
  const selected = optionSelected.value;
  const options = {
    format: 'DD/MM/YYYY',
  };
  switch (selected) {
  case 'Email':
    return validator.isEmail(inputValue.value);
  case 'TIN':
    return validator.isTaxID(inputValue.value, 'pt-BR');
  case 'Data':
    return validator.isDate(inputValue.value, options);
  case 'Password':
    return validator.isStrongPassword(inputValue.value);
  case 'Phone':
    return validator.isMobilePhone(inputValue.value, 'pt-BR');
  default:
  }
};
validatorBtn.addEventListener('click', (event) => {
  event.preventDefault();
  if (!inputValue.value || !optionSelected.value) {
    displayAnswer.innerHTML = 'É preciso digitar um valor e escolher um campo!';
  } else {
    displayAnswer.innerHTML = `A validação retorna ${validatorValues()}`;
  }
});
