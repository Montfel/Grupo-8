## Requisitos para rodar o backend

### - Instalação obrigatória:
[![nodejs](https://img.shields.io/badge/Node.js-43853D?style=for-the-badge&logo=node.js&logoColor=white)](https://nodejs.org/en/) [![postgre](https://img.shields.io/badge/PostgreSQL-316192?style=for-the-badge&logo=postgresql&logoColor=white)](https://www.postgresql.org/download/)
---

### - Instalação opcional:
[![postman](https://img.shields.io/badge/Postman-FF6C37?style=for-the-badge&logo=Postman&logoColor=white)](https://www.postman.com/downloads/)
<br>
➡ O postman serve para fazer os testes das API's sem necessitar de uma tela visual.

---

### - Instalação das dependências:

1. Vá no terminal do seu VSCode
2. Digite ```cd backend``` para entrar na pasta do backend do projeto.
3. Na pasta de backend digite ```npm i -g knex``` para instalar o Knex. (O Knex serve para criação e drop de tabelas no banco de dados pelo terminal)
4. Digite ```npm i``` para instalar as dependências do projeto.
---

### - Rodagem do backend:
1. Criar um banco de dados no postgre chamado ```unicardiodb```
2. Na pasta do backend no terminal, digitar ```npm start```

### - Executando testes:

1. Vá no terminal do seu VSCode
2. Digite ```cd backend``` para entrar na pasta do backend do projeto.
3. Na pasta de backend digite ```npm i ``` para instalar as dependências de teste(Caso você ainda não tenha as dependências de teste)
4. Digite ```npm test``` para execultar os testes realizados.
5. Digite ```npm test:tdd``` para execultar os testes em tempo real(Ele não sera finalizado automaticamente, rodando toda vez que você salvar um teste, sem precisar executar o camando de teste varias vezes).
6. Digite ```npm test:coverage``` para execultar os testes realizados e verificar a % de testes realizados dentro do projeto.
---