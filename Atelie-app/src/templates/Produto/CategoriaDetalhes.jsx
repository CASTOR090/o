import Header from "../../components/Header/Header";
import Sidebar from "../../components/Sidebar/Sidebar";
import logo from '../../assets/images/primobolan.png';
import { useParams } from 'react-router-dom';

const CategoriaDetalhes = () => {
    const { id, nome } = useParams();

    return (
        <div className="d-flex" style={{ backgroundColor: '#F8F9FA' }}>
            <Sidebar />
            <div className="p-3 w-100" style={{ backgroundColor: '#fff6ed' }}>
                <Header
                    goTo={'/ver-produtos'}
                    title={'Categoria Detalhes'}
                    logo={logo}
                />
                
                <div className="container-fluid">
                    <div className="row mb-4">
                        <div className="col-12">
                            <h2 className="text-center mb-4 text-accent-black">
                                Categoria: {nome}
                            </h2>
                        </div>
                    </div>

                    <div className="row g-4">
                        {Array.from({ length: 6 }, (_, index) => (
                            <div className="col-md-4" key={index + 1}>
                                <div className="card h-100 card-elegant bg-white">
                                    <div className="card-img-top" 
                                         style={{ height: '250px', backgroundImage: `url(${logo})`, 
                                         backgroundSize: 'cover', backgroundPosition: 'center' }}>
                                    </div>
                                    <div className="card-body">
                                        <h5 className="card-title text-accent-black">{nome} {index + 1}</h5>
                                        <p className="card-text">Descrição do produto {index + 1}</p>
                                        <div className="d-flex justify-content-between align-items-center">
                                            <span className="h5 mb-0" style={{ color: '#495057' }}>R$ {60 + index * 15}</span>
                                            <button className="btn btn-beige btn-sm" onClick={() => alert('O pedido deste produto só é feito pelo app')}>Ver Detalhes</button>
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

export default CategoriaDetalhes;