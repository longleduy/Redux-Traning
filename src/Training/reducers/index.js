
import {combineReducers} from 'redux';
import reducerSort from './sort';
import reducerStatus from './status'; 
    const myReducer = combineReducers({
        initState : reducerStatus,
        sort : reducerSort
    })
export default myReducer;