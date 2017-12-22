var listEmp =[{
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
var findid = (listEmp,id_emp) => {
  return  listEmp.findIndex((a)=>{
        return a.id == id_emp;
    })
}

console.log(findid(listEmp,"1"));