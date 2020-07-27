import * as constants from './constants'
import { fromJS } from 'immutable'
import axios from 'axios'

export const getList = (user) => {
    return (dispatch) => {
        axios.get(`http://47.94.91.9:8080/article/gettextlistbytuser?pagenum=1&pagesize=3&useremail=${user}`).then((res) => {
            const result = res.data.data.reverse();
            result.forEach(element => {
                const reg1=/<\s*img\s+[^>]*?src\s*=\s*(\'|\")(.*?)\1[^>]*?\/?\s*>/;
                element.content.match(reg1);
                element.imgUrl= RegExp.$2;
                const reg=/<\/?.+?\/?>/g;
                element.content = element.content.replace(reg,'').replace(/&nbsp;/g,' ');
                if(element.content.length > 40) {
                    element.content= element.content.slice(0, 60)+'...';
                }
            });
            dispatch(setPersonList(result));
        })
        
    }
}
export const setPersonList = (result) => ({
    type:constants.Set_Person_List,
    result
})
export const getUser = (email) => {
    return (dispatch) => {
        axios.get(`http://47.94.91.9:8080/user/getuserinfo?email=${email}`).then((res) => {
            dispatch(setUser(res.data.data))
        })
    }
}
export const setUser = (data) => ({
    type: constants.SET_USER,
    data: data.userName
})
export const setpEmail = (email) => ({
    type: constants.SET_EMAIL,
    email
})
export const deleteArt = (id, userId, email) => {
    const data = {
        "articleId": id,
        "token": userId
    }
    return (dispatch) => {
        axios.post('http://47.94.91.9:8080/article/deletetextbyid', data).then((res) => {
            if(res.data.status === 'fail') {
                alert(res.data.data.errMsg)
            }else {
                dispatch(getList(email))
            }
        })
    }
}
export const handleValueChange = (value) => ({
    type: constants.CHANGE_VALUE,
    value
})
export const publichBack = (value, id) => {
    const data = {
        "content": value,
        "token": id
    }
    return (dispatch) => {
        axios.post('http://47.94.91.9:8080/feedback/feedback', data).then((res) => {
            if(res.data.status === 'fail') {
                alert(res.data.data.errMsg)
            }else {
                alert('反馈成功， 我们会尽快与您取得联系')
            }
        })
    }
}