 import { Link } from "react-router-dom"
import Header from "../../components/Header/Header";
import logo from '../../assets/images/atelier-logo.svg';
import imgProfile from '../../assets/images/atelier-logo.svg';
import Sidebar from "../../components/Sidebar/Sidebar";
import { useEffect, useRef, useState } from "react";
import MensagemService from "../../services/MensagemService";

const MensagensLista = () => {

    const _dbRecords = useRef(true);
    const [mensagens, setMensagens] = useState([]);
    const [busca, setBusca] = useState('');
    const [conversasBot, setConversasBot] = useState([]);

    useEffect(() => {
        if (_dbRecords.current) {
            MensagemService.findAll().then(
                (response) => {
                    const mensagens = response.data;
                    setMensagens(mensagens);
                    console.log(mensagens);
                }
            ).catch((error) => {
                setMensagens([]);
                console.log(error);
            })
        }
        
        const conversasAnteriores = JSON.parse(localStorage.getItem('conversasAnteriores') || '[]');
        const conversasFormatadas = conversasAnteriores.map((conversa, index) => ({
            id: index + 3,
            emissor: 'Bot Assistente',
            dataMensagem: conversa.data,
            statusMensagem: 'Lida',
            texto: `Conversa com ${conversa.mensagens.length} mensagens`,
            isBot: true,
            conversaId: conversa.id
        }));
        setConversasBot(conversasFormatadas);
        
        return () => {
            _dbRecords.current = false;
        };
    }, []);

    const mensagensFiltradas = [...mensagens, ...conversasBot].filter(msg => 
        (msg.emissor?.toLowerCase().includes(busca.toLowerCase()) ||
        msg.texto?.toLowerCase().includes(busca.toLowerCase())) &&
        msg.id !== 1 && msg.id !== 2
    );

    return (
        <div className="d-flex">
            <Sidebar  />
            <div className="p-3 w-100">
                <Header
                    goTo={'/mensagem'}
                    title={'Lista de Mensagens'}
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
                                        placeholder="Buscar mensagens..."
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
                                <th scope="col">Emissor</th>
                                <th scope="col">Data</th>
                                <th scope="col">Status</th>
                                <th scope="col">Abrir</th>
                            </tr>
                        </thead>
                        <tbody>
                            {mensagensFiltradas?.map((mensagem, index) => (
                                <tr key={mensagem.id || index}>
                                    <th scope="row">{mensagem.id}</th>
                                    <td>{mensagem.emissor}</td>
                                    <td>{mensagem.dataMensagem}</td>
                                    <td>{mensagem.statusMensagem}</td>
                                    <td>
                                        {mensagem.emissor === 'Bot Assistente' || mensagem.emissor === 'Você' ? (
                                            <Link to="/conversa/bot" className="btn btn-info">
                                                <i className="bi bi-folder2-open me-2"></i>
                                                Abrir
                                            </Link>
                                        ) : (
                                            <button type="button" className="btn btn-info">
                                                <i className="bi bi-folder2-open me-2"></i>
                                                Abrir
                                            </button>
                                        )}
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

export default MensagensLista;