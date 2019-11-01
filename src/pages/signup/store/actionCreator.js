import axios from 'axios'
import * as constants from './constants'
import *as loginAction from '../../login/store/actionCreator'
export const getCode = (number)=> {
    return(dispatch)=> {
        const reg = /^[A-Za-z0-9]+([_.][A-Za-z0-9]+)*@([A-Za-z0-9-]+.)+[A-Za-z]{2,6}$/;
        if(reg.test(number)){
            axios.get(`/xuptbbs/code/${number}`).then((data)=> {
                console.log(data);
            })
        }else{
            alert('请填写合法邮箱地址');
        }
        
    }
}
export const signUp = (code, email, nick, pass,)=>{
    return(dispatch)=> {
        const data = {
            "code": code,
            "email": email,
            "nickname": nick,
            "password":pass 
        };
        const reg = /^[A-Za-z0-9]+([_.][A-Za-z0-9]+)*@([A-Za-z0-9-]+.)+[A-Za-z]{2,6}$/;
        if(!reg.test(email)){
            alert('请填写合法邮箱地址');
        }else{
            axios.post('/xuptbbs/entrance/register',data).then((data)=> {
                if(data.data.code !== 0) {
                    alert('好像哪里出了问题');
                }else{
                    alert('注册成功啦');
                    dispatch(loginAction.changeLogState(nick));
                }
            })
            console.log(data);
            
        }
       
    }
}
export const setNumberChange = (data)=> ({
    type:constants.SetNumberChange,
    data
})
export const setCodeChange = (data)=> ({
    type:constants.SetCodeChange,
    data
})
export const setNickChange = (data)=> ({
    type:constants.SetNickChange,
    data
})
export const setPassChange = (data)=> ({
    type:constants.SetPassChange,
    data
})