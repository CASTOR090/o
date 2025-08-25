import { Routes, Route } from 'react-router-dom';
import App from '../templates/App/App'
import Home from '../templates/Home/Home';
import Login from '../templates/Login/Login';
import Mensagem from '../templates/Mensagem/Mensagem';
import Produto from '../templates/Produto/Produto';
import Promocao from '../templates/Promocao/Promocao';
import Usuario from '../templates/Usuario/Usuario';
import Servico from '../templates/Servico/Servico';
import MensagensLista from '../templates/Mensagem/MensagensLista';
import ProdutosLista from '../templates/Produto/ProdutosLista';
import PromocoesLista from '../templates/Promocao/PromocoesLista';
import UsuariosLista from '../templates/Usuario/UsuariosLista';
import ServicosLista from '../templates/Servico/ServicosLista';
import LoginAlterarSenha from '../templates/Login/LoginAlterarSenha';
import ForgotPassword from '../templates/Login/ForgotPassword';
import Mensagens from '../templates/Mensagens/Mensagens';
import VisualizarConversa from '../templates/Mensagem/VisualizarConversa';
import NovoServico from '../templates/Servico/NovoServico';
import VisualizarServico from '../templates/Servico/VisualizarServico';
import NovoProduto from '../templates/Produto/NovoProduto';
import ProdutoNovo from '../templates/Produto/ProdutoNovo';

const AppRoutes = () => {
    return (
        <Routes>
            <Route path={"/"} element={<App />} />
            <Route path={"/home"} element={<Home /> } />
            <Route path={"/login"} element={<Login /> } />
            <Route path={"/forgotpass"} element={<ForgotPassword /> } />

            <Route path={"/alterarsenha/:id"} element={<LoginAlterarSenha /> } />

            <Route path={"/mensagem"} element={<Mensagem /> } />
            <Route path={"/produto"} element={<Produto /> } />
            <Route path={"/promocao"} element={<Promocao /> } />
            <Route path={"/usuario"} element={<Usuario /> } />
            <Route path={"/servico"} element={<Servico /> } />

            <Route path={"/mensagens"} element={<MensagensLista /> } />
            <Route path={"/produtos"} element={<ProdutosLista /> } />
            <Route path={"/promocoes"} element={<PromocoesLista /> } />
            <Route path={"/usuarios"} element={<UsuariosLista /> } />
            <Route path={"/servicos"} element={<ServicosLista /> } />
            <Route path={"/mensagens-bot"} element={<Mensagens /> } />
            <Route path={"/conversa/:tipo"} element={<VisualizarConversa /> } />
            <Route path={"/novo-servico"} element={<NovoServico /> } />
            <Route path={"/servico/:id"} element={<VisualizarServico /> } />
            <Route path={"/novo-produto"} element={<NovoProduto /> } />
            <Route path={"/produto-novo"} element={<ProdutoNovo /> } />

        </Routes>
    )
}

export default AppRoutes;
