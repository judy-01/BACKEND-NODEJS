

### Este projeto já está com o método HTTP Get organizado, e todas as rotas de integração com o banco de dados. O próximo passo agora é criar o processo de autenticação.

### Este projeto já está com o método HTTP Get organizado, e todas as rotas de integração com o banco de dados. O próximo passo agora é criar o processo de autenticação.

 orientações:

1 - Instalar as bibliotecas via npm install 
`$ npm install`

2 - Gerar chave pelo http://travistidwell.com/jsencrypt/demo/ e guardar a chave pública.

3 - Criar arquivo .env.example e env., ambos com chave chamada SECRET 
`$ secret=chave_rsa_aqui_sem_aspas`

4 - Carregar as variáveis de ambiente no projeto, no arquivo app.js, coloque na linha 1 do arquivo 
`$ require(‘dontenv-safe’).config();`

5 - Criar variável contendo a SECRET em colaboradorasController.js
`$ const secret = process.env.SECRET`

6 - Criar método de autenticação na rota `getAll`

7 - Pegar o header de autorização e enviar uma mensagem de erro 401 vir vazio
`$ const authHeader = request.get(‘authorization’);`

Na rota ``getAll``, ficará da seguinte, forma:

```
const getAll = (req, res) => {
  const authHeader = req.get('authorization');
  const token = authHeader.split(' ')[1];
  console.log('Meu header:', token);
  if (!token) {
    return res.status(401).send('erro no header');
  }
        colaboradoras.find(function (err, colaboradoras){
      res.status(200).send(colaboradoras)
    })     
};
```

8 - Passar bearer token no header de autenticação via postman
`$ Bearer TOKEN_JWT_AQUI`

O esperado após esses passos, é que você tente fazer o request de `getAll` no postman e apareça no terminal o header e o token que vc determinou, sem a palavra Bearer. 

9 - Verificar token JWT  e enviar uma mensagem de erro 403 caso seja inválido. 
`$ jwt.verify(token, SECRET, (error) => {...});`

Antes de tudo, precisamos importar a biblioteca jwt, então coloca na linha 3 do controller 
`$ const jwt = require('jsonwebtoken');`

Agora sim, podemos aplicar o método verify e verificar se tudo está pegando corretamente. 
Vamos lá!
```
  jwt.verify(token, SECRET, function(erro) {
    if (erro) {
      return res.status(403).send('Não autorizado');
    }
```

-----------------------------------------------------------------------------------------------

###  criptografar a senha da rota colaboradoras


1 - Instalar bcrypt 
`$ npm install bcrypt`

2 - Fazer require do bcrypt no colaboradorasController.js 
`$ const bcrypt = require('bcryptjs')`

3 - Gerar hash com senha recebida no body da request 
`$ bcrypt.hashSync(request, body, senha, 10)`

4 - Criar nova colaboradora no banco com a senha hasherizada e o login(email) recebido no body da request.

-----------------------------------------------------------------------------------------------------

###  criar a rota de login


1 - Criar a rota de login na pasta routes no arquivo colaboradoras.js
`$ router.post(“/login”, controller.login);`

3 - Buscar colaboradora a partir do email recebido na request, e mostrar um erro 404 caso não encontre. 
`$ Colaboradoras.findOne({ email: req.body.email }, function{error, colaboradora} {...}`

4 - Fazer require do plugin JWT 
`$ const jwt = require(‘jsonwebtoken’);`

5 - Importar SECRET e gerar token JWT a partir do nome e secret e devolver na request 
`$ jwt.sign({ name:colaboradora.name }, SECRET;`

6 - Bater na rota getAll via Postman com o token gerado

---

