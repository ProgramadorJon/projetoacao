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
