import {LIST_ALL,
        SAVE_EMPLOYEE,
        VIEW_ADDNEW_FORM,
        DEL_EMPLOYEE,
        CHANGE_LEVEL,
        RESET_PERSON_INFO,
        FILTER_EMPLOYEE} from '../constants/ActionTypes';

export const listAll = () => {
    type : LIST_ALL
}
export const saveEmployee = (personInfo) => {
    return{
    type : SAVE_EMPLOYEE,
    personInfo
    }
}
export const viewAddForm = (type,personInfo = null) =>{
    return {
        type,
        personInfo
    }
}
export const delEmployee = (id_emp) => {
    return {
        type : DEL_EMPLOYEE,
        id_emp
    }
}
export const changeLevel = (id_emp) => {
    return {
        type : CHANGE_LEVEL,
        id_emp
    }
}
export const resetPersoninfo = () => {
    return {
        type : RESET_PERSON_INFO
    }
}
export const filterEmployee = (keyWord) => {
    return {
        type : FILTER_EMPLOYEE,
        keyWord
    }
}
