import Swal from 'sweetalert2'

function Animes(props) {

    function mostraSinopse(titulo, sinopse) {
        Swal.fire({
            title: titulo,
            text: sinopse
        });
    }

    function adicionaAnimes( ) {
        
    }

    return (
        <div className="col-sm-4 mb-3 mb-sm-0">
            <div className="card mb-3">
                <div className="row g-0">
                    <div className="col-md-4">
                        <img src={props.animes.foto} className="img-fluid rounded-start"
                            alt="..." />
                    </div>
                    <div className="col-md-8">
                        <div className="card-body">
                            <h5 className="card-title">{props.animes.titulo}</h5>
                            <p className="card-text">{props.animes.genero}</p>
                            <button className="btn btn-sm btn-danger"
                                onClick={() => mostraSinopse(props.animes.titulo, props.animes.sinopse)}>
                                Info <i className="bi bi-film"></i>
                            </button>
                            <button className="btn btn-sm btn-primary float-end"
                                onClick={() => props.adicionaAnimes(props.animes.titulo, props.animes.preco)}>
                                Visto <i className="bi bi-coin"></i>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Animes