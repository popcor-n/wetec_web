import * as constants from './constants'
import { fromJS } from 'immutable'
import axios from 'axios'
export const getDetail = (id,user) => {
    return (disptach)=> {
        console.log(user)
        axios.get(`/xuptbbs/post/detail?id=${id}&userId=${user}`).then((res)=> {
            const result = res.data;
            
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
export const handleLike = (isLike,author, userId, id, title) => {
    console.log(isLike,author, userId, id, title);
    const data = {
        "myId": userId,
        "postId": id,
        "summary": title,
        "type": isLike,
        "userId": author
      }
    return (disptach)=> {
        axios.post('/xuptbbs/postlike',data).then((res)=> {
            console.log(res);
            disptach(changeLike(isLike));            
            disptach(getDetail(id,userId));
        })
        
    }
}