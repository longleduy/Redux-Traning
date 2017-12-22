import {VIEW_ADDNEW_FORM} from '../constants/ActionTypes';

var formStatus = {
    view : false,
}
const myReducer = (state = formStatus, action) => {
    switch(action.type){
        case VIEW_ADDNEW_FORM :
            return {
                view : !state.view
            }
        default : return state
    }
    return state;
}
export default myReducer;