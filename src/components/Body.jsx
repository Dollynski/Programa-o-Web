import { useState, useEffect } from "react"
import { dados } from "../../public/animes.js"
import Animes from "./Animes"

function Body() {
  const [animes, setAnimes] = useState([])

  useEffect(() => {
    setAnimes(dados)
  }, [])

  const listaAnimes = animes.map(animes => (
    <Animes
      key={animes.id}
      animes={animes}
    />
  ))

  return (
    <div className="container mt-3" style={{ height: 823 }}>
      <h1>Catálogo de Animes</h1>
      <div className="row">
        {listaAnimes}
    </div>
    </div>
  );
}
export default Body;
