//Utilize switch/case para escrever um código que receba o nome de uma peça de xadrez e retorne os movimentos que ela pode fazer.
let chessPiece = 'cobra'
let pieceLowerCase = chessPiece.toLowerCase();
function removeracentos(pieceLowerCase){
    return pieceLowerCase.normalize('NFD').replace(/[\u0300-\u036f]/g, "")
}
switch (removeracentos(pieceLowerCase)){
    case 'peao':
        console.log(chessPiece + ', Move-se apenas uma casa para frente');
        break;
        case 'torre':
            console.log(chessPiece +', Move-se em linha reta, tanto na vertical quanto na horizontal');
            break;
            case 'cavalo':
                console.log(chessPiece + ', Move-se em um padrão de "L"');
                break;
                case 'bispo':
                    console.log(chessPiece + ', Move-se na diagonal');
                    break;
                    case 'rainha':
                        console.log(chessPiece + ', Pode mover-se em qualquer direção - frente, trás, lateralmente e diagonalmente')
                        break;
                        case 'rei':
                        console.log(chessPiece + ', Move-se em qualquer direção');
                        default:
                            console.log(chessPiece + ', Peça Invalida!');
}
//Desafio extra, escreva um código para funcionar tanto se receber o nome de uma peça com letras maiúsculas quanto com letras minúsculas, sem aumentar a quantidade de condicionais. Uma dica é pesquisar uma função que faça uma string ficar com todas as letras minúsculas (lower case).