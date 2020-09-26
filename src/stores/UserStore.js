import AsyncStorage from '@react-native-community/async-storage';
import { observable, action } from 'mobx';
import Api from '../libs/Api';
import base64 from 'react-native-base64'

class UserStore{

    @observable users;
    @observable user_id;
    @observable role_id;
    @observable user_name;
    @observable email;
    @observable token;

    @action login(username, password){
        let params = {
            username: username,
            password: password,
        };
        return Api.post('/auth', params).then(resp =>{
            let getDataToken = resp.data.long;
            let splitToken = getDataToken.split(".",2);

            let decodeToken = base64.decode(splitToken[1])
            let splitDataToken = decodeToken.split(":",4);

            let getSplitId = splitDataToken[1];
            let splitDataId = getSplitId.split(",",1);

            let getSplitEmail = splitDataToken[2];
            let splitDataEmail = getSplitEmail.split(",",1);

            let getSplitRoleId = splitDataToken[3];
            let splitDataRoleId = getSplitRoleId.split(",",1);

            this.token = true;
            this.user_id = splitDataId;
            this.role_id = splitDataRoleId;
            this.user_name = username;
            this.email = splitDataEmail;

            AsyncStorage.setItem('jwtToken', resp.data.long);
        });
    }
}

const userStore = new UserStore();
export default userStore;