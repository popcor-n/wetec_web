import axios from 'axios'
import * as constants from './constants'
export const choTypeItem = (index)=>({
    type:constants.ChoTypeItem,
    index
});
export const setContent = (data)=> ({
    type:constants.SetContent,
    data
});
export const clearContent = ()=> ({
    type:constants.ClearContent
});
export const setTitle = (value)=> ({
    type:constants.SetTitle,
    value
});
export const publish = (type,chos,title,content,user) => {
    return(dispatch)=> {
        var formData = new FormData();
        formData.append("board",'ARTICLE');
        formData.append("classification",type.get(chos));
        formData.append("content", content);
        formData.append("title",title);
        formData.append("userId",user);
        console.log(formData);
        axios.post('/xuptbbs/post',formData).then((res)=> {
            console.log(res);
            if(res.data.code === 0){
                alert('发布成功');
            }else{
                alert('发布失败');
            }
        })
    }
}

