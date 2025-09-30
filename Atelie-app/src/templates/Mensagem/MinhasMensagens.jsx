import { Link } from "react-router-dom"
import Header from "../../components/Header/Header";
import logo from '../../assets/images/primobolan.png';
import Sidebar from "../../components/Sidebar/Sidebar";
import { useEffect, useState } from "react";

const MinhasMensagens = () => {
    const [mensagens, setMensagens] = useState([]);
    const [busca, setBusca] = useState('');

    useEffect(() => {
        // Simular mensagens do usuário logado
        const mensagensUsuario = [
            {
                id: 1,
                destinatario: 'Ateliê',
                dataMensagem: '2024-01-15',
                statusMensagem: 'Lida',
                assunto: 'Dúvida sobre serviço'
            },
            {
                id: 2,
                destinatario: 'Suporte',
                dataMensagem: '2024-01-14',
                statusMensagem: 'Não lida',
                assunto: 'Alteração de pedido'
            }
        ];
        setMensagens(mensagensUsuario);
    }, []);

    const mensagensFiltradas = mensagens.filter(msg => 
        msg.destinatario?.toLowerCase().includes(busca.toLowerCase()) ||
        msg.assunto?.toLowerCase().includes(busca.toLowerCase())
    );

    return (
        <div className="d-flex">
            <Sidebar />
            <div className="p-3 w-100" style={{backgroundColor: '#fff6ed'}}>
                <Header
                    goTo={'/mensagem-usuario'}
                    title={'Minhas Conversas'}
                    logo={logo}
                />
                <div className="border shadow-lg p-2 m-2">
                    <div className='border-bottom rounded-bottom my-3'>
                        <form action="">
                            <div className="row m-3">
                                <div className="col-md-2 text-end">
                                    <label htmlFor="inputBuscar" className="col-form-label fw-bold">Buscar:</label>
                                </div>
                                <div className="col-md-8">
                                    <input 
                                        type="text" 
                                        className="form-control" 
                                        id="inputBuscar"
                                        value={busca}
                                        onChange={(e) => setBusca(e.target.value)}
                                        placeholder="Buscar conversas..."
                                    />
                                </div>
                                <div className="col-md-2">
                                    <button type="button" className="btn btn-primary shadow-lg">
                                        Buscar
                                    </button>
                                </div>
                            </div>
                        </form>
                    </div>
                    <table className="table table-striped table-hover text-center">
                        <thead>
                            <tr>
                                <th scope="col">ID</th>
                                <th scope="col">Destinatário</th>
                                <th scope="col">Assunto</th>
                                <th scope="col">Data</th>
                                <th scope="col">Status</th>
                                <th scope="col">Abrir</th>
                            </tr>
                        </thead>
                        <tbody>
                            {mensagensFiltradas?.map((mensagem) => (
                                <tr key={mensagem.id}>
                                    <th scope="row">{mensagem.id}</th>
                                    <td>{mensagem.destinatario}</td>
                                    <td>{mensagem.assunto}</td>
                                    <td>{mensagem.dataMensagem}</td>
                                    <td>
                                        <span className={`badge ${mensagem.statusMensagem === 'Lida' ? 'bg-success' : 'bg-warning'}`}>
                                            {mensagem.statusMensagem}
                                        </span>
                                    </td>
                                    <td>
                                        <Link to={`/conversa/${mensagem.id}`} className="btn btn-info">
                                            <i className="bi bi-chat-dots me-2"></i>
                                            Abrir
                                        </Link>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}

export default MinhasMensagens;