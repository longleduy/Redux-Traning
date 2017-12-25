import React, { Component } from 'react';
import {connect} from 'react-redux';
import {delEmployee,changeLevel,viewAddForm} from '../actions/index';
import {EDIT_EMPLOYEE} from '../constants/ActionTypes';
class Result extends Component {
    constructor(props) {
        super(props);

    }
    updateLvl = (id_emp)=>{
        this.props.onChangeLevel(id_emp);
    }
    edit = (id,name,lvl)=>{
        let personInfo = {
            view : true,
            id: id,
            txtFullname : name,
            sltAction : lvl
        }
        this.props.viewAddDiv(EDIT_EMPLOYEE,personInfo);
    }
    del = (idx_del)=>{
        if(confirm("Are you sure?") == true){
            this.props.onDelEmployee(idx_del);
        }
        else{
            return false;
        }
    }
    render() {
        let filterByKeyWord = (list,keyWord) => {
            let listEmployee = list.filter((employee) => {
                if(keyWord.level !== 0){
                    return ((employee.name.toLowerCase().indexOf(keyWord.fullName.toLowerCase()) != -1) && (employee.level == keyWord.level));
                }
                else{
                    return (employee.name.toLowerCase().indexOf(keyWord.fullName.toLowerCase()) != -1);
                }
            })
            return listEmployee;
        };
        let {keyWord} = this.props;
        let {view} = this.props.viewDivState;
        let {listEmp} = this.props;
        let listFilter = filterByKeyWord(listEmp,keyWord);
        return (
            <div>
                <div className={view == true?"col-xs-8 col-sm-8 col-md-8 col-lg-8":"col-xs-12 col-sm-12 col-md-12 col-lg-12"}>

                    <table className="table table-hover">
                        <thead>
                            <tr>
                                <th>ID</th>
                                <th>Name</th>
                                <th>Status</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {listFilter.map((list, k) => {
                                return (
                                    <tr key={k}>
                                        <td>{k+1}</td>
                                        <td>{list.name}</td>
                                        <td>
                                            <input type="button" 
                                                className={list.level===true?"btn-level-size btn btn-level":"btn-level-size btn btn-default"} 
                                                value={list.level===true?"Admin":"Member"} 
                                                onClick={()=>this.updateLvl(list.id)} />
                                        </td>
                                        <td>
                                            <button type="button" className="btn btn-success flatButton"
                                                    name="btnEdit" ref="btnEdit" 
                                                    onClick={()=>this.edit(list.id,list.name,list.level)}
                                                    style={{borderColor:'black'}}>Edit
                                            </button>&nbsp;
                                            <button type="button" className="btn btn-danger flatButton" 
                                                    name="btnDel" ref="btnDel" 
                                                    onClick={()=>this.del(list.id)}>Delete
                                            </button>
                                        </td>
                                    </tr>
                                );
                            })}
                        </tbody>
                    </table>

                </div>
            </div>
        )
    }

}
const mapStateToProps = (state) => {
    return {
        listEmp : state.listEmp,
        viewDivState : state.formStatus,
        keyWord : state.keyWord
    }
}
const mapDispatchToProps = (dispatch,props) => {
    return {
        onDelEmployee : (id_emp) => {
            dispatch(delEmployee(id_emp))
        },
        onChangeLevel : (id_emp) => {
            dispatch(changeLevel(id_emp))
        },
        viewAddDiv : (type,personInfo) => {
            dispatch(viewAddForm(type,personInfo));
        }
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(Result);