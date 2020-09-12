import Api from '../../../libs/Api';

class LoginController {

    static login(params) {
        return Api.post('/auth', params).then(resp =>{return resp}).catch(error => {return error});
    }

}

export default LoginController;