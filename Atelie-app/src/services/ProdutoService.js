import http from '../common/http-common';

const API_URL = "produto/";

const findAll = () => {
    return http.mainInstance.get(API_URL + 'findAll');
};

const ProdutoService = {
    findAll,
}

export default ProdutoService;
