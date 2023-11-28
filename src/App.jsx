import { useState } from "react"
import Body from "./components/Body"
import Header from "./components/Header"
import Footer from "./components/Footer" 


function App() {

  const [vistos, setVistos] = useState([])

  function adicionaAnime(titulo, avaliacao) {
    const vistos2 = [...vistos]
    vistos2.push({titulo, avaliacao})
    setVistos(vistos2)
  }

  return (
    <>
      <Header vistos={vistos}/>
      <Body adicionaAnime={adicionaAnime} />
      <Footer/>
    </>
  )
}

export default App
