import {Message} from 'element-ui';

const tip={
    normalTip:(msg)=>{
        Message({
            showClose:true,
            message:msg
        })
    },
    successTip:(msg)=>{
        Message({
            message:msg,
            showClose:true,
            type: 'success'
        });
    },
    warnTip:(msg)=> {
        Message({
            message:msg,
            showClose:true,
            type: 'warning'
        });
    },
    errorTip:(msg)=> {
        Message({
            message:msg,
            showClose:true,
            type: 'error'
        });
    }

}

export default tip;