

- ## [Método PUT](#PUT)
- ## [Método PATCH](#PATCH)
- ## [Método DELETE](#DELETE)


### PUT

O método PUT deve ser utilizado quando precisamos atualizar algum recurso através da nossa api, nesse caso, sua entidade precisará ser enviada integralmente e as vezes é usado até para criar um novo recurso.
Por exemplo:
Se eu quero atualizar os dados de um usuário no sistema, logo minha chamada PUT deve ir com TODOS os dados necessários, mesmo que eu não vá atualizar todos eles:

```javascript
  {
    "nome":"João Braga Santos",
    "idade": 27,
    "data_nascimento": "21/08/1990",
    "escolaridade":"superior incompleto"
  }
```

Usando esse exemplo de cima, quando eu estou usando o método PUT, mesmo que eu mude o valor de apenas um dos itens do usuário ao enviar, preciso enviar a entidade Usuário inteira.

### PATCH

Já o método PATCH, assim como o PUT , também é usado para atualizar dados. Mas diferente do método PUT ao enviar os dados para a API eu não preciso enviar toda a entidade, apenas o item que quero que seja alterado

Usando o mesmo exemplo do usuário:

```javascript
  {
    "escolaridade":"superior completo"
  }
```

Normalmente para garantir que estarei alterando a escolaridade do usuário `João Braga Santos` preciso informar um identificador único desse usuário no meu endpoint.

### DELETE

Esse método é reservado para apagar dados. Normalmente não se envia nada no `body` da requisição quando se usa esse método. Então para identificar exatamente o dado que você quer que seja apagado é indicado usar um indentificador único no endpoint.



### Links Úteis

- [PUT VS PATCH](https://cursos.alura.com.br/forum/topico-diferenca-entre-put-e-patch-44669)
- [Método DELETE](https://developer.mozilla.org/pt-BR/docs/Web/HTTP/Methods/DELETE)
- [Método PATCH](https://developer.mozilla.org/pt-BR/docs/Web/HTTP/Methods/PATCH)
- [Método PUT](https://developer.mozilla.org/pt-BR/docs/Web/HTTP/Methods/PUT)

