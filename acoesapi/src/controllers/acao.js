import Acao from "../models/acaoModel.js"
import axios from "axios"


async function listar(req, res) {
    res.json(await Acao.findAll())
}

async function importar(req, res) {
    try {
        const resposta = await axios.get('https://brapi.dev/api/available');
        console.log(resposta.data.stocks);
    
        let acoesCriadas = [];
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

export default { listar, importar }