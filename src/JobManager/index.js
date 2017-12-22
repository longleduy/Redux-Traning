//TODO: Module
import ReactDOM from 'react-dom';
import React from 'react';
import { JobManager } from './JobManager';
//TODO: Bootstrap 3
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import 'jquery';
//TODO: Css
import '../../public/stylesheet/cssJobManager.css';
//TODO: Khởi tạo store
import { createStore } from 'redux';
//TODO: Import reducer
import myReducer from './reducers/index';
//TODO: Kết nối react với redux
import {Provider} from 'react-redux';
const store = createStore(myReducer,window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());


ReactDOM.render(<Provider store={store}><JobManager  /></Provider>, document.querySelector('#root'));
