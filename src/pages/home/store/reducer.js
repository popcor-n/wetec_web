import { fromJS } from 'immutable'
import * as constants from './constants'
const defaultState = fromJS({
    swiperPic:[
    ],
    isShow:false,    //箭头
    articleList:[],
    recommend:[],
    qrCodeShow:false,
    writer:[],
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