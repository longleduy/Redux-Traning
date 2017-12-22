import {SORT} from '../constants/ActionTypes';
var sort = {
        by : 'name',
        value : 0
    }
var myReducer = (state = sort, action) => {
    if(action.type === SORT){
        var {by,value} = action.sort;
        return {
                by : by,
                value : value
            }
        }
    return state;
}
export default myReducer;