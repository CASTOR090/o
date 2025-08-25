import { useState } from 'react'
import './App.css'
import { Link } from 'react-router-dom';
import logo from '../../assets/images/atelier-logo.svg';

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <nav className="navbar navbar-expand-lg bg-navbar">
        <div className="container-fluid">
          <img src={logo} alt="" className='rounded-circle' width={40} />
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#home">Home</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#produtos">Produtos</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#quemsomos">Quem Somos</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#faleconosco">Fale Conosco</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <section id='home'>

      </section>
      <section id='produtos'>

      </section>
      <section id='quemsomos'>

      </section>
      <section id='faleconosco'>

      </section>
      <footer>
          <Link to={"/login"} className='btn btn-success'>Entrar</Link>
      </footer>
    </div>
  )
}

export default App;
