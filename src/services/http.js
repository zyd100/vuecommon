import axios from 'axios';
//import router from 'vue-router';
import cookie from 'js-cookie';
import {constant,exception} from '../config/constant';
import QS from 'qs';
import tip from './tip';

//设置默认超时时间和请求头,
const instance =axios.create(
    {
        baseURL:"",
        timeout:constant.timeOut,
        headers:{'Content-Type':'application/json;charset=UTF-8'},
        //Put Post Patch 请求前对data进行转换
        transformRequest:[data=>{
            return QS.stringify(data)
        }]
    })

//requset拦截器,注入token
instance.interceptors.request.use(config=>{
    const token=cookie.get(constant.jwtToken)
    token&&(config.headers.Authorization=token)
    return config
}, error => Promise.error(error))

//response拦截器 处理异常
instance.interceptors.response.use(res=>res.status==200?Promise.resolve(res):Promise.reject(res),
    error => {
    const {response} =error
        if(response){
            errorHandler(response.status,response.data)
            return Promise.reject(response)
        }else {
            //断网
        }
    })

//异常处理
const errorHandler = (status,other)=>{
    switch (status) {
        case 403:{
            tip.errorTip(exception.tokenExpired)
            cookie.remove(constant.jwtToken)
            break;
        }
        default:
            tip.errorTip("发生未知错误，请联系管理员")
            console.log(other)
    }
}

export default instance;

