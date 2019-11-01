import axios from 'axios'
import * as constants from './constants'
export const changeLogState = (name,id)=> ({
    type:constants.ChangeLogState,
    name,
    id
})
export const setLoginData = (number, pass)=> {
    return(dispatch)=> {
        const data = {
            "entrance": number,
            "password": pass
          }
        axios.post('/xuptbbs/entrance/login',data).then((res)=> {
            if(res.data.code === 0){
                document.cookie = `name=${res.data.data.nickname}`;
                document.cookie = `id=${res.data.data.id}`;
                dispatch(changeLogState(res.data.data.nickname,res.data.data.id));
                // dispatch(setUserId(res.data.data.id));
            }else{
                alert('登录失败')
            }
        })
    }
}
