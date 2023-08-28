// Exercício 1
// Faça uma função que some todos os números pares do array numbers usando reduce.

const numbers = [18, 19, 23, 53, 4, 5, 76, 23, 54];

const sumNumbers = (arrayNumbers) => {
    const resultSum = arrayNumbers.reduce((sum, number) => {
        if (number % 2 === 0) sum += number;
        return sum;
    }, 0);
    return resultSum;
}

// console.log(sumNumbers(numbers));

const students = [
    {
      name: 'Jorge',
      lastName: 'Silva',
      age: 14,
      turn: 'Manhã',
      courses: [
        { name: 'Matemática', grade: 67 },
        { name: 'Português', grade: 79 },
        { name: 'Química', grade: 70 },
        { name: 'Biologia', grade: 65 },
      ],
    },
    {
      name: 'Mario',
      lastName: 'Ferreira',
      age: 15,
      turn: 'Tarde',
      courses: [
        { name: 'Matemática', grade: 59 },
        { name: 'Português', grade: 80 },
        { name: 'Química', grade: 78 },
        { name: 'Biologia', grade: 92 },
      ],
    },
    {
      name: 'Jorge',
      lastName: 'Santos',
      age: 15,
      turn: 'Manhã',
      courses: [
        { name: 'Matemática', grade: 76 },
        { name: 'Português', grade: 90 },
        { name: 'Química', grade: 70 },
        { name: 'Biologia', grade: 80 },
      ],
    },
    {
      name: 'Maria',
      lastName: 'Silveira',
      age: 14,
      turn: 'Manhã',
      courses: [
        { name: 'Matemática', grade: 91 },
        { name: 'Português', grade: 85 },
        { name: 'Química', grade: 92 },
        { name: 'Biologia', grade: 90 },
      ],
    },
    {
      name: 'Natalia',
      lastName: 'Castro',
      age: 14,
      turn: 'Manhã',
      courses: [
        { name: 'Matemática', grade: 70 },
        { name: 'Português', grade: 70 },
        { name: 'Química', grade: 60 },
        { name: 'Biologia', grade: 50 },
      ],
    },
    {
      name: 'Wilson',
      lastName: 'Martins',
      age: 14,
      turn: 'Manhã',
      courses: [
        { name: 'Matemática', grade: 80 },
        { name: 'Português', grade: 82 },
        { name: 'Química', grade: 79 },
        { name: 'Biologia', grade: 75 },
      ],
    },
  ];
// resutado esperado:
//   [
//     { name: 'Jorge', course: 'Português' },
//     { name: 'Mario', course: 'Biologia' },
//     { name: 'Jorge', course: 'Português' },
//     { name: 'Maria', course: 'Química' },
//     { name: 'Natalia', course: 'Português' },
//     { name: 'Wilson', course: 'Português' },
//   ]

  // Exercício 2
// Crie uma função usando dados de estudantes, para mostrar na tela um relatório 
// que diz em qual matéria a pessoa foi melhor. 
// Você usará tanto o map quanto o reduce dentro dele.


const bestMatter = (array) => {
    const objectStudents = array.map(({name, courses}) => {

        const bestGradeCourse = courses.reduce((bestGrade, course) => {
            if (course.grade >= bestGrade.grade) {
                bestGrade = course;
            }
            return bestGrade;
        }, { grade: 0 });

        const resultObjectStudent = {
            name,
            course: bestGradeCourse.name
        }
        return resultObjectStudent;
    });
    return objectStudents
};

console.log(bestMatter(students));