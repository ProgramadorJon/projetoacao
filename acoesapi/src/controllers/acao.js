import Acao from "../models/acaoModel.js"
import axios from "axios"


async function listar(req, res) {
    res.json(await Acao.findAll())
}

async function selecionar(req, res) {
  await Acao.findOne(
    {
      where: { simbolo: req.params.simbolo.toUpperCase()}
  })
  .then(result => res.json(result))
  .catch(err => res.status(400).json(err))
}

async function importar(req, res) {
    try {
        const resposta = await axios.get('https://brapi.dev/api/available')
        console.log(resposta.data.stocks)
    
        let acoesCriadas = []
        await resposta.data.stocks.map(async (simbolo) => {
          const acao = await Acao.create({
            simbolo,
          });
          acoesCriadas.push(acao);
        })
    
        res.json(acoesCriadas);
      } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Erro ao importar ações' });
      }
    }

export default { listar, importar, selecionar }