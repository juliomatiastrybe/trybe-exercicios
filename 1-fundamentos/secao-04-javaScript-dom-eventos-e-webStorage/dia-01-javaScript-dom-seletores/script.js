//Recupere o elemento que contém o título da página e altere para o nome de um filme da sua escolha.
const pageTitle = document.getElementById('page-title');
pageTitle.innerText = 'Blue Beetle';

//Recupere o primeiro parágrafo e altere o texto para o resumo do seu filme favorito.

const firParagraphID = document.getElementById('first-paragraph');
firParagraphID.innerText =
  'Um adolescente mexicano encontra um besouro alienígena que lhe dá uma armadura superpoderosa.';

//Recupere o subtítulo e altere-o para: Principais informações.
const subtitle = document.getElementById('subtitle');
subtitle.innerText = 'Principais informações';

//Recupere os parágrafos usando getElementsByClassName, e altere a fonte do primeiro parágrafo para itálico.
const paragraphs = document.getElementsByClassName('paragraph-style');

const firtParagraph = paragraphs[0];
firtParagraph.style.fontStyle = 'italic';

//Recupere o segundo parágrafo e coloque as informações principais: Exemplo: Direção: Nome da pessoa que dirigiu o filme, Roteirista: Nome da(s) pessoa(s) responsável(is) pelo roteiro
const secuntParagraph = paragraphs[1];
secuntParagraph.innerText =
  'Direção: Anjo Manoel Soto.\r\n Roteirista: Gareth Dunnet-Alcocer.';

//Recupere o subtítulo utilizando o getElementsByTagName e altere a cor da fonte para alguma de sua escolha.
const subtitleTagName = document.getElementsByTagName('h2');

subtitleTagName[0].style.color = 'blue';