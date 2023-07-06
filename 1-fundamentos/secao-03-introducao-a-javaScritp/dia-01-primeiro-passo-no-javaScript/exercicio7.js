//Utilize if...else para escrever um código que, dado um salário bruto, calcule o salário líquido a ser recebido.

//Uma pessoa que trabalha de carteira assinada no Brasil tem descontados de seu salário bruto o INSS (Instituto Nacional do Seguro Social) e o IR (Imposto de Renda).
let grossSalary = 3000
let alicotInss;
let baseSalary;
let netSalary;

if (grossSalary <= 1556.94) {
    alicotInss = 8
    baseSalary = (grossSalary * alicotInss) / 100
    baseSalary = grossSalary - baseSalary
  }else if (grossSalary >= 1556.95 && grossSalary <= 2294.92){
    alicotInss = 9;
    baseSalary = (grossSalary * alicotInss) / 100
    baseSalary = grossSalary - baseSalary
  } else if (grossSalary >= 2294.92 && grossSalary <= 5189.82){
    alicotInss = 11;
    baseSalary = (grossSalary * alicotInss) / 100
    baseSalary = grossSalary - baseSalary
  }else{
    alicotInss = 570.88
    baseSalary = grossSalary - alicotInss
  }
  if (baseSalary <= 1903.98){
     netSalary = 0
  }else if(baseSalary >= 1903.99 && baseSalary <= 2826.65){
    netSalary = (baseSalary * 0.075)-142.80 
  } else if(baseSalary >= 2826.66 && baseSalary <= 3751.05){
    netSalary = (baseSalary * 0.15)-354.80
  } else if(baseSalary >= 3751.06 && baseSalary <= 4664.68){
    netSalary = (baseSalary * 0.225)-636.13
  }else {
    netSalary = (baseSalary * 0.275)-869.36
  }
   netSalary = baseSalary - netSalary
  console.log(`O salario liquido de ${grossSalary.toLocaleString('pt-br', {style: 'currency', currency: 'BRL'})} é igual a: ${netSalary.toLocaleString('pt-br', {style: 'currency', currency: 'BRL'})}`);