import { useState } from 'react'
import './App.css'
import Menu from './components/menu'
import Container from './components/container/container'


function App() {
  const [isModalActive, setIsModalActive] = useState(false)

  return (

    <div className="App">
      <Menu isModalActive={isModalActive} setIsModalActive={setIsModalActive} />
      <Container setIsModalActive={setIsModalActive} />
    </div>
  )
}

export default App
