let number = 4
let symbol = '* '
let inputLine = ''
for (let index = 0; index < number; index += 1){
    
    for (let indexColumn = 0; indexColumn < number; indexColumn += 1){
        inputLine += symbol
    }
    inputLine += '\n'
}
console.log(inputLine);