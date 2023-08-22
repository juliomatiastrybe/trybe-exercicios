# concluir exercicio small

De olho na dica 👀: no Chrome o tamanho da sua tela pode ser alterado. Para isso, siga estes passos:

Inspecionar a página;
clicar no ícone de dispositivos móveis (Toggle device toolbar) localizado no canto superior esquerdo. Atalho para ubuntu Ctrl + Shift + M, atalho para mac: cmd + Shift + M ;
redimensione a janela No topo da tela, pode-se definir as dimensões de largura e altura. É possível, ainda, escolher a dimensão de um dispositivo especifico, como um Samsung Galaxy S8+ ou IOhone 12 Pro.
Expanda a largura da sua tela. Faça isso até o design atual da página não funcionar mais. Por exemplo, o comprimento das linhas pode começar a ficar grande para que o texto seja lido ou a página pode ficar com uma largura grande o suficiente que não faça mais sentido as imagens serem mostradas uma abaixo da outra.

Você vai ajustar o CSS para melhorar a visualização da página.

1.1 – Execute as seguinte estilizações para todo o corpo da página
Aumentar o tamanho da fonte;
Diminuir o tamanho da fonte dos elementos h1 e h2; – Definir uma margem para esses elementos;
Aumentar o espaçamento entre as figuras;
Adicionar um pouco de margin na página.
1.2 - Defina as propriedades css para os elementos
Centralize os elementos article;
Faça as imagens serem mostradas em mais de uma coluna.
1.3 – Construindo uma página responsiva
Para construir uma página responsiva, devemos determinar um padrão de tamanho para cada dispositivo. Para isso, pode-se usar este link de referência:

Breakpoint	Dispositivos	Descrição
max-width: 600px	Celulares	Dispositivos muito pequenos
min-width: 600px	Tablets e celulares	Dispositivos pequenos
min-width: 768px	Tablets, celulares, desktops e laptops	Dispositivos médios
min-width: 992px	Desktops e laptops	Dispositivos grandes
min-width: 1200px	Desktops, laptops e TVs	Dispositivos muito grandes
Um breakpoint é um ponto em que definimos que o design atual deve mudar. Agora que temos um padrão, podemos criar um breakpoint para telas menores de laptops. Vamos usar a tabela acima para consulta.

De olho na dica 👀: Altere a cor de fundo, isso vai ajudar a perceber quando a media query teve efeito.

-Faça o primeiro breakpoint do layout para telas telas menores que 768px:

Faça outro breakpoint para telas grandes, como desktops. Ao consultar a tabela com os tamanhos, percebemos que a largura mínima para essa dimensão seria de 992px:
Crie uma nova media query no seu arquivo CSS usando a dimensão para telas de desktop, defina a largura minima como 992px;
Altere a cor de fundo;
Ajuste as margens da página;
Adicione a propriedade max-width à página, para garantir que a largura das linhas não fiquem muito grande.

gabarito:

Ao finalizar todas as alterações, o arquivo small-screen.css deve ficar como apresentado na sequencia. Lembre-se de que a ordem que estilizamos os elementos estabelece a prioridade.

Copiar
/*
 * @see http://www.paulirish.com/2012/box-sizing-border-box-ftw/
 * apply a natural box layout model to all elements, but allowing components to change
 */
 html {
  box-sizing: border-box;
}

*, *:before, *:after {
  box-sizing: inherit;
}

body {
  font: 1.2em/1.2 Helvetica, aria, sans-serif;
  margin: 0 3%;
}

article {
  text-align: justify;
}

h1 {
  font-size: 1.8em;
  margin: .9em 0 0 0;
}

h2 {
  font-size: 1.5em;
  margin: 1.5em 0 0 0;
}

img {
  max-width: 100%;
}

main {
  display: flex;
  flex-direction: column;
}

section {
  display: flex;
  flex-flow: row wrap;
}

figure {
  background: black;
  border-radius: 5px;
  color: white;
  margin: 0 0 25px 0;
  padding: 10px;
  text-align: center;
}

figcaption {
  font-size: .8em;
}

@media screen and (min-width: 768px) {
  body {
    background: rgba(0,0,255,.2);
    margin: 25px 6%;
  }

  figure {
    width: 45%;
    margin-right: 4.5%;
  }
}

@media screen and (min-width: 992px) {
  body {
    background: rgba(0,255,0,.2);
    margin: 25px 10%;
    max-width: 1130px;
  }

  figure {
    width: 30%;
    margin-right: 2.5%;
  }
}