# DynaPost

Aplicação de blogging dinâmico, utilizando a plataforma de desenvolvimento node.js


# Ver informações do banco de dados no postgres
## Inicie o container Docker

```
docker-compose up -d
```

## Acessar o banco de dados
```
docker exec -it dynapost_grupo1 psql -U postgres -d dynapost
```

## Listar as tabelas (dentro do container)

1) List Tables
```
\dt
```
<br>

2) Ver todos os bancos de dados
```
\l
```
<br>

3) Trocar para um banco de dados específico
```
\c nome_do_banco
```
<br>

4) Para ver uma tabela específica
```
\d nome_da_tabela
```