import axios from 'axios'

class axiosServices {
    constructor() {
        var instance = axios.create();
        instance.interceptors.response.use(this.handleSuccess, this.handleError)
        this.instance = instance
    }


    handleSuccess = (res) => {
        return res
    }

    handleError = (err) => {
        return err
    }

    get(url){
        return this.instance.get(url);
    }
}


export default new axiosServices();