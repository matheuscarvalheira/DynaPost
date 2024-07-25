# DynaPost

DynaPost é uma aplicação feita para professores e alunos de uma instituição. Nela, basicamente, os professores podem manusear postagens e os alunos podem visualizar elas.
<br>

## Tecnologias utilizadas:
### Back-end:
- Node.js;
- Typescript;
- Express;
- TypeORM;
- Jest.

### Persistência de dados:
- PostgreSQL;
- Docker.

### Integração Contínua e Entrega Contínua (CI/CD):
- Github Actions.

<br>

## Passo a passo para rodar o projeto:
### Rodar e visualizar o banco de dados:
1. Iniciar o container Docker:
```
docker-compose up -d
```

2. Acessar o banco de dados:
```
docker exec -it dynapost_grupo1 psql -U postgres -d dynapost
```
3. Comandos para fazer consultas:
   - Listar as tabelas (dentro do container): 
     ```
     \dt
     ```
   - Ver todos os bancos de dados:
     ```
     \l
     ```
   - Trocar para um banco de dados específico:
     ```
     \c nome_do_banco
     ```
   - Ver uma tabela específica:
     ```
     \d nome_da_tabela
     ```
4. Para criar migrações:
```
npx typeorm migration:create src/migrations/nome_migracao   
```
5. Rodar up do Docker Compose:
```
npm run dbup
```
6. Rodar down do Docker Compose:
```
npm run dbdown
```

<br>

### Rodar o servidor back-end:

Requisito: Utilizar a versão 20 do Node.js.
1. Clonar o projeto:
```
git clone https://github.com/matheuscarvalheira/DynaPost.git
```
2. Abrir o projeto na IDE desejada.
3. Abrir um terminal na raiz do projeto.
4. Instalar as dependências necessárias para o funcionamento da aplicação:
```
npm install
```
5. Rodar o projeto:
     ```
     npm run start
     ```
     ```
     npm run start:dev
     ```
7. Fazer o build do projeto:
```
npm run build
```
8. Rodar os testes:
```
npm run test
```
9. Rodar coverage:
```
npm run test:coverage
```