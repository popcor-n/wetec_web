import { fromJS } from 'immutable'
import * as constants from './constants'
const defaultState = fromJS({
    id:'',
    author:'',
    title:'',
    content:'',
    isLike:0,
    likeCount:0
})
export const DetailReducer = (state = defaultState, action) => {
    switch (action.type) {
        case constants.SET_DETAIL:
            return state.merge({
                'id':action.data.get('id'),
                'author':action.data.getIn(['userVO', 'id']),
                'title':action.data.get('title'),
                'content':action.data.get('content'),
                'isLike':action.data.get('isLike'),
                'likeCount':action.data.get('likeCount')
            })
        case constants.CHANGE_LIKE:
            console.log('click')
            if(action.isLike){
                return state.set('isLike', 0);
            }else{
                return state.set('isLike', 1);                
            }
        default:
            return state;
    }
}