import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import MyButton from './componentes/button'
import imagemDeFundo from './img/imagemDeFundo.jpg'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <body style={{
        backgroundImage: `url(${imagemDeFundo})`
      }}>
        <header>
          <div className='caixa-cabeçalho'></div>
        </header>
        <div>
          <a href="https://vitejs.dev" target="_blank">
            <img src={viteLogo} className="logo" alt="Vite logo" />
          </a>
          <a href="https://react.dev" target="_blank">
            <img src={reactLogo} className="logo react" alt="React logo" />
          </a>
        </div>
        
        <MyButton/>
        
        
      </body>
    </>
  )
}

export default App
