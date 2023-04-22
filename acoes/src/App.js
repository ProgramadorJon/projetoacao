//import { useState, useEffect } from 'react';
import './App.css';
import Informacoes from './componentes/Informacoes';
import Menu from './componentes/Menu';
//import axios from "axios"


function App() { 

  // const [simbolo, setUsers] = useState([])

  // async function getSimbolo () {
  //   try {
  //     const res = await axios.get("http://localhost:4000/acao")
  //     setUsers(res.data.sort((a,b) => (a.simbolo > b.simbolo ? 1 : -1)))
  //   } catch (error) {
  //     return error
  //   }
  // }

  // useEffect(() => {
  //   getSimbolo()
  // }, [setUsers])

  return (
    <div className="App">

      <Menu />
      {/*<Informacoes  ticker={input}/> */}

    </div>
  );
}

export default App;
