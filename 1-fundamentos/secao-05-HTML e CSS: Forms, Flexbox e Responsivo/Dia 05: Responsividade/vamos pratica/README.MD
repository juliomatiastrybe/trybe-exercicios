#PRECISA FAZER O EXERCICIO VAMOS PRATICAR DO DIA 05.
A primeira div só poderá aparecer caso nossa tela tenha largura mínima de 500px.

@media (min-width: 500px) {
  .card:nth-of-type(1) {
    display: block;
  }
}
A segunda div só poderá aparecer caso a largura esteja entre 600px e 1000px.

@media (min-width: 600px ) and (max-width: 1000px) {
  .card:nth-of-type(2) {
    display: block;
  }
}
A terceira div não deverá aparecer caso nossa tela tenha largura entre 650px e 950px.

@media (max-width: 650px) {
  .card:nth-of-type(3) {
    display: block;
  }
}

@media (min-width: 950px) {
  .card:nth-of-type(3) {
    display: block;
  }
}

Sem alterar o CSS já escrito, faça com que o texto dentro do elemento que contém a classe trick apareça somente quando a tela estiver com uma largura menor que 500px.

Copiar
@media (max-width: 500px) {
  p.trick {
    color: black;
  }
}