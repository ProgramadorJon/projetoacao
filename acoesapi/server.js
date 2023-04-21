import express  from "express"
import banco from "./src/banco.js"
import Acao from "./src/controllers/acao.js"

const app = express()

app.get('/acao', Acao.listar)
app.get('/importar', Acao.importar)


banco.authenticate()
app.listen(4000, () => {
    console.log("Servidor rodando")
})