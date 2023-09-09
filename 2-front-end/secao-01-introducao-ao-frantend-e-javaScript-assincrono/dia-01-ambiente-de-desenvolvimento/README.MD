para roda um servido de desenvolvimento para que o navegador possa ter acesso ao
modulos instalos na pastas quando rodamos algum npm...
ultilizamos o 
# npx vite # 
Quando o nosso projeto estiver concluido podemos rodar o comando:
# npx vite build #
, aonde ele irá compactar todos os arquivos para que se tornem mais leve para os
servidores.
# npx vite --open
dando o comando npx vite --open, vai criar um um servidor para desenvolvimento,
dessa forma conseguimos ultilizar o acesso de frameworks, no navegadores, pós assim
o navegador consegue identificar a pasta através do type: module, que colocamos no arquivo
package.json.

# "type": "module", 
No arquivo package.json é necessario pós e o novo meio de acesso do ecma 6, assim podemos
ultilizar o "import" e o "export", sem a nececidade de colocar o caminho do arquivo.

# npm install @trybe/eslint-config-frontend

Para instalar o ESLint do modulo de Front-end da Trybe execute, no seu terminal, o comando:
npm install @trybe/eslint-config-frontend

Exercício - Clipboard copy
Utilizando o código apresentado no conteúdo, vamos implementar uma nova funcionalidade à aplicação. Ao clicar na senha gerada, a aplicação deverá copiar a senha para a área de transferência. Para isso, instale e utilize a biblioteca clipboard-copy.

[x] exercicio concluído. 
