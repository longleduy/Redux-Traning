import { LIST_ALL,  
         SAVE_EMPLOYEE, 
         DEL_EMPLOYEE,
         CHANGE_LEVEL } from '../constants/ActionTypes';
var listSession = JSON.parse(localStorage.getItem('listEmp'));
var listEmp = listSession ? listSession : [{
    id: "1",
    name: 'Michel',
    level: true
},
{
    id: "2",
    name: 'Jason',
    level: false
},
{
    id: "3",
    name: 'Tina',
    level: false
},
{
    id: "4",
    name: 'Nick',
    level: true
}];
let findIdx = (empList, id_employee) => {
    return empList.findIndex((employee) => {
        return employee.id == id_employee;
    })
}
let randomId = () => {
  return  Math.random().toString().substring(2, 5) + 
          '-' + Math.random().toString(36).substring(2, 5) +
          '-'+Math.random().toString().substring(2, 5) +
          '-' + Math.random().toString(36).substring(2, 5) 
}
const myReducer = (state = listEmp, action) => {
    switch (action.type) {
        case LIST_ALL:
            return state;
        case SAVE_EMPLOYEE:
            let newEmp = {
                id: (action.personInfo.id == '0'?randomId():action.personInfo.id),
                name: (action.personInfo.txtFullname),
                level: (action.personInfo.sltAction == "true" ? true : false)
            };
            let idx = findIdx(state, action.personInfo.id);
            if(action.personInfo.id == '0'){
                state.push(newEmp);
            }
            else{
                state[idx]=newEmp;
            }
            localStorage.setItem('listEmp', JSON.stringify(state));
            return [...state];
        case DEL_EMPLOYEE:
            var idx = findIdx(state, action.id_emp);
            state.splice(idx, 1);
            localStorage.setItem("listEmp", JSON.stringify(state));
            return [...state];
        case CHANGE_LEVEL :
            var idx = findIdx(state, action.id_emp);
            //state[idx].level = !state[idx].level;
            state[idx] = {
                ...state[idx],
                level : !state[idx].level
            };
            localStorage.setItem('listEmp',JSON.stringify(state));
            return [...state]
        default:
            return state;
    }
    return state;
}
export default myReducer;