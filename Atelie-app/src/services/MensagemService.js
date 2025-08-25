import http from '../common/http-common';

const API_URL = "mensagem/";

const findAll = () => {
    return http.mainInstance.get(API_URL + 'findAll');
};

const MensagemService = {
    findAll,
}

export default MensagemService;
