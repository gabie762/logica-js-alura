alert('Boas vindas ao jogo do número secreto'); //manda uma mensagem para o início da página
let mensagemDeVitoria = 'Parabains :)';
let numeroSecreto = parseInt(Math.random() * 100 + 1); //variável com o numero escolhido
let tentativas = 1;
console.log(numeroSecreto) //console.log é um comando que ajuda o desenvolvedor no código

let chute;
console.log('Valor do chute:', chute);

//comparação número secreto
console.log('Resultado da comparação:', chute == numeroSecreto);

//Enquanto - loop de condição
while(chute != numeroSecreto){
    chute = prompt('Escolha um número entre 1 e 100');  //uma mensagem com caixa de input do usuário
    if (chute == numeroSecreto){
        break;
    } else {
        if(numeroSecreto > chute){
            alert("O número secreto é maior que " + chute);
        }
        else{
            alert("O número secreto é menor que " + chute);
        }
        tentativas ++;
    }
}

let palavraTentativa = tentativas > 1 ? ' tentativas' : ' tentativa';
alert('Você descobriu o número secreto: '+ numeroSecreto + '! :)\n' + 'Foram ' + tentativas + palavraTentativa);

// if(tentativas > 1){
//     alert('Você descobriu o número secreto: '+ numeroSecreto + '! :)\n' + 'Foram ' + tentativas + ' tentativas');
// } else{
//     alert('Você descobriu o número secreto: '+ numeroSecreto + '! :)\n' + 'Foram ' + tentativas + ' tentativa');
// }