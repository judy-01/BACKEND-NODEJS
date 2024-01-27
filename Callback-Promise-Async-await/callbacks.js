//Por definição,callback- é  um retorno de chamada é uma função que você passa para outra função como argumento para execução posterior.
// simulamos uma funcao de achar uma usuaria
//Asynchronicidade significa que se javaScript tiver que esperar uma operação ser concluída, ele executará o resto do código enquanto espera.
//Um retorno assíncroto é executado após a execução da função de alta ordem que usa o retorno de chamada.
const acharUsuaria = (callback) => {  //a gente recebe um callback
    //recebemos uma callback como primeiro parametro
    console.log("O callback foi chamado")
    console.log("Carregando usuaria...")
    setTimeout(function() { // avalia uma expressão depois de um certo tempo (em milissegundos). Então, aqui, a função "mensagem" está sendo chamada após 3 segundos. ( 1 segundo = 1000 milissegundos)
        console.log("Usuaria carregada.")
        callback(null, {
          nome: "Judy",
          email: "js@gmail.com",
          id: 999
        })
    }, 1000)
  }
  
  const acharEndere = function(callback) {
     console.log("carregando o endereco...")
     setTimeout(() => {
      console.log("endereco carregado.")
      callback(null), {
        cidade : "Belém",
        sigla : "Pa"
      }
      
     }, 5000)
  }
  
  acharUsuaria((err, usuaria) => {
    console.log("Callback chamado.")
    console.log(err, usuaria)
    if (err) {
      return console.error(err)
    }
  
    acharEndereco(() => { 
      console.log(`
        usuaria: ${usuaria.nome}
        email: ${usuaria.email}
       
      `)
    })
  })
  

  // recebemos uma callback como primeiro parametro
  //console.log("O callback foi chamado")
  console.log("Carregando usuaria...")
  setTimeout(function() { // simula uma resposta assincrona
      console.log("Usuaria carregada.")
      callback(null, {
        nome: "judy",
        email: "jd@email.com",
        id: 1234
      })
  }, 1000)
//}

const acharEndereco = function(callback) {
   console.log("carregando o endereco...")
   setTimeout(() => {
    console.log("endereco carregado.")
    const cidade = "itupiranga"
    callback(null, {
      cidade: cidade,
      sigla: "Pa"
    })
   }, 5000)
}

acharUsuaria((err, usuaria) => {
  console.log("Callback chamado.")
  //console.log(err, usuaria)
  if (err) {
    return console.error(err)
  }

  acharEndereco((err, endereco) => { 
    console.log(`
      usuaria: ${usuaria.nome}
      email: ${usuaria.email}
      endereco: ${endereco.cidade} - ${endereco.sigla}
    `)
  })
})
