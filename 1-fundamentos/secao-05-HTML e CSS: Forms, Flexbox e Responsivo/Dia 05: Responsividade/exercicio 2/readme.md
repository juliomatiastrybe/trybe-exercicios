# concluir exercicio alice
1.1 – Crie três versões de layout diferentes para essa página
Crie um layout para telas pequenas;
Crie um layout para telas médias;
Crie um layout para telas grandes.
Anota aí 📝: Preste atenção no conteúdo da página e pense em como mostrá-lo em cada um dos tamanhos de tela:

Onde a lista de capítulos deve estar posicionada?
Como a história deve ser mostrada?
Como o cabeçalho deve ser posicionado?
O que fazer com as informações do autor em cada tamanho de tela?
Talvez seja necessário alterar um pouco o HTML. Caso altere, adicione elementos para facilitar a estilização ou mude um bloco de lugar dentro da página.

Ao final, o seu arquivo CSS deve ficar parecido como o apresentado na sequencia.

Copiar
html {
  box-sizing: border-box;
}

*, *:before, *:after {
  box-sizing: inherit;
}

.container {
  display: flex;
}

p {
  padding: 20px;
}

@media screen and (max-width: 600px) {
  body {
    background-color: lightcoral;
    font-family: sans-serif;
  }
  .container {
    flex-direction: column;
  }

  p {
    padding: 0 5px;
    line-height: 1.5em;
  }
}

@media screen and (min-width: 600px) {
  body {
    background-color: lightblue;
  }

  .container {
    flex-wrap: wrap;
  }
}

@media screen and (min-width: 1000px) {
  body {
    background-color: lightgreen;
  }

  .container {
    flex-wrap: nowrap;
  }
}