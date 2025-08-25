import http from "../common/http-common";
const API_URL = "avaliacao/";

const findAll = () => {
  return http.mainInstance.get(API_URL + "findAll");
};

const findByProdutoId = id => {
  return http.mainInstance.get(API_URL + `findByProdutoId/${id}`);
};

const avaliar = (data, usuario) => {
  const formData = new FormData();
  formData.append('usuario', usuario);
  formData.append('nota', data.nota);
  formData.append('comentario', data.comentario);
console.log(data);
  return http.mainInstance.post(API_URL + `avaliar/${data.produto.id}`, formData);
};

const create = (data, usuario) => {
  const payload = {
    ...data,
    usuario: { id: usuario.id },
    produto: { id: parseInt(data.produto) }
  };

  return http.mainInstance.post(API_URL + "create", payload);
};


const AvaliacaoService = {
  findAll,
  findByProdutoId,
  avaliar,
  create
};

export default AvaliacaoService;