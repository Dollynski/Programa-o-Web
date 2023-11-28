import Swal from 'sweetalert2'
import Avaliacao from './Avaliacao'

function CardAnime(props) {

  function mostraSinopse(titulo, sinopse) {
    Swal.fire({
      title: titulo,
      text: sinopse
    })    
  }

  return (
    <div className="col-sm-4 mb-3 mb-sm-0">
      <div className="card mb-3">
        <div className="row g-0">
          <div className="col-md-4">
            <img src={props.anime.foto} className="img-fluid rounded-start"
              alt="Capa do anime" />
          </div>
          <div className="col-md-8">
            <div className="card-body">
              <h5 className="card-title">{props.anime.titulo}</h5>
              <p className="card-text">
                <Avaliacao quantidadeEstrelas={5}
                 />
                {/* <small className="text-body-secondary">
                  Avaliação: {props.anime.avaliacao}</small> */}
              </p>
              <p className="card-text">
                <small className="text-body-secondary">
                  Ano: {props.anime.ano}</small>
              </p>
              <p className="card-text">
                <small className="text-body-secondary">
                  Gênero: {props.anime.genero}</small>
              </p>
              <button className="btn btn-sm btn-danger"
                onClick={() => mostraSinopse(props.anime.titulo, props.anime.sinopse)}>
                Ver Sinopse <i className="bi bi-film"></i>
              </button>
              <button className="btn btn-sm btn-primary float-end"
                onClick={() => 
                  props.adicionaAnime(props.anime.titulo, props.anime.avaliacao)}>
                Visto <i className="bi bi-eye"></i>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CardAnime