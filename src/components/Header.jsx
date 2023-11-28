import 'react-responsive-modal/styles.css'
import { Modal } from 'react-responsive-modal'
import { useState } from 'react'

function Titulo(props) {
  const [open, setOpen] = useState(false)

  function verLista() {
//    console.log(props.vistos)
    setOpen(true)
  }

  const listaVistos = props.vistos.map(visto => (
    <tr>
      <td>{visto.titulo}</td>
      <td>{visto.avaliacao}</td>
    </tr>
  ))

  return (
    <>
      <nav className="navbar bg-dark border-bottom border-body" 
      data-bs-theme="dark">
        <div className="container-fluid">
        <a className="navbar-brand " href="#">
              <img
                src="logo.png"
                alt="Logo"
                width="50"
                height="55"
                className="d-inline-block me-3"
              />
              AniList
            </a>
          <button className="btn btn-primary position-relative"
            onClick={verLista}>
            Ver Lista <i className="bi bi-cart-check"></i>
            <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
              {props.vistos.length}
              <span className="visually-hidden">Animes Adicionados</span>
            </span>
          </button>
        </div>
      </nav>
      <Modal open={open} onClose={() => setOpen(false)} center>
        <h3 className='mt-4'>
          Lista dos Animes Adicionados ao Lista
        </h3>
        <table className='table table-hover mt-3'>
          <thead>
            <tr>
              <th>Título do Anime</th>
              <th>Avaliação</th>
            </tr>
          </thead>
          <tbody>
            {listaVistos}      
          </tbody>
        </table>
      </Modal>
    </>
  )
}

export default Titulo