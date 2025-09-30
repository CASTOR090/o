import { useState } from "react";
import { Link } from 'react-router-dom';
import Header from "../../components/Header/Header";
import logo from '../../assets/images/primobolan.png';
import imgProfile from '../../assets/images/imagem.png';
import Sidebar from "../../components/Sidebar/Sidebar";
import '../../assets/styles/theme.css';

const carrosselStyle = `
    @keyframes scroll {
        0% { transform: translateX(0); }
        100% { transform: translateX(-1400px); }
    }
    .carrossel-animado {
        animation: scroll 12s linear infinite;
    }
    .carrossel-animado:hover {
        animation-play-state: paused;
    }
    .carrossel-container {
        width: 100%;
        max-width: 1400px;
        overflow: hidden;
        margin: 0 auto;
    }
`;

const VerProdutos = () => {
    // Adicionar estilo CSS
    if (!document.getElementById('carrossel-style')) {
        const style = document.createElement('style');
        style.id = 'carrossel-style';
        style.textContent = carrosselStyle;
        document.head.appendChild(style);
    }
    
    const [categorias] = useState([
        { id: 1, nome: "Vestidos", imagem: logo },
        { id: 2, nome: "Blusas", imagem: logo },
        { id: 3, nome: "Calças", imagem: logo },
        { id: 4, nome: "Saias", imagem: logo }
    ]);



    const handleVerDetalhes = () => {
        alert('O pedido deste produto só é feito pelo app');
    };

    const CarrosselComponent = ({ items, title }) => (
        <div className="mb-4">
            <h4 className="text-accent-black mb-3">{title}</h4>
            <div className="carrossel-container mx-auto">
                <div className="d-flex carrossel-animado" style={{ 
                    gap: '30px',
                    width: '2800px'
                }}>
                    {items.concat(items).map((item, index) => (
                        <div key={`${item.id}-${index}`} className="flex-shrink-0" style={{ width: '320px' }}>
                            <Link to={`/categoria/${item.id}/${item.nome}`} style={{ textDecoration: 'none' }}>
                                <div className="card card-elegant">
                                    <div className="card-img-top" 
                                         style={{ height: '240px', backgroundImage: `url(${item.imagem})`, 
                                         backgroundSize: 'cover', backgroundPosition: 'center' }}>
                                    </div>
                                    <div className="card-body text-center">
                                        <h6 className="card-title">{item.nome}</h6>
                                    </div>
                                </div>
                            </Link>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );

    return (
        <div className="d-flex" style={{ backgroundColor: '#F8F9FA' }}>
            <Sidebar />
            <div className="p-3 w-100" style={{ backgroundColor: '#fff6ed' }}>
                <Header
                    goTo={'/home'}
                    title={'Ver Produtos'}
                    logo={logo}
                />

                <div className="container-fluid">
                    <div className="row mb-4">
                        <div className="col-12">
                            <h2 className="text-center mb-4 text-accent-black">Catálogo de Produtos</h2>
                        </div>
                    </div>


                    <CarrosselComponent items={categorias} title="Categorias" />


                    <div className="row mb-4">
                        <div className="col-12">
                            <h3 className="text-accent-black mb-3">Todos os Produtos</h3>
                        </div>
                    </div>

                    <div className="row g-4">
                        {Array.from({ length: 10 }, (_, index) => (
                            <div className="col-md-4" key={index + 1}>
                                <div className="card h-100 card-elegant bg-white">
                                    <div className="card-img-top" 
                                         style={{ height: '250px', backgroundImage: `url(${logo})`, 
                                         backgroundSize: 'cover', backgroundPosition: 'center' }}>
                                    </div>
                                    <div className="card-body">
                                        <h5 className="card-title text-accent-black">Produto {index + 1}</h5>
                                        <p className="card-text">Descrição do produto {index + 1}</p>
                                        <div className="d-flex justify-content-between align-items-center">
                                            <span className="h5 mb-0" style={{ color: '#495057' }}>R$ {(50 + index * 10).toFixed(2)}</span>
                                            <button className="btn btn-beige btn-sm" onClick={handleVerDetalhes}>Ver Detalhes</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default VerProdutos;