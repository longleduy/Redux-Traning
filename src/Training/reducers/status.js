import {TOGGLE_STATUS} from '../constants/ActionTypes';
var initState = {
    stt :  false,
}

var myReducer = (state = initState, action) => {
    if(action.type ===  TOGGLE_STATUS){
        state.stt = !state.stt;
        return state;
    }
    return state;
}
export default myReducer;