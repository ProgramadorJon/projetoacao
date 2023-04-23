import banco from "../banco.js"
import Cotacao from "../models/cotacaoModel.js"
import axios from "axios"

async function listar(req, res){
    res.json(await Cotacao.findAll())
}


export default { listar }
