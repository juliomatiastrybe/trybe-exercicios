FROM node:16.14.2

# Diretório padrão de execução
WORKDIR /app

# Instala as dependências Node
COPY package*.json ./ 

RUN npm install

# Copia testes do avaliador e arquivos do projeto
COPY .sequelizerc ./
COPY src ./app/src

EXPOSE 3001

CMD [ "npm", "start"]