import banco from "../banco.js"
import Cotacao from "../models/cotacaoModel.js"
import axios from "axios"
import Acao from "../models/acaoModel.js"

async function listar(req, res){
    res.json(await Cotacao.findAll())
}

async function inserir(req, res){
    const acaoTicker = await axios.get('http://localhost:4000/acao')
    const t = await banco.transaction()

    let tickers = []
    let idacao = []
    let shortName = []
    let cotacao = []
    let valorMercado = []
    let volumeTransacooes = []
    let moeda = []
    let data = []

    

    for (const i in acaoTicker.data){
        if ('simbolo' in acaoTicker.data[i]) {
            idacao.push(acaoTicker.data[i].idacao)
            tickers.push(acaoTicker.data[i].simbolo)
        }
    }

    for (const j in tickers){
        const tick = tickers[j]
        const nome = await axios.get('https://brapi.dev/api/quote/'+ tick)
        const acao = nome.data.results

        if (acao.length > 0) {
            shortName.push(acao[0].shortName)  
            cotacao.push(acao[0].regularMarketPrice)   
            valorMercado.push(acao[0].marketCap)   
            volumeTransacooes.push(acao[0].regularMarketVolume)   
            moeda.push(acao[0].currency)   
            data.push(acao[0].regularMarketTime)   
        }

    if (j === tickers.length) {
        break;
        }

    }

     try {
        
        
        for (let i = 0; i < idacao.length; i++) {
            const id = idacao[i]
            const cot = cotacao[i]
            const valor = valorMercado[i]
            const volume = volumeTransacooes[i]
            const m = moeda[i]
            const dat = data[i]

            await Cotacao.create(
              { idacao:  id, 
                cotacao: cot,
                valormercado: valor, 
                volumetransacoes: volume,
                moeda: m,
                data: dat,
              }),
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



export default { listar, inserir }
