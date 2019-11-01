import { fromJS } from 'immutable'
import * as constants from './constants'
const defaultState = fromJS({
    typeList:['web前端','java后台','产品测试','产品运营','其他相关'],
    chosedItem:'',
    title:'',
    content:''
})
export const WriteReducer = (state = defaultState, action) => {
    switch (action.type) {
        case constants.ChoTypeItem:
           return state.set('chosedItem', action.index);
        case constants.SetContent:
            return state.set('content', action.data);
        case constants.ClearContent:
            return state.merge({'content':'', 'title':'', 'chosedItem':''})
        case constants.SetTitle:
            // console.log(action.value);
            return state.set('title',action.value);
        default:
            return state
    }
}

