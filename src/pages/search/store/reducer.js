import { fromJS } from 'immutable'
import * as constants from './constants'
const defaultState = fromJS({
    articleList:[],
    listPage:1,
    title:'',
    isIn: false
})
export const SearchReducer = (state = defaultState , action) => {
    switch (action.type) {
        case constants.Set_Home_List:
        return state.set('articleList',action.data);
        case constants.Add_List:
            return state.merge({
                'articleList': state.get('articleList').concat(action.data),
                'listPage':action.newPage
            })
        case constants.CHANGE_IN:
            return state.set('isIn', !action.value)
        default:
            return state
    }
}