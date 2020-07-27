import axios from 'axios'
import * as constants from './constants'
import *as loginAction from '../../login/store/actionCreator'
export const getCode = (number)=> {
    return(dispatch)=> {
        const reg = /^[A-Za-z0-9]+([_.][A-Za-z0-9]+)*@([A-Za-z0-9-]+.)+[A-Za-z]{2,6}$/;
        if(reg.test(number)){
            axios.get(`http://47.94.91.9:8080/mail/getCheckCode?email=${number}`).then((data)=> {
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
            "useremail": email,
            "username": nick,
            "password":pass 
        };
        const reg = /^[A-Za-z0-9]+([_.][A-Za-z0-9]+)*@([A-Za-z0-9-]+.)+[A-Za-z]{2,6}$/;
        if(!reg.test(email)){
            alert('请填写合法邮箱地址');
        }else{
            axios.post('http://47.94.91.9:8080/user/register',data).then((res)=> {
                console.log(res)
                if(res.data.status !== 'success') {
                    if(res.data.data.errCode === 10001) {
                        alert('该邮箱已经注册')
                    }else
                        alert('好像哪里出了问题');
                }else{
                    alert('注册成功啦');
                    dispatch(loginAction.changeLogState(nick));
                }
            })
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