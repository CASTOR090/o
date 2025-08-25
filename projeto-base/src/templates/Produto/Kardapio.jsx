// src/pages/Cardapio.jsx
import React, { useEffect, useRef, useState } from 'react';
import { Link, Element, Events, scrollSpy } from 'react-scroll';
import './Kardapio.css'; // Estilos personalizados
import ProdutoService from '../../services/ProdutoService';
import CategoriaService from '../../services/CategoriaService';

function Kardapio() {
    const [categorias, setCategorias] = useState([]);
    const [produtos, setProdutos] = useState([]);

    const linkRefs = useRef({});
    const [categoriaAtiva, setCategoriaAtiva] = useState(null);

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
        if (categoriaAtiva && linkRefs.current[categoriaAtiva]) {
            linkRefs.current[categoriaAtiva].scrollIntoView({
                behavior: 'smooth',
                inline: 'center',
                block: 'nearest'
            });
        }
    }, [categoriaAtiva]);


    useEffect(() => {
        Events.scrollEvent.register('begin', () => { });
        Events.scrollEvent.register('end', () => { });
        scrollSpy.update();

        return () => {
            Events.scrollEvent.remove('begin');
            Events.scrollEvent.remove('end');
        };
    }, []);

    return (
        <div>
            {/* Menu fixo */}

            <nav className="menu-container">
                <div className="menu-home">
                    <Link
                        to="topo"
                        spy={true}
                        smooth={true}
                        offset={-70}
                        duration={500}
                        className="home-link"
                    >
                        🏠 Home
                    </Link>
                </div>
                <div className="menu-scroll">
                    {categorias.map(cat => (
                        <Link
                            key={cat.id}
                            activeClass="ativo"
                            to={`categoria-${cat.id}`}
                            spy={true}
                            smooth={true}
                            offset={-70}
                            duration={500}
                            onSetActive={() => setCategoriaAtiva(cat.id)}
                        >
                            <span
                                ref={el => linkRefs.current[cat.id] = el}
                                className="menu-item"
                            >
                                {cat.nome}
                            </span>
                        </Link>
                    ))}
                </div>
            </nav>

            <Element name="topo" />

            {/* Conteúdo do cardápio */}
            <div className="conteudo-cardapio">
                {categorias.map(cat => (
                    <Element name={`categoria-${cat.id}`} key={cat.id} className="categoria-section">
                        <h2>{cat.nome}</h2>
                        <div className="produtos">
                            {produtos
                                .filter(p => p.categoria.id === cat.id && p.statusProduto === 'CARDAPIO')
                                .map(p => (
                                    <div key={p.id} className="produto-card">
                                        <h3>{p.nome}</h3>
                                        <p>{p.descricao}</p>
                                        <p><strong>Preço:</strong> R$ {p.preco.toFixed(2)}</p>
                                    </div>
                                ))}
                        </div>
                    </Element>
                ))}
            </div>
        </div>
    );
}

export default Kardapio;
