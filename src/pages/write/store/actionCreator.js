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
        formData.append("tag",type.get(chos));
        formData.append("content", content);
        formData.append("title",title);
        formData.append("token",user);
        axios.post('http://47.94.91.9:8080/article/putarticle',formData).then((res)=> {
            if(res.data.status === 'success'){
                alert('发布成功');
            }else{
                alert('发布失败');
            }
        })
    }
}

