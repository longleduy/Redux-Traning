import React, { Component } from 'react';
import {connect} from 'react-redux';
import {delEmployee,changeLevel} from '../actions/index';
class Result extends Component {
    constructor(props) {
        super(props);

    }
    updateLvl = (id_emp)=>{
        this.props.onChangeLevel(id_emp);
    }
    edit = (idx,name,lvl)=>{
        ;
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
        return (
            <div>
                <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">

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
                            {this.props.listEmp.map((list, k) => {
                                return (
                                    <tr key={k}>
                                        <td>{k+1}</td>
                                        <td>{list.name}</td>
                                        <td>
                                            <input type="button" 
                                                className={list.level===true?"btn-level-size btn btn-level":"btn-level-size btn btn-default"} 
                                                value={list.level===true?"Admin":"Member"} onClick={()=>this.updateLvl(list.id)} />
                                        </td>
                                        <td>
                                            <button type="button" className="btn btn-success flatButton"
                                                    name="btnEdit" ref="btnEdit" onClick={()=>this.edit(k,list.name,list.level)}>Edit
                                            </button>&nbsp;
                                            <button type="button" className="btn btn-danger flatButton"
                                                    name="btnDel" ref="btnDel" onClick={()=>this.del(list.id)}>Delete
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
        listEmp : state.listEmp
    }
}
const mapDispatchToProps = (dispatch,props) => {
    return {
        onDelEmployee : (id_emp) => {
            dispatch(delEmployee(id_emp))
        },
        onChangeLevel : (id_emp) => {
            dispatch(changeLevel(id_emp))
        }
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(Result);