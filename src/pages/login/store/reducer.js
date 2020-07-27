import { fromJS } from 'immutable'
import * as constants from './constants'

const defaultState = fromJS({
    login:false,
    name:'',
    id:'',
    email: ''
})
export const LoginReducer = (state = defaultState, action) => {
    switch (action.type) {
        case constants.ChangeLogState:
           if (state.get('login')){
               return state.merge({
                   'login': false,
                   'name':'',
                   'id':'',
                   email: ''
                })
            }else return state.merge({
                'login': true,
                'name': action.name,
                'id':action.id,
                'email': action.email
            });
        case constants.SetUserId:
            return state.set('name', action.id);
        default:
            return state
    }
}