const school = {
    lessons: [
      {
        course: 'Python',
        students: 20,
        professor: 'Carlos Patrício',
        shift: 'Manhã',
      },
      {
        course: 'Kotlin',
        students: 10,
        professor: 'Gabriel Oliva',
        shift: 'Noite',
      },
      {
        course: 'JavaScript',
        students: 738,
        professor: 'Gustavo Caetano',
        shift: 'Tarde',
      },
      {
        course: 'MongoDB',
        students: 50,
        shift: 'Noite',
      },
    ]
  };
//  1-Crie uma função que obtenha o valor da chave de acordo com sua posição no array. Essa função deve possuir dois parâmetros: o objeto e a posição no array.

// const keys = Object.values(school.lessons);
// console.log(keys);
// console.log(keys[0]);
// console.log(chaves.length);
const keySchool = (object, position) => {
    const keys = Object.values(object.lessons);
    if (position < 0 || position >= keys.length) {
        return null;
    }
    const key = keys[position];
    return key;
  }
//   console.log(keySchool(school, 2));
// const getValueByNumber = (obj, index) => Object.values(obj)[index];

// console.log(getValueByNumber(school, 1));

// 2 -Crie uma função que retorne a soma do número total de estudantes em todos os cursos.

const quantityStundents = (object) => {
    const keys = Object.values(object.lessons);
    let sum = 0;
    for (let index = 0; index < keys.length; index += 1) {
        let quantity = keys[index].students;
        sum += quantity;
    }
    return `A quantidade de alunos é: ${sum}`;
};
// console.log(quantityStundents(school));

// 3 - Crie uma função que verifica se uma determinada chave existe em todos os elementos do array lessons. O retorno deve ser um booleano (true ou false). Essa função deve possuir dois parâmetros: o objeto e o nome da chave.

const verifyKey = (object, nameKey) => {
    const keys = Object.values(object.lessons);
    for (let index = 0; index < keys.length; index += 1) {
        if (keys[index][nameKey] === undefined) {
            return false;
        }
    }
    return true;
};
// console.log(verifyKey(school, 'course'));
// console.log(verifyKey(school,'professor'));
// console.log(verifyKey(school,'JavaScript'));

// 4- Crie uma função para alterar o turno para noite no curso de Python. Essa função deve ter três parâmetros: a base de dados a ser modificada, o nome do curso e o novo valor da chave.

const modifyShift = (object, course, newValue) => {
    const keys = Object.values(object.lessons);
    let findCouse;
    for (let index = 0; index < keys.length; index += 1) {
        let element = keys[index];
        if (element.course === course) {
            findCouse = element;
            break;
        }
    }
    if (findCouse !== undefined) {
        findCouse.shift = newValue;
        return findCouse;
    } else {
        return 'Curso não encontrado'
    }
};
console.log(modifyShift(school, 'Python', 'Noite'));