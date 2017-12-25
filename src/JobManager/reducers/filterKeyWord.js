import {FILTER_EMPLOYEE} from '../constants/ActionTypes'
var keyWord = {
    fullName : '',
    level :0
}
const myReducer = (state = keyWord,action) => {
    switch(action.type){
        case FILTER_EMPLOYEE :
            return {
                ...state,
                fullName : action.keyWord.fullName,
                level : action.keyWord.level
            }
        default :
            return state
    }
    return state
         
}
export default myReducer;