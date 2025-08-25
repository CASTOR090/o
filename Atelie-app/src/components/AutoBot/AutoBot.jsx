import { useState, useEffect } from 'react';

const AutoBot = ({ mensagens, onEnviarResposta }) => {
    const [ativo, setAtivo] = useState(true);
    
    const getRespostaInteligente = (mensagemUsuario) => {
        const msg = mensagemUsuario.toLowerCase();
        
        if (msg.includes('olá') || msg.includes('oi') || msg.includes('bom dia') || msg.includes('boa tarde') || msg.includes('boa noite')) {
            return "Olá! É um prazer falar com você. Como posso ajudá-lo hoje?";
        }
        if (msg.includes('como vai') || msg.includes('tudo bem') || msg.includes('como está')) {
            return "Estou muito bem, obrigado por perguntar! E você, como está se sentindo hoje?";
        }
        if (msg.includes('nome') || msg.includes('quem é você') || msg.includes('se apresente')) {
            return "Sou seu assistente virtual do Ateliê! Estou aqui para ajudar com suas dúvidas e necessidades.";
        }
        if (msg.includes('ajuda') || msg.includes('ajudar') || msg.includes('preciso')) {
            return "Claro! Ficarei feliz em ajudar. Me conte mais detalhes sobre o que você precisa.";
        }
        if (msg.includes('produto') || msg.includes('serviço') || msg.includes('comprar')) {
            return "Temos diversos produtos e serviços disponíveis! Que tipo de produto ou serviço você está procurando?";
        }
        if (msg.includes('preço') || msg.includes('valor') || msg.includes('custa') || msg.includes('quanto')) {
            return "Os preços variam conforme o produto ou serviço. Pode me dizer especificamente o que te interessa para dar mais detalhes?";
        }
        if (msg.includes('obrigado') || msg.includes('obrigada') || msg.includes('valeu')) {
            return "Por nada! Fico feliz em poder ajudar. Há mais alguma coisa que posso fazer por você?";
        }
        if (msg.includes('tchau') || msg.includes('até logo') || msg.includes('adeus')) {
            return "Até logo! Foi um prazer conversar com você. Volte sempre que precisar!";
        }
        
        const respostasGerais = [
            "Interessante! Me conte mais sobre isso.",
            "Entendo. Como posso ajudar você com essa questão?",
            "Ótima pergunta! Vou pensar na melhor forma de te ajudar.",
            "Compreendo sua situação. Que tal conversarmos mais sobre isso?",
            "Muito bem! Estou aqui para esclarecer suas dúvidas."
        ];
        
        return respostasGerais[Math.floor(Math.random() * respostasGerais.length)];
    };

    useEffect(() => {
        if (!ativo) return;

        const ultimaMensagem = mensagens[mensagens.length - 1];
        if (ultimaMensagem && !ultimaMensagem.isBot) {
            const timeout = setTimeout(() => {
                const resposta = getRespostaInteligente(ultimaMensagem.texto);
                onEnviarResposta(resposta, true);
            }, 2000);

            return () => clearTimeout(timeout);
        }
    }, [mensagens, ativo]);

    return (
        <div className="d-flex align-items-center mb-2">
            <label className="form-check-label me-2">Bot Automático:</label>
            <div className="form-check form-switch">
                <input
                    className="form-check-input"
                    type="checkbox"
                    checked={ativo}
                    onChange={(e) => setAtivo(e.target.checked)}
                />
            </div>
            <span className={`badge ${ativo ? 'bg-success' : 'bg-secondary'} ms-2`}>
                {ativo ? 'Ativo' : 'Inativo'}
            </span>
        </div>
    );
};

export default AutoBot;