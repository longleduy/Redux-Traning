//TODO : Module
import ReactDOM from 'react-dom';
import React from 'react';
import {JobManager} from './JobManager';
// TODO : Bootstrap 3
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import 'jquery';
// TODO : Css
import '../../public/stylesheet/cssJobManager.css';
var listEmp =[{
        id: 1,
        name: 'Michel',
        level: true
    },
    {
        id: 2,
        name: 'Jason',
        level: false
    },
    {
        id: 3,
        name: 'Tina',
        level: false
    },
    {
        id: 4,
        name: 'Nick',
        level: true
    }];

ReactDOM.render(<JobManager listEmp = {listEmp}/>,document.querySelector('#root'));
