import banco from "../banco.js"
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

    const t = await banco.transaction()

    let simbolos = []
    let short = []

    try {
        const resposta = await axios.get('https://brapi.dev/api/available')

        for( const i in resposta.data.stocks){
          simbolos.push(resposta.data.stocks[i])
        }

        for (const j in simbolos){
          const tick = simbolos[j]
          const nome = await axios.get('https://brapi.dev/api/quote/'+ tick)
          const acao = nome.data.results
  
          if (acao.length > 0) {
              const shortName = acao[0].shortName;
              short.push(shortName)    
          }
  
          if (j === simbolos.length) {
              break;
              }
       }
    
      
       for (let i = 0; i < simbolos.length; i++){
          const tickers = simbolos[i]
          const name = short[i]
          await Acao.create(
            { nome: name , 
            simbolo: tickers } 
          ),
          {
            transaction: t
        }
       }
        await t.commit()
        res.json({"mensagem": "Base atualizada/criada com sucesso!"})
      } catch (error) {
        await t.rollback()
        console.error(error);
        res.status(500).json({ error: 'Erro ao importar ações' });
      }
}
  

export default { listar, importar, selecionar }