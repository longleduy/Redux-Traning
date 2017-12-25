var listEmp = [{
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
let filterEmployee = (listEmployee,keyWord) => {
    return filterList = listEmployee.filter((employee) => {
        return employee.name.indexOf(keyWord) != -1;
    })
}
console.log(filterEmployee(listEmp,'ick'));