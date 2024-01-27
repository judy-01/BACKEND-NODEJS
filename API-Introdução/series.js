const express = require("express")
const app = express()
const port = 3001
const listaDeSeries = require("./model/series-lista.json")

app.use(express.json())

app.get("/", (req, res) => {
    res.send("Hello World")
})


// == igual |||  "1" == 1
// === identico 
app.get("/series", (req, res) => {
    const filtroNome = req.query.nome
    const filtroAno = req.query.ano

    const serieEscolhida = listaDeSeries.filter((item, index) => {
        if(filtroNome) {
            return item.Title.toLowerCase() === filtroNome.toLocaleLowerCase()
        }
        if(filtroAno) {
            return item.Year === filtroAno
        }
        return item
    })
    res.json(serieEscolhida)
})

app.get("/series/:id", (req, res) => {
    const id = req.params.id // Retorna uma string

    const serieEscolhida = listaDeSeries.filter((item, index) => item.id == id)
    

    res.json(serieEscolhida)

})

app.post("/serie", (req, res) => {
    const  body = req.body

    listaDeSeries.push(body)

    res.json(listaDeSeries)
})

app.delete("/del/:id", (req, res)=>{
    const IdSeries =  req.params.id
    
    res.status(500).json(` A serie que posui o id ${IdSeries} foi deletado com sucesso`)
}),

app.listen(port, () => {
    console.log(`Api está escutando na porta ${port}`)
})