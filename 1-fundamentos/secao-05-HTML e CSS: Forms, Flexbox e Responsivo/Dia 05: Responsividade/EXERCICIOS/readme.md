# precisa ainda concluir exercicio do kitten kare:
1.1 – Crie uma versão de layout para impressão
Os elementos id header, navigation e footer devem desaparecer.
O elemento id='aside' deve ser mostrado abaixo do conteúdo principal.
A versão de layout deve se parecer com a imagem abaixo:
![A versão de layout deve se parecer com a imagem abaixo:](/1-fundamentos/secao-05-HTML%20e%20CSS:%20Forms,%20Flexbox%20e%20Responsivo/Dia%2005:%20Responsividade/EXERCICIOS/fotos%20exe%20exercicio%20kitten%20kare/acb43bcd-38e1-480c-9009-1c9cdea930d6-Visualização%20da%20página%20antes%20da%20impressão.webp)

De olho na dica 👀: Você pode visualizar como ficará a impressão por meio do atalho Ctrl+P no Linux ou Cmd+P no Mac.

gabarito:

@media print {
  #header,
  #navigation,
  #footer {
    display: none;
  }

  #content-container {
    flex-direction: column;
  }
}

1.2 – Crie uma versão de layout para telas pequenas
O elemento id='aside' deve desaparecer.
As imagens não devem exceder a largura da tela.
Os itens dentro do elemento navigation devem aparecer cada um em sua própria linha.
O elemento id header deve ser fixo, de forma que fique aparecendo sempre no topo da tela, mesmo após a pessoa usuária rolar a página.
A versão de layout para telas pequenas deve se parecer com a imagem abaixo:

![A versão de layout deve se parecer com a imagem abaixo:](/1-fundamentos/secao-05-HTML%20e%20CSS:%20Forms,%20Flexbox%20e%20Responsivo/Dia%2005:%20Responsividade/EXERCICIOS/fotos%20exe%20exercicio%20kitten%20kare/acb43bcd-38e1-480c-9009-1c9cdea930d6-240x320_%20tela%20pequena%20.webp)

gabarito:

Segundo passo: Fazer com que o elemento com id='aside' desapareça.

Copiar
/* ... */

@media (max-width: 700px) {
  #aside {
    display: none;
  }
}

Terceiro passo: Fazer com que as imagens excedam a largura da tela.

Copiar
/* ... */

/* @media (max-width: 700px) { 
  body {
    padding: 0px;
  }

  #aside {
    display: none;
  }
*/ 
   img {
    max-width: 100%;
  }
/* } */

Quarto passo: Fazer com que os itens dentro do elemento navigation apareçam cada um em sua própria linha.

Copiar
/* ... */

/* @media (max-width: 700px) { 
  #aside {
    display: none;
  }
   img {
    max-width: 100%;
  }
  */
  #navigation ul {
    flex-direction: column;
  }
}

Quinto passo: Fixar o elemento com id='header' no topo da tela.

Copiar
/* ... */

/* @media (max-width: 700px) { 
  #aside {
    display: none;
  }
   img {
    max-width: 100%;
  }*/

  #header {
    position: fixed;
    width: 100%;
    height: 75px;
  }
  #navigation {
    padding-top: 75px;
  }
/* 
} */

Quinto passo: Fixar o elemento com id='header' no topo da tela.

Copiar
/* ... */

/* @media (max-width: 700px) { 
  #aside {
    display: none;
  }
   img {
    max-width: 100%;
  }*/

  #header {
    position: fixed;
    width: 100%;
    height: 75px;
  }
  #navigation {
    padding-top: 75px;
  }
/* 
} */
No final, teremos adicionado ao arquivo kitten-kare.css as seguintes regras:

Copiar
@media print {
  #header,
  #navigation,
  #footer {
    display: none;
  }

  #content-container {
    flex-direction: column;
  }
}

@media (max-width: 700px) {
  #aside {
    display: none;
  }
  img {
    max-width: 100%;
  }
  #navigation ul {
    flex-direction: column;
  }
  #header {
    position: fixed;
    width: 100%;
    height: 75px;
  }
  #navigation {
    padding-top: 75px;
  }
}