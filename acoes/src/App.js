
import { useState } from 'react';
import './App.css';
import { FaSearch } from 'react-icons/fa'
import axios from "axios"


function App() { 

  const [input, setInput] = useState('')


  async function pesquisar(){

    
    
    if(input === ''){
      alert('Campo de pesquisa vazio')
    }

    try {

      const consultaacao = await axios.get('http://localhost:4000/acao/' +input)
      const id = consultaacao.data.idacao
      const simbolo = consultaacao.data.simbolo
      const nome = consultaacao.data.nome


      const consultacotacao = await axios.get('http://localhost:4000/selecionarcotacao/' +id)

      let cotacao = []
      let valormercado = []
      let volumetransacooes = []
      let moeda = []
      let data = []

      for (const i in consultacotacao.data){
        if ('cotacao' in consultacotacao.data[i]) {
            cotacao.push(consultacotacao.data[i].cotacao)
            valormercado.push(consultacotacao.data[i].valormercado)
            volumetransacooes.push(consultacotacao.data[i].volumetransacooes)
            moeda.push(consultacotacao.data[i].moeda)
            data.push(consultacotacao.data[i].data)
        }
      }

      console.log(cotacao[0],valormercado,volumetransacooes,moeda,data)


    } catch (error) {
      alert('Ops erro ao buscar ticker')
      setInput('')
    }


  }

  return (
    <div className="container">

      <h1 className='title'>Vamos Começar</h1>

      <div className='containerInput'>
        <input
        type='text'
        placeholder='Digite um Ticker...'
        value={input}
        onChange={(e) => setInput(e.target.value)}
        />

        <button className='botaoPesquisar' onClick={pesquisar}>
        <FaSearch size={25} color='#FFF' />
        </button>
      </div>

    </div>
  );
}

export default App;