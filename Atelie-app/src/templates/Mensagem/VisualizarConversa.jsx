import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import Header from "../../components/Header/Header";
import Sidebar from "../../components/Sidebar/Sidebar";
import logo from '../../assets/images/atelier-logo.svg';

const VisualizarConversa = () => {
    const { tipo } = useParams();
    const [mensagens, setMensagens] = useState([]);

    useEffect(() => {
        if (tipo === 'bot') {
            const conversasAnteriores = JSON.parse(localStorage.getItem('conversasAnteriores') || '[]');
            if (conversasAnteriores.length > 0) {
                // Pega a conversa mais recente
                const conversaRecente = conversasAnteriores[conversasAnteriores.length - 1];
                setMensagens(conversaRecente.mensagens);
            }
        }
    }, [tipo]);

    return (
        <div className="d-flex">
            <Sidebar />
            <div className="p-3 w-100">
                <Header
                    goTo={'/mensagens'}
                    title={'Visualizar Conversa'}
                    logo={logo}
                />
                <div className="border shadow-lg p-3 m-2">
                    <div className="border rounded p-3" style={{height: '500px', overflowY: 'auto'}}>
                        {mensagens.map((msg, index) => (
                            <div key={index} className={`mb-2 ${msg.isBot ? 'text-start' : 'text-end'}`}>
                                <div className={`d-inline-block p-2 rounded ${msg.isBot ? 'bg-light' : 'bg-primary text-white'}`}>
                                    {msg.texto}
                                    <small className="d-block mt-1 opacity-75">{msg.timestamp}</small>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default VisualizarConversa;