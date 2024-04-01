# Desafio front-end

Para rodar o projeto, utilize os comendos

```
yarn server
```

e

```
yarn dev
```

yarn server irá iniciar o servidor utilizando o json-server e yarn dev iniciará o projeto.

Para utilizar o projeto apontando para a URL https://wefit-movies.vercel.app/api/movies:

- A URL de busca pode ser alterada dentro do contexto ProductsContext.tsx, na linha 36.
- Nas linhas 41, 42 e 45, o response.data deve ser alterado para response.data.products
