import {combineReducers} from 'redux';
import listEmp from './emplyees';
import formStatus from './formControl';
import keyWord from './filterKeyWord';

var myReducer = combineReducers({
    listEmp,
    formStatus,
    keyWord

});
export default myReducer;