
### Projeto controle de estoque

#### Como criar o projeto

Siga os passos abaixo:

| Passo | Comando |
| - | - |
| Inicie um projeto node | `npm init` |
| Instale a dependência | `npm i readline-sync` |
| No package.json, adicione em scripts   | `"ControleEstoque": "node app.js"` |

#### Sobre o projeto

Este será um projeto de programa de linha de comando que
fará o controle de estoque de produtos de uma loja.

O banco de dados será ***apenas em memória***, ou seja, as informações ***não persistirão*** após o encerramento do sistema.

Deverá ser implementado um CRUD (create, read, update, delete) para o bando de dados proposto.

Deverá ser possível: (requisitos do sistema)

* inserir novos produtos (create)
* listar todos os produtos (read)
* listar os detalhes de um produto (read)
* alterar um produto (update)
* aplicar um aumento porcentual em todos os preços(update)
* excluir um produto (delete)

#### Estrutura do projeto

```
 📁 projeto
   |- 📁 controladores
   |     |- 📄 alterarPorId.js
   |     |- 📄 alterarPrecos.js
   |     |- 📄 deletarProduto.js
   |     |- 📄 inserirProduto.js
   |     |- 📄 listarPorId.js
   |     |- 📄 listarTudo.js
   |- 📄 app.js
   |- 📄 database.js
   |- 📄 package-lock.json
   |- 📄 package.json
```


## Links Úteis

* [Documentação Javascript](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript)
* [JEP: explorador com exemplos](https://jep.vercel.app/)


