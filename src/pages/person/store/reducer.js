import { fromJS } from 'immutable'
import * as constants from './constants'
// import { validate } from '@babel/types';
const defaultState = fromJS({
    articleList:[],
    listPage:1,
    userName:'',
    userEmail:'',
    backValue:''
}) 
export const PersonReducer = (state = defaultState , action) => {
    switch (action.type) {
        case constants.Set_Person_List:
            return state.set('articleList', action.result)
        case constants.SET_USER:
            return state.set('userName',action.data)
        case constants.SET_EMAIL:
            return state.set('userEmail', action.email)
        case constants.CHANGE_VALUE:
            return state.set('backValue', action.value)
        default:
            return state
    }
}