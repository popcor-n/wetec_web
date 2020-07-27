import { fromJS } from 'immutable'
import * as constants from './constants'
const defaultState = fromJS({
    id: '',
    author: '',
    title: '',
    content: '',
    isLike: 0,
    likeCount: 0,
    tagName: '',
    comFocused: false, 
    thisCom: '',
    comList: [],
    personName: '',
    email:''
})
export const DetailReducer = (state = defaultState, action) => {
    switch (action.type) {
        case constants.SET_DETAIL:
            return state.merge({
                'id':action.data.get('articleId'),
                'author':action.data.get('useremail'),
                'title':action.data.get('articleTitle'),
                'content':action.data.get('articleContext'),
                'isLike':0,
                'likeCount':action.data.get('articleLike'),
                'tagName': action.data.get('tagname'),
                'personName': action.data.get('username'),
                'email': action.data.get('useremail')
            })
        case constants.CHANGE_LIKE:
            if(action.isLike){
                return state.set('isLike', 0);
            }else{
                return state.merge({
                    'isLike': 1,
                    'likeCount': state.get('likeCount') + 1
                });                
            }
        case constants.CHANGE_FOCUS:
            return state.set('comFocused', true)
        case constants.CANCEL_FOCUS:
            return state.merge({
                'comFocused': false,
                'thisCom': ''
            })

        case constants.SET_COM:
            return state.set('thisCom', action.data)
        case constants.SET_COMLIST:
            return state.set('comList', action.data)
        default:
            return state;
    }
}