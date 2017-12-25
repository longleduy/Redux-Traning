import {combineReducers} from 'redux';
import listEmp from './emplyees';
import formStatus from './formControl';

var myReducer = combineReducers({
    listEmp,
    formStatus,

});
export default myReducer;