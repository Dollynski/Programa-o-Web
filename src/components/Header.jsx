import 'react-responsive-modal/styles.css';
import { Modal } from 'react-responsive-modal';
import { useState } from 'react'

function Header(props) {
    const [open, setOpen] = useState(false);
    const [vistos, setVistos] = useState([]);
  
    function verLista() {
      setOpen(true)
    }



    // const listaAnimes = props.lista.map(lista => (
    //   <tr>
    //     <td>{lista.titulo}</td>
    //     <td>{lista.avaliacao}</td>
    //   </tr>
    // ))
    return (
      <div>
        <nav
          className="navbar bg-dark border-bottom border-body"
          data-bs-theme="dark"
        >
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
              Minha Lista
              <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                {/* {props.lista.length} */}
                <span className="visually-hidden">Animes Adicionados</span>
              </span>
            </button>
          </div>
        </nav>

        {/* <Modal open={open} onClose={() => setOpen(false)} center>
          <h3 className='mt-4'>
            Lista dos Animes Adicionados
          </h3>
          <table className='table table-danger table-hover'>
            <thead>
              <tr>
                <th>Título do Anime</th>
                <th>Avaliação</th>
              </tr>
            </thead>
            <tbody>
              {listaAnimes}
            </tbody>
          </table>
        </Modal> */}
        
      </div>
    );
  }
  
  export default Header;
  