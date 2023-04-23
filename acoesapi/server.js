import express  from "express"
import banco from "./src/banco.js"
import Acao from "./src/controllers/acao.js"
import cors from "cors"
import Cotacao from "./src/controllers/cotacao.js"

const app = express()
app.use(express.json())
app.use(cors())

app.get('/acao', Acao.listar)
app.get('/acao/:simbolo', Acao.selecionar)


//app.get('/cotacao', Cotacao.listar)
app.get('/cotacao', Cotacao.importar)


banco.authenticate()
app.listen(4000, () => {
    console.log("Servidor rodando http://localhost:4000")
})