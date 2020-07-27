import { fromJS } from 'immutable'
import * as constants from './constants'
const defaultState = fromJS({
    swiperPic:[1,1,1,1],
    isShow:false,    //箭头
    articleList:[],
    recommend:["http://cdn2.jianshu.io/assets/web/banner-s-club-aa8bdf19f8cf729a759da42e4a96f366.png",
    "http://cdn2.jianshu.io/assets/web/banner-s-7-1a0222c91694a1f38e610be4bf9669be.png",
    "http://cdn2.jianshu.io/assets/web/banner-s-5-4ba25cf5041931a0ed2062828b4064cb.png",
    "http://cdn2.jianshu.io/assets/web/banner-s-6-c4d6335bfd688f2ca1115b42b04c28a7.png"],
    qrCodeShow:false,
    nameList:[
        {name:'waectr', email:'945764528@qq.com'}, 
        {name:'实心爆米花', email:'1378465762@qq.com'},
        {name:'啊哈', email:'1240244938@qq.com'},
        {name:'yanghao', email:'571864365@qq.com'},
        {name:'zl', email:'2279356104@qq.com'},
        {name:'管理员', email:'1214659395@qq.com'}
    ],
    listPage:1
}) 
export const HomeReducer = (state = defaultState , action) => {
    switch (action.type) {
        case constants.Mouse_In:
            return state.set('isShow', true);
        case constants.Mouse_Out:
            return state.set('isShow', false);
        case constants.QR_show: 
            return state.set('qrCodeShow',true);
        case constants.QR_down:
            return state.set('qrCodeShow', false)
        case constants.Set_Home_Dt:
            return state.merge({
                swiperPic:action.data.get('swiperPic'),
                // articleList:action.data.get('articleList'),
                recommend:action.data.get('recommend'),
                writer:action.data.get('writer'),
            })
        case constants.Set_Home_List:
            return state.set('articleList',action.data);
        case constants.Add_List:
            return state.merge({
                'articleList': state.get('articleList').concat(action.data),
                'listPage':action.newPage
            })
            
        default:
            return state
    }
}