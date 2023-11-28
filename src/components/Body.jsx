import { useState, useEffect } from "react"
import { dados } from "../../public/animes"
import CardAnime from "./CardAnime"

function Novidades(props) {
  const [animes, setAnimes] = useState([])

  useEffect(() => {
    setAnimes(dados)
  }, [])

  const listaAnimes = animes.map(anime => (
    <CardAnime
      key={anime.id}
      anime={anime}
      adicionaAnime={props.adicionaAnime}
    />
  ))

  return (
    <div className="container mt-3">
      <h3>Novidades: animes disponíveis para alugar</h3>
      <div className="row">
        {listaAnimes}
      </div>
    </div>
  )
}

export default Novidades