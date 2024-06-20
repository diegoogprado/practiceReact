import './App.css'
import NavBar from './components/NavBar/NavBar.jsx'
import logo from "./assets/logo dev-02.svg"

import "./App.css"

export default function App() {
  return (
    <div className='app'>
      <NavBar
      logo={logo}
      anchor1="Início"
      anchor2="Formulário"
      anchor3="SlideShow"
      />

    </div>
  
  )
}

