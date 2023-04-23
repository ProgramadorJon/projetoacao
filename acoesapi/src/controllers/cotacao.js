import banco from "../banco.js"
import Cotacao from "../models/cotacaoModel.js"
import axios from "axios"
import Acao from "../models/acaoModel.js"

async function listar(req, res){
    res.json(await Cotacao.findAll())
}

async function atualiza(req, res){
    const acaoTicker = await axios.get('http://localhost:4000/acao')
   // const t = await banco.transaction()

    let tickers = []
    let shortName = []
    let cotacao = []
    let valorMercado = []
    let volumeTransacooes = []
    let moeda = []
    let data = []

    

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
    console.log(cotacao)

    // try {
        
        
    //     for (let i = 0; i < tickers.length; i++) {
    //         const ticker = tickers[i];
    //         const name = short[i]; // obtendo o nome curto correspondente para o ticker atual
    //         await Acao.update(
    //           { nome: name }, // atualizando a propriedade "nome" com o valor do nome curto correspondente
    //           { where: { simbolo: ticker } } // filtrando as ações com base no símbolo em "ticker"
    //         ),
    //         {
    //             transaction: t
    //         }
    //       }
    //     await t.commit()
    //     res.json({"mensagem": "Base atualizada/criada com sucesso!"})




    // } catch (error) {
    //     await t.rollback()
    //     res.status(400).json(error)
    // }
}



export default { listar, atualiza }
