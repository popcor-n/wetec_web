import * as constants from './constants'
import { fromJS } from 'immutable'
import axios from 'axios'
// 轮播组件
export const MouseIn = () => ({
    type: constants.Mouse_In
})
export const MouseOut = () => ({
    type: constants.Mouse_Out
})
// 二维码放大
export const QRshow = () =>({
    type:constants.QR_show
})
export const QRdown = () =>({
    type:constants.QR_down
})
//获取首页信息 
export const getHomeDt= () => {
    return (dispatch) => {
        axios.get('http://localhost:3000/api/homeData.json').then((res) => {
            const result = res.data.data;
            dispatch(setHomeDt(result));
        })
        axios.get(`/xuptbbs/post?board=ARTICLE&page=1&per_page=5`).then((res)=> {
            const result = res.data.content;
            console.log(result);
            result.forEach(element => {
                const reg1=/<\s*img\s+[^>]*?src\s*=\s*(\'|\")(.*?)\1[^>]*?\/?\s*>/;
                element.content.match(reg1);
                element.imgUrl= RegExp.$2;
                const reg=/<\/?.+?\/?>/g;
                element.content = element.content.replace(reg,'').replace(/&nbsp;/g,' ');
                if(element.content.length > 40) {
                    element.content= element.content.slice(0, 40)+'...';
                }
                
            });

        
            dispatch(setHomeList(result));
        })
    }
}
// 填充首页
export const setHomeDt = (result) => ({
    type:constants.Set_Home_Dt,
    data:fromJS({
        // articleList:result.articleList,
        recommend:result.recommend,
        swiperPic:result.swiperPic,
        writer:result.writer
    })
})
export const setHomeList = (result) => ({
    type:constants.Set_Home_List,
    data:fromJS(result)
})
//获取更多文章
export const getMoreList= (page) => {
    return (dispatch) => {
        axios.get(`/xuptbbs/post?board=ARTICLE&page=${page+1}&per_page=5`).then((res) => {
            const result = res.data.content;
            console.log(result);
            result.forEach(element => {
                const reg1=/<\s*img\s+[^>]*?src\s*=\s*(\'|\")(.*?)\1[^>]*?\/?\s*>/;
                element.content.match(reg1);
                element.imgUrl= RegExp.$2;
                const reg=/<\/?.+?\/?>/g;
                element.content = element.content.replace(reg,'').replace(/&nbsp;/g,' ');
                if(element.content.length > 40) {
                    element.content= element.content.slice(0, 40)+'...';
                }
                
            });
            dispatch(addList(result, page + 1));
        })
    }
}
//补充文章列表
export const addList= (result, newPage) => ({
    type:constants.Add_List,
    data:fromJS(result),
    newPage
})