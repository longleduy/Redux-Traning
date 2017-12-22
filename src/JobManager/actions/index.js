import {LIST_ALL,
        ADD_EMP,
        VIEW_ADDNEW_FORM,
        DEL_EMPLOYEE,
        CHANGE_LEVEL} from '../constants/ActionTypes';

export const listAll = () => {
    type : LIST_ALL
}
export const addEmp = (emp) => {
    return{
    type : ADD_EMP,
    emp
    }
}
export const viewAddForm = () =>{
    return {
        type : VIEW_ADDNEW_FORM
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