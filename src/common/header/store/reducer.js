import * as constants from './constants'
import { fromJS } from 'immutable'
const defaultState = fromJS({
    focused:false,//是否聚焦input
    mouseIn:false,
    list:[],//推荐搜索里的数据
    page:1,//当前页数
    totalPage:1//总页数
})
export const HeadReducer = (state = defaultState , action) => {
    switch (action.type) {
        case constants.FOCUS_IP:
            return state.set('focused',true);
        case constants.BLUR_IP:
            return state.set('focused', false);
        case constants.CHANGE_LIST:
            return state.set('list',action.value).set('totalPage',Math.ceil(action.length/10));
        case constants.MOUSE_IN:
            return state.set('mouseIn',true);            
        case constants.MOUSE_OUT:
            return state.set('mouseIn',false);            
        case constants.CHANGE_SHOW:
            if(state.get('page') < state.get('totalPage')){
                return state.set('page',state.get('page')+1);
            }else{
                return state.set('page', 1);
            }
        default:
            return state;
    }
}
