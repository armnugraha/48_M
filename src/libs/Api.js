class Api {
    // static host = 'http://167.205.44.60:3000';
    // static host = 'https://node-nikreuh.herokuapp.com';
    static host = 'https://sequelize-nikreuh.herokuapp.com';
    // static host = 'http://192.168.0.101:3000';
    // static host = 'http://192.168.43.189:3000';
    // static host = 'http://192.168.100.7:3000';
    // static host = 'http://192.168.100.4:3000';

    static headers(){
        return{
            'Accept': 'application/json, text/plain, text/json, text/html',
            'Content-Type': 'application/json',
        }
    }

    static get(route){
        return this.xhr(route, null, 'GET');
    }

    static put(route, params){
        return this.xhr(route, params, 'PUT');
    }

    static patch(route, params){
        return this.xhr(route, params, 'PATCH');
    }

    static post(route, params){
        return this.xhr(route, params, 'POST');
    }

    static delete(route, params){
        return this.xhr(route, params, 'DELETE');
    }

  
    static xhr(route, params, verb){
        const url = this.host + route;
        let options = Object.assign({method: verb}, params ? {body: JSON.stringify(params)} : null);
        options.headers = Api.headers();
        return fetch(url, options).then( resp => {
            let json = resp.json();
            if(resp.ok){return json;}
        })
    }
}

export default Api;