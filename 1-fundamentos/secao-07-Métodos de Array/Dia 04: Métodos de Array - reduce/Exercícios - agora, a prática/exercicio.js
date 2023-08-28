const countries = [
    {
      name: 'Afghanistan',
      region: 'Asia',
      currencies: [{ code: 'AFN', name: 'Afghan afghani' }],
      capital: 'Kabul',
      population: 40218234,
      area: 652230
    },
    {
      name: 'Aland Islands',
      region: 'Europe',
      currencies: [{ code: 'EUR', name: 'Euro' }],
      capital: 'Mariehamn',
      population: 28875,
      area: 1580
    },
    {
      name: 'Albania',
      region: 'Europe',
      currencies: [{ code: 'ALL', name: 'Albanian lek' }],
      capital: 'Tirana',
      population: 2837743,
      area: 28748
    },
    {
      name: 'Algeria',
      region: 'Africa',
      currencies: [{ code: 'DZD', name: 'Algerian dinar' }],
      capital: 'Algiers',
      population: 44700000,
      area: 2381741
    },
    {
      name: 'American Samoa',
      region: 'Oceania',
      currencies: [{ code: 'USD', name: 'United States Dollar' }],
      capital: 'Pago Pago',
      population: 55197,
      area: 199
    },
    {
      name: 'Andorra',
      region: 'Europe',
      currencies: [{ code: 'EUR', name: 'Euro' }],
      capital: 'Andorra la Vella',
      population: 77265,
      area: 468
    },
    {
      name: 'Angola',
      region: 'Africa',
      currencies: [{ code: 'AOA', name: 'Angolan kwanza' }],
      capital: 'Luanda',
      population: 32866268,
      area: 1246700
    },
    {
      name: 'Anguilla',
      region: 'Americas',
      currencies: [{ code: 'XCD', name: 'East Caribbean dollar' }],
      capital: 'The Valley',
      population: 13452,
      area: 91
    }
  ];

//   Exercício 1
// Crie a função getPopulation que retorne a quantidade total da população de todos os países.

// De olho na dica 👀: o valor inicial deve começar com 0, portanto o acumulador é um número.

const getPopulation = (array) => array.reduce((total, country) => total += country.population, 0);

// console.log(getPopulation(countries));


// Exercício 2
// 🚀 Crie a função longestName que deve retornar o país com o maior nome.

// De olho na dica 👀: o reduce consegue comparar o valor do primeiro com o segundo parâmetro. 
// Compare o tamanho da string name do primeiro parâmetro com a do segundo parâmetro e retorne aquele que for maior.

const expectedResult = {
    name: 'American Samoa',
    region: 'Oceania',
    currencies: [{ code: 'USD', name: 'United States Dollar' }],
    capital: 'Pago Pago',
    population: 55197,
    area: 199
  };

const longestName = (array) => {
    const resultLogestName = array.reduce((moreName, country) => {
        const lengthName = country.name.length;
        const lengthMoreName = moreName.name.length;
        // console.log(lengthMoreName < lengthName);
        if (lengthMoreName < lengthName) {
            moreName = country;
        }
        return moreName;
    }, { name: '' });
    return resultLogestName;
};

// melhor otimizado e conciso:

// const longestName = (array) => {
//     return array.reduce((moreName, country) =>
//         country.name.length > moreName.name.length ? country : moreName,
//         { name: '' }
//     );
// };

// console.log(longestName(countries));
// Neste caso, longestName(countries) retorna um objeto com o nome mais longo, e expectedResult é um objeto que você definiu. 
// Embora os conteúdos possam ser iguais, eles não são o mesmo objeto em memória.

// Se você deseja comparar os conteúdos dos objetos, precisará realizar uma comparação profunda que verifique as propriedades dos objetos. 
// Uma maneira de fazer isso é converter ambos os objetos em strings JSON e, em seguida, comparar essas strings:
// console.log(JSON.stringify(longestName(countries)) === JSON.stringify(expectedResult));

// Exercício 3
// 🚀 Crie uma função chamada totalAreaByRegion que recebe um parâmetro opcional region com o valor padrão ‘Europe’. 
// Essa função calcula e retorna a área total de todos os países de uma determinada região.

const totalAreaByRegion = (region) => {
    const getRegion = countries.filter((country) => {
        return country.region === region;
    });
    const resultAreaByRegion = getRegion.reduce((totalArea, country) => {
        return totalArea += country.area;
    }, 0);
    return resultAreaByRegion;
};

// melhor otimizado e conciso:
// const totalAreaByRegion = (region) => {
//     return countries
//         .filter(country => country.region === region)
//         .reduce((totalArea, country) => totalArea + country.area, 0);
// };

// console.log(totalAreaByRegion('Africa'));


// Exercício 4
// 🚀 Crie uma função chamada getLargestCountriesByRegion que retorna um objeto contendo os países com a maior área em cada região. 
// O objeto de retorno deve ter a seguinte estrutura:

//  {
//     Asia: { name: 'Afghanistan', area: 652230 },
//     Europe: { name: 'Russia', area: 17098242 },
//     // ...
//  }

const getLargestCountriesByRegion = (array) => array.reduce((regionCountry, { name, region, area }) => {
  if (!regionCountry[region] || [area] > regionCountry[region].area) {
    regionCountry[region] = { name, area }
  }
  return regionCountry;
}, {});


console.log(getLargestCountriesByRegion(countries));