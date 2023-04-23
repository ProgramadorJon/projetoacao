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

  
    async function importars(req, res){
      const acaoTicker = await axios.get('http://localhost:4000/acao')
      const t = await banco.transaction()
  
      let tickers = []
      let short = []
  
      for (const i in acaoTicker.data){
          if ('simbolo' in acaoTicker.data[i]) {
              tickers.push(acaoTicker.data[i].simbolo)
          }
      }
  
      for (const j in tickers){
          const tick = tickers[j]
          const nome = await axios.get('https://brapi.dev/api/quote/'+ tick)
          const acao = nome.data.results
  
          if (acao.length > 0) {
              const shortName = acao[0].shortName;
              short.push(shortName)    
          }
  
      if (j === tickers.length) {
          break;
          }
  
      }
  
      try {
          
          
          for (let i = 0; i < tickers.length; i++) {
              const ticker = tickers[i];
              const name = short[i]; // obtendo o nome curto correspondente para o ticker atual
              await Acao.update(
                { nome: name }, // atualizando a propriedade "nome" com o valor do nome curto correspondente
                { where: { simbolo: ticker } } // filtrando as ações com base no símbolo em "ticker"
              ),
              {
                  transaction: t
              }
            }
          await t.commit()
          res.json({"mensagem": "Base atualizada/criada com sucesso!"})
  
  
  
  
      } catch (error) {
          await t.rollback()
          res.status(400).json(error)
      }
  }
  

export default { listar, importar, selecionar }