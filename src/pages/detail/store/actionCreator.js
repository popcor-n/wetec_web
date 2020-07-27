import * as constants from './constants'
import { fromJS } from 'immutable'
import axios from 'axios'
export const getDetail = (id,user) => {
    return (disptach)=> {
        axios.get(`http://47.94.91.9:8080/article/getTextById?textid=${id}`).then((res)=> {
            const result = res.data.data;
            
            disptach(setDetail(result));
        })

        // axios.get(`http://localhost:3000/api/detailData.json?id=${id}`).then((res) => {
        //     const result = res.data.data;
        //     disptach(setDetail(result))
        // })
    }
}
export const setDetail = (result) =>({
    type:constants.SET_DETAIL,
    data:fromJS(result)
});
export const changeLike = (isLike) =>({
    type:constants.CHANGE_LIKE,
    isLike
});
export const handleLike = (isLike, userId, id) => {
    const data = {
        "token": userId,
        "articleId": id,
      }
    return (disptach)=> {
        if(!isLike) {
            axios.post('http://47.94.91.9:8080/article/liketext',data).then((res)=> {
                if(res.data.status === 'fail') {
                    alert(res.data.data.errMsg)
                } else
                    disptach(changeLike(isLike));            
                // disptach(getDetail(id,userId));
            })
        }
        
        
    }
}
export const handleComFocus = (isFocus) =>({
    type: constants.CHANGE_FOCUS,
    isFocus
})
export const cancelComFocus = () =>({
    type: constants.CANCEL_FOCUS
})
export const setCom = (data) => ({
    type: constants.SET_COM,
    data
})
export const publishCom = (com, id, userId) => {
    const req = {
        "commentArticleId": id,
        "commentContext": com,
        "token": userId
    }
    return (disptach) => {
        axios.post('http://47.94.91.9:8080/comment/commentadd', req).then((res) => {
            if(res.data.status === 'success') {
                alert('发布成功');
                disptach(cancelComFocus())
                disptach(getComList(id))
            }
        })
    }
}
export const getComList = (id) => {
    return (disptach) => {
        axios.get(`http://47.94.91.9:8080/comment/commentget?articleid=${id}`).then((res) => {
            disptach(setComList(res.data.data))
        })
    }
}
export const setComList = (data) => ({
    type: constants.SET_COMLIST,
    data
})