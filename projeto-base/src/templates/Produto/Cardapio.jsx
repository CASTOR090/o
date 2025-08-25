import { useEffect, useState } from "react";
import ProdutoService from "../../services/ProdutoService";
import logo from '../../assets/images/home.png'
import CategoriaService from "../../services/CategoriaService";
import './Cardapio.css';

const Cardapio = () => {

    const [produtos, setProdutos] = useState([]);
    const [categorias, setCategorias] = useState([]);

    useEffect(() => {
        ProdutoService.findAllCardapio().then(
            (response) => {
                const produtos = response.data;
                setProdutos(produtos);
            }
        ).catch((error) => {
            console.log(error);
        })
    }, []);

    useEffect(() => {
        CategoriaService.findAll().then(
            (response) => {
                const categorias = response.data;
                setCategorias(categorias);
            }
        ).catch((error) => {
            console.log(error);
        })
    }, []);

    return (
        <div className="container">
            <div data-bs-spy="scroll" data-bs-target="#navbar-example2" data-bs-offset="20">
                <div className="menu-cardapio">
                    <nav id="navbar-example2" className="navbar bg-body-tertiary px-3 mb-3">
                        <a className="navbar-brand" href="#">Cardápio</a>
                        <ul className="nav nav-pills">
                            {categorias?.map(categoria => (
                                <li className="nav-item " key={categoria.id}>
                                    <a className="nav-link" href={`#${categoria.id}`}>{categoria.nome}</a>
                                </li>
                            ))}
                        </ul>
                    </nav>
                </div>
                <div className="scrollspy-cardapio">
                    <div data-bs-spy="scroll" data-bs-target="#navbar-example2" data-bs-root-margin="0px 0px -40%" data-bs-smooth-scroll="true" className="bg-body-tertiary p-3 rounded-2 cardapio" tabIndex="0">
                        {categorias?.map(categoria => (
                            <section key={categoria.id}>
                                <h4 id={categoria.id}>{categoria.nome}</h4>
                                {produtos?.map((produto) => (
                                    <div key={produto.id}>
                                        {produto.categoria.id === categoria.id ?
                                            <div className="my-1 shadow p-2 rounded-2">
                                                <h3>{produto.nome}</h3>
                                                <img className='my-3 rounded-4' src={produto.foto ? 'data:image/jpeg;base64,' + produto.foto : logo} alt="logo" width={80} />
                                                <span className="mx-2">{produto.descricao}</span>
                                            </div>
                                            :
                                            <></>
                                        }
                                    </div>

                                ))}
                            </section>
                        ))}
                    </div>
                </div>
            </div>
            <section className='m-3' id='promo'>
                {produtos?.map((produto) => (
                    <div className="card text-center m-5 shadow-lg" key={produto.id}>
                        <div className="card-header">
                            {produto.nome} - R$ {produto.preco}
                        </div>
                        <div className="card-body">
                            <img className='my-3 rounded-4' src={produto.foto ? 'data:image/jpeg;base64,' + produto.foto : logo} alt="logo" />
                            <h5 className="card-title fst-italic">{produto.nome}</h5>
                            <p className="card-text">{produto.descricao}</p>
                            <a href="#" className="btn btn-primary">Saiba mais</a>
                        </div>
                        <div className="card-footer text-muted">
                            Tipo: {produto.categoria.nome}
                        </div>
                    </div>
                ))}

            </section>
        </div>
    )
}

export default Cardapio;