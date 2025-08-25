import { Link } from "react-router-dom"
import { useState, useEffect } from "react";
import Header from "../../components/Header/Header";
import logo from '../../assets/images/atelier-logo.svg';
import imgProfile from '../../assets/images/salon.jpg';
import Sidebar from "../../components/Sidebar/Sidebar";
import ServicoService from "../../services/ServicoService";

const Home = () => {
    /*
    const [servicos, setServicos] = useState([]);

    useEffect(() => {
        ServicoService.getAll()
            .then(response => {
                setServicos(response.data);
            })
            .catch(error => {
                console.error("Erro ao carregar serviços:", error);
                // Dados mock para demonstração
                setServicos([
                    { id: 1, nome: "Corte de Cabelo", preco: 50.00, duracao: "30 min" },
                    { id: 2, nome: "Manicure", preco: 25.00, duracao: "45 min" },
                    { id: 3, nome: "Pedicure", preco: 30.00, duracao: "60 min" }
                ]);
            });
    }, []);
*/
    return (
        <div className="d-flex">
            <Sidebar
                imgProfile={imgProfile}
                username={"Atelie Pano Fino"}
            />
            <div className="p-3 w-100">
                <Header
                    goTo={'/home'}
                    title={'Home'}
                    logo={logo}
                />

                <div className="container-fluid">
                    {/*
                    <div className="row">
                        <div className="col-12">
                            <h2>Serviços Disponíveis</h2>
                            <div className="table-responsive">
                                <table className="table table-striped">
                                    <thead>
                                        <tr>
                                            <th>Nome</th>
                                            <th>Preço</th>
                                            <th>Duração</th>
                                            <th>Ações</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {servicos.map(servico => (
                                            <tr key={servico.id}>
                                                <td>{servico.nome}</td>
                                                <td>R$ {servico.preco?.toFixed(2)}</td>
                                                <td>{servico.duracao}</td>
                                                <td>
                                                    <Link to={`/servico/${servico.id}`} className="btn btn-sm btn-primary me-2">
                                                        Editar
                                                    </Link>
                                                </td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                      */}
                </div>
            </div>
        </div>
    )

}

export default Home;