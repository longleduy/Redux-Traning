
import React, { Component, Fragment } from 'react';
import AddNew  from './Component/AddNew';
import Filter from './Component/Filter';
import Result from './Component/Result';
import {findIndex} from 'lodash';
//import a from '../../test';
class JobManager extends Component {
    constructor(props) {
        super(props);
    }
    // addNew = (idx, name, value) => {
    //     var divAddnew = this.refs.comAddNew.refs.divAddnew;
    //     var btnAddnew = this.refs.comFilter.refs.btnAddnew;
    //     var fullName = this.refs.comAddNew.refs.txtFullname;
    //     var sltAction = this.refs.comAddNew.refs.sltAction;
    //     var btnAdd = this.refs.comAddNew.refs.btnAdd;
    //     btnAdd
    //     var index = this.refs.comAddNew.refs.idx;
    //     this.refs.divResult.setAttribute("class", "col-xs-8 col-sm-8 col-md-8 col-lg-8");
    //     divAddnew.style.display = "inline";
    //     btnAddnew.style.display = "none";
    //     if (idx !== null) {
    //         btnAdd.value = "Edit";
    //         index.value = idx;
    //         fullName.value = name;
    //         sltAction.value = value;
    //     }
    //     else {
    //         btnAdd.value = "Add";
    //         index.value = null;
    //         fullName.value = "";
    //         sltAction.value = "0";
    //     }
    // }
    // canCel = () => {
    //     var btnAddnew = this.refs.comFilter.refs.btnAddnew;
    //     btnAddnew.style.display = "inline";
    //     this.refs.divResult.setAttribute("class", "col-xs-12 col-sm-12 col-md-12 col-lg-12");
    // }
    // addNewMem = (idx, fullname, level) => {
    //     if (fullname === "" || level === "0") {
    //         if (fullname == "") {
    //             this.refs.comAddNew.refs.txtFullname.setAttribute("class", "btn-valid flatInput");
    //         }
    //         else if (level === "0") {
    //             this.refs.comAddNew.refs.sltAction.setAttribute("class", "btn-valid flatSelect");
    //         }
    //         return false;
    //     }
    //     else if (idx !== "" && idx != null) {
    //         var empAddNew = this.state.emp;
    //         empAddNew[idx] = {id: empAddNew[idx].id, name: fullname, level: (level == "1"?true:false) };
    //         this.setState({ emp: empAddNew });
    //         localStorage.setItem('emp', JSON.stringify(empAddNew));
    //         this.refs.comAddNew.refs.txtFullname.setAttribute("class", "flatInput");
    //         this.refs.comAddNew.refs.sltAction.setAttribute("class", "flatSelect");
    //         this.refs.comAddNew.refs.txtFullname.value = "";
    //         this.refs.comAddNew.refs.sltAction.value = "0";
    //     }
    //     else {
    //         var empAddNew = this.state.emp;
    //         var id = empAddNew[empAddNew.length - 1].id + 1;
    //         empAddNew.push({
    //             id: id,
    //             name: fullname,
    //             level: (level == "1"?true:false)
    //         })
    //         this.setState({ emp: empAddNew });
    //         localStorage.setItem('emp', JSON.stringify(empAddNew));
    //         this.refs.comAddNew.refs.txtFullname.setAttribute("class", "flatInput");
    //         this.refs.comAddNew.refs.sltAction.setAttribute("class", "flatSelect");
    //         this.refs.comAddNew.refs.txtFullname.value = "";
    //         this.refs.comAddNew.refs.sltAction.value = "0";
    //     }
    // }
    // updateLvl = (idx) => {
    //     var listUpLvl = this.state.emp;
    //     var index =  findIndex(listUpLvl,function(emp){
    //         return emp.id == idx;
    //     });
    //     listUpLvl[index].level = !listUpLvl[index].level;
    //     this.setState({ emp: listUpLvl });
    //     localStorage.setItem('emp', JSON.stringify(listUpLvl));
    // }
    // del = (idx_del) => {
    //     var listEmp = this.state.emp;
    //     var indexDel = findIndex(listEmp,function(data){
    //         return data.id == idx_del;
    //     })
    //     if (confirm("You sure ?") == true) {
    //         listEmp.splice(indexDel, 1);
    //         this.setState({ emp: listEmp });
    //         localStorage.setItem('emp', JSON.stringify(listEmp));
    //     }
    // }
    // search = (searchValue) => {
    //     var listEmp = this.props.listEmp;
    //     console.log(listEmp);
    //     var result =  listEmp.filter((data) => {
    //         return data.name.toLowerCase().indexOf(searchValue) !== -1;
    //     });
    //     return this.state.emp;
    // }
    render() {
        return (
            <Fragment>
                <div className="container" style={{ marginTop: 20 }}>
                    <div className="row">
                        <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12" ref="divResult">
                            <Filter addNew={this.addNew} generate={this.generate} ref="comFilter" search = {this.search}/>
                            <Result  updateLvl={this.updateLvl} edit={this.addNew} del={this.del} />
                        </div>
                        <AddNew canCel={this.canCel} ref="comAddNew" />
                    </div>
                </div>
            </Fragment>
        )
    }
}
export { JobManager };