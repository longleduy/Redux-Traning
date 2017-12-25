import React, { Component } from 'react';
import * as types from '../actions/index';
import {connect} from 'react-redux';
import {CANCEL_FORM,
        ONCHANGE_INFO} from '../constants/ActionTypes';
class AddNew extends Component {
    constructor(props) {
        super(props);
    }
    handleChange = (e) => {
        let txtFullname = this.refs.txtFullname.value;
        let sltAction = this.refs.sltAction.value
        this.props.onChange(ONCHANGE_INFO,{txtFullname,sltAction});
    }
    cancel = () => {
        this.props.viewAddDiv(CANCEL_FORM);
        this.props.onResetPersonInfo();
    }
    addNew = () => {
        this.props.onSaveEmp(this.props.viewDivState);
        this.props.onResetPersonInfo();
    }
    render() {
        let {txtFullname,sltAction,view,id} = this.props.viewDivState;
        return (
            <div>
                <div className="col-xs-4 col-sm-4 col-md-4 col-lg-4 divAddnew" 
                     style={view == false?{display:'none'}:{display:'block'}}  
                     ref="divAddnew">
                    <div className="panel panel-default ">
                        <div className="panel-heading">
                            <a onClick={this.cancel} >
                                <span className="glyphicon glyphicon-remove"></span>
                            </a>
                            <h3 className="panel-title" 
                                style={{ textAlign: "center", fontWeight: "bold" }}>
                                {id == '0'?"Add a new Employee":"Edit Employee"}
                            </h3>
                        </div>
                        <div className="panel-body">
                            <div className="divTxt">
                                <input type="text"  
                                    className="flatInput" placeholder="--- Full Name ---" 
                                    name="txtFullname" ref="txtFullname" 
                                    value={txtFullname} onChange={this.handleChange}/>
                                <input  type="hidden"  
                                        className="flatInput"  name="idx" 
                                        ref="idx" />    
                                <select className="flatSelect" name="sltAction" 
                                        ref="sltAction" value={sltAction} 
                                        onChange={this.handleChange}>
                                   <option value="0">--- Select level ---</option>
                                   <option  value={true}>Admin</option>
                                    <option value={false}>Member</option>
                                </select>
                            </div>
                            <div className="divBtn">
                                <input  type="button"  className="btn btn-success flatButton" 
                                        style={{borderColor:'black'}} ref="btnAdd" value="Save" 
                                        onClick={this.addNew} />&nbsp;
                                <input  type="button" value="Cancel" 
                                        className="btn btn-danger flatButton" onClick={this.cancel} />
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        )
    }

}
const mapStateToProps = (state) => {
    return {
        viewDivState : state.formStatus
    }
};
const mapDispatchToProps = (dispatch,props) => {
    return {
        onSaveEmp : (personInfo) => {
            dispatch(types.saveEmployee(personInfo));
        },
        viewAddDiv : (type) => {
            dispatch(types.viewAddForm(type));
        },
        onChange : (type,personInfo) => {
            dispatch(types.viewAddForm(type,personInfo))
        },
        onResetPersonInfo : () => {
            dispatch(types.resetPersoninfo())
        }
    }
};
export default connect(mapStateToProps,mapDispatchToProps)(AddNew);