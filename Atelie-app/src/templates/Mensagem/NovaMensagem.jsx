import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Header from "../../components/Header/Header";
import Sidebar from "../../components/Sidebar/Sidebar";
import logo from '../../assets/images/primobolan.png';

const NovaMensagem = () => {
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        destinatario: '',
        assunto: '',
        mensagem: ''
    });

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Simular envio da mensagem
        console.log('Enviando mensagem:', formData);
        alert('Mensagem enviada com sucesso!');
        navigate('/minhas-mensagens');
    };

    return (
        <div className="d-flex">
            <Sidebar />
            <div className="p-3 w-100" style={{backgroundColor: '#fff6ed'}}>
                <Header
                    goTo={'/mensagem-usuario'}
                    title={'Nova Mensagem'}
                    logo={logo}
                />
                <div className="border shadow-lg p-4 m-2">
                    <form onSubmit={handleSubmit}>
                        <div className="mb-3">
                            <label htmlFor="destinatario" className="form-label fw-bold">Destinatário:</label>
                            <select 
                                className="form-select" 
                                id="destinatario"
                                name="destinatario"
                                value={formData.destinatario}
                                onChange={handleChange}
                                required
                            >
                                <option value="">Selecione o destinatário</option>
                                <option value="atelie">Ateliê</option>
                                <option value="suporte">Suporte Técnico</option>
                                <option value="financeiro">Financeiro</option>
                            </select>
                        </div>
                        
                        <div className="mb-3">
                            <label htmlFor="assunto" className="form-label fw-bold">Assunto:</label>
                            <input 
                                type="text" 
                                className="form-control" 
                                id="assunto"
                                name="assunto"
                                value={formData.assunto}
                                onChange={handleChange}
                                placeholder="Digite o assunto da mensagem"
                                required
                            />
                        </div>
                        
                        <div className="mb-3">
                            <label htmlFor="mensagem" className="form-label fw-bold">Mensagem:</label>
                            <textarea 
                                className="form-control" 
                                id="mensagem"
                                name="mensagem"
                                rows="6"
                                value={formData.mensagem}
                                onChange={handleChange}
                                placeholder="Digite sua mensagem aqui..."
                                required
                            ></textarea>
                        </div>
                        
                        <div className="d-flex justify-content-end gap-2">
                            <button 
                                type="button" 
                                className="btn btn-secondary"
                                onClick={() => navigate('/mensagem-usuario')}
                            >
                                Cancelar
                            </button>
                            <button type="submit" className="btn btn-primary">
                                <i className="bi bi-send me-2"></i>
                                Enviar Mensagem
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default NovaMensagem;