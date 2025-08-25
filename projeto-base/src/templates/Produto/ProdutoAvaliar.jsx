import { Link, useParams } from "react-router-dom"
import Header from "../../components/Header/Header"
import Sidebar from '../../components/Menu/Sidebar'
import logo from '../../assets/images/home.png'
import { useEffect, useRef, useState } from "react"
import ProdutoService from "../../services/ProdutoService"
import StarRating from "../../components/StarRating/StarRating"
import AvaliacaoService from "../../services/AvaliacaoService"
import UsuarioService from "../../services/UsuarioService"


const ProdutoAvaliar = () => {
    const usuario = UsuarioService.getCurrentUser();
    const { id } = useParams();
    const _dbRecords = useRef(true);

    const initialObjectState = {
        id: null,
        nome: "",
        descricao: "",
        codigoBarras: "",
        foto: null,
        preco: 0,
        categoria: {
            id: null
        },
        statusProduto: ""
    };

    const [produto, setProduto] = useState(initialObjectState);
    const [message, setMessage] = useState();
    const [successful, setSuccessful] = useState(false);

    const [rating, setRating] = useState();
    const [formData, setFormData] = useState({
        comentario: '',
        nota: 0,
        usuario: usuario,
        produto: null
    });
    const [file, setFile] = useState("");

    useEffect(() => {
        if (_dbRecords.current) {
            ProdutoService.findById(id)
                .then(response => {
                    const produto = response.data;
                    setProduto(produto);
                    console.log(produto);
                })
                .catch(e => {
                    console.log(e);
                });
        } return () => {
            _dbRecords.current = false;
        }
    }, [id]);



    const handleSubmit = (e) => {
        e.preventDefault();
        setMessage("");
        setSuccessful(false);

        AvaliacaoService.avaliar(formData, usuario).then(
            (response) => {
                setMessage(response.data.message);
                setSuccessful(true);
                /*window.scrollTo({
                  top: 0,
                  behavior: 'smooth'
                })*/
            }, (error) => {
                const resMessage =
                    (error.response &&
                        error.response.data &&
                        error.response.data.message) ||
                    error.message ||
                    error.toString();

                setMessage(resMessage);
                setSuccessful(false);
            }
        )
    }


    const handleRating = async (_rating) => {
        setRating(_rating);
    };


    return (
        <div className="d-flex">
            <Sidebar />
            <div className="p-3 w-100">
                <Header
                    goto={'/produto'}
                    title={'Editar Produto'}
                    logo={logo}
                />
                <section className="m-2 p-2 shadow-lg">
                    <form className="row g-3 m-3 p-3 border shadow rounded-2" onSubmit={handleSubmit} >
                        {!successful && (
                            <>
                                <div className="col-md-8">
                                    <label htmlFor="inputNome" className="form-label mb-1 fw-bold mb-1 fw-bold">Nome:</label>
                                    <input type="text" className="form-control" id="inputNome" readOnly
                                        name="nome"
                                        defaultValue={produto.nome || ""}
                                    />
                                </div>
                                <div className="col-md-2">
                                    <label htmlFor="inputCodigo" className="form-label mb-1 fw-bold">Código:</label>
                                    <input type="text" className="form-control" id="inputCodigo" readOnly
                                        name="codigoBarras"
                                        defaultValue={produto.codigoBarras || ""}
                                    />
                                </div>
                                <div className="col-md-2">
                                    <label htmlFor="inputPreco" className="form-label mb-1 fw-bold">Preço:</label>
                                    <input type="text" className="form-control" id="inputPreco" readOnly
                                        name="preco"
                                        defaultValue={produto.preco || ""}
                                    />
                                </div>

                                <div className="col-md-10">
                                    <label htmlFor="inputDescricao" className="form-label mb-1 fw-bold">Descrição:</label>
                                    <textarea rows={5} className="form-control" id="inputDescricao" readOnly
                                        name="descricao"
                                        defaultValue={produto.descricao || ""}
                                    >
                                    </textarea>
                                </div>

                                <div className="col-md-2">
                                    <label htmlFor="inputCategoria" className="form-label mb-1 fw-bold">Categoria:</label>
                                    <input type="text" className="form-control" id="inputCategoria" readOnly
                                        name="categoria"
                                        defaultValue={produto.categoria.nome || ""}
                                    />
                                </div>

                                <div className="col-lg-12 text-center my-3">
                                    <img className="shadow-lg" src={produto.foto ? 'data:image/jpeg;base64,' + produto.foto : logo} alt="..." />
                                </div>
                                <div className="col-lg-12 d-flex justify-content-center my-3">
                                    <div className="card" style={{ width: '18rem' }}>
                                        <img className="shadow-lg card-img-top" src={produto.foto ? 'data:image/jpeg;base64,' + produto.foto : logo}  alt="..." />
                                        <div className="card-body">
                                            <h5 className="card-title">Avaliação do Produto</h5>
                                            <div className="card-text">
                                                <StarRating
                                                    totalStars={5}
                                                    onRate={handleRating} />
                                            </div>
                                            <label htmlFor="inputComentario" className="form-label mb-1 fw-bold">Comentário:</label>
                                            <textarea rows={3} className="form-control" id="inputComentario" name="descricao"
                                                defaultValue={formData.comentario || ""}
                                            >
                                            </textarea>
                                            <button className="btn btn-sm fs-2 p-0 float-end">✅</button>
                                        </div>
                                    </div>


                                </div>
                            </>
                        )}
                        {message && (
                            <div className="m-1">
                                <div className={
                                    "text-center h4 fst-italic py-4 rounded-2 " + (successful ? "bg-success" : "bg-danger")
                                }>
                                    {message}
                                </div>
                            </div>
                        )}
                    </form>
                </section>
            </div>
        </div>
    )
}

export default ProdutoAvaliar