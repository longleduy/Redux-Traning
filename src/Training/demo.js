import {createStore} from 'redux';
import {stt,sortBy} from './action/index';
import myReducer from './reducers/index';

var store = createStore(myReducer);
console.log(store.getState());
store.dispatch(stt());
store.dispatch(sortBy({
    by : 'Salar',
    value : 3
}));
console.log(store.getState());