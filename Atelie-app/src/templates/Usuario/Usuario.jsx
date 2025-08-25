import { Link } from "react-router-dom"
import Header from "../../components/Header/Header";
import logo from '../../assets/images/atelier-logo.svg';
import imgProfile from '../../assets/images/atelier-logo.svg';
import Sidebar from "../../components/Sidebar/Sidebar";

const Usuario = () => {

    return (
        <div className="d-flex">
            <Sidebar />
            <div className="p-3 w-100">
                <Header
                    goTo={'/home'}
                    title={'Usuário'}
                    logo={logo}
                />

                <div className="d-flex justify-content-around align-items-center py-5">
                    <Link to={'/usuarios'} className="btn btn-lg btn-primary">
                        <i className="bi bi-list me-2"></i>
                        Usuários
                    </Link>
                    <Link to={'/novo-usuarios'} className="btn btn-lg btn-success">
                        <i className="bi bi-plus-circle me-2"></i>
                        Novo Usuários
                    </Link>
                </div>
            </div>
        </div>
    )

}

export default Usuario;