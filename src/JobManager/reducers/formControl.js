import {VIEW_ADDNEW_FORM,
        CANCEL_FORM,
        EDIT_EMPLOYEE,
        ONCHANGE_INFO,
        RESET_PERSON_INFO} from '../constants/ActionTypes';

var formStatus = {
    view : false,
    id: '0',
    txtFullname : '',
    sltAction : "0"
}
const myReducer = (state = formStatus, action) => {
    switch(action.type){
        case VIEW_ADDNEW_FORM :
            return {
                ...state,
                view : true
            }
        case CANCEL_FORM :
            return {
                ...state,
                view : false
            }
        case EDIT_EMPLOYEE:
            return{
                ...state,
                view : true,
                id : action.personInfo.id,
                txtFullname : action.personInfo.txtFullname,
                sltAction : action.personInfo.sltAction,
            }
        case RESET_PERSON_INFO :
            return {
                ...state,
                view : false,
                id: '0',
                txtFullname : '',
                sltAction : "0"
            }
        case ONCHANGE_INFO:
            return {
                ...state,
                txtFullname : action.personInfo.txtFullname,
                sltAction : action.personInfo.sltAction
            }
        default : return state
    }
    return state;
}
export default myReducer;