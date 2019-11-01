import { fromJS } from 'immutable'
import * as constants from './constants'
const defaultState = fromJS({
    email:'',
    code:'',
    nick:'',
    pass:''
})
export const SignupReducer = (state = defaultState, action) => {
    switch (action.type) {
        case constants.SetNumberChange:
            return state.set('email', action.data);
        case constants.SetCodeChange:
            return state.set('code', action.data);
        case constants.SetNickChange:
            return state.set('nick', action.data);
        case constants.SetPassChange:
            return state.set('pass', action.data);
        default:
            return state
    }
}