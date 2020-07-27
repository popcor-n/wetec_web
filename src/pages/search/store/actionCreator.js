import * as constants from './constants'
import { fromJS } from 'immutable'
import axios from 'axios'

export const getHomeDt= (value) => {
    return (dispatch) => {
        axios.get(`http://47.94.91.9:8080/article/searchbytitle?pagenum=1&pagesize=5&title=${value}`).then((res)=> {
            const result = res.data.data;
            console.log(result);
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

        
            dispatch(setHomeList(result));
        })
    }
}
export const setHomeList = (result) => ({
    type:constants.Set_Home_List,
    data:fromJS(result)
})
//获取更多文章
export const getMoreList= (page, value) => {
    return (dispatch) => {
        axios.get(`http://47.94.91.9:8080/article/searchbytitle?pagenum=${++page}&pagesize=5&title=${value}`).then((res) => {
            const result = res.data.data;
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
            if(JSON.stringify(result) !== '[]'){
                dispatch(addList(result, page + 1));          
            }

        })
    }
}
//补充文章列表
export const addList= (result, newPage) => ({
    type:constants.Add_List,
    data:fromJS(result),
    newPage
})
export const setSearchValue = (value) => {
    return(dispatch) => {
        getHomeDt(value)
    }
}
export const changeIn = (value) => ({
    type: constants.CHANGE_IN,
    value
})