import { observable, action } from 'mobx';
import Api from '../libs/Api';

class ProductStore{

    @observable products;
    @observable product_id;
    @observable product_name;

    @action data(){
        return Api.get('/products/?page=1').then(resp =>{
            this.products = resp.data
        });
    }
}

const productStore = new ProductStore();
export default productStore;