import { Link } from "react-router-dom";

const Header = ({goTo, title, logo}) => {
    return (
        <div>
            <div className="d-flex justify-content-between align-content-center
                            p-3 mb-2 border-bottom shadow rounded">
                <Link to={goTo} className="btn btn-warning">Voltar</Link>
                <div>
                    <span className="fw-bold h2">{title}</span>
                </div>
                <div>
                    <img src={logo} alt={'...'} className="img-fluid" width={40} />
                </div>
            </div>
        </div>
    )
}

export default Header;