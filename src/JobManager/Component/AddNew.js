import React, { Component } from 'react';
import * as types from '../actions/index';
import {connect} from 'react-redux';
class AddNew extends Component {
    constructor(props) {
        super(props);
        this.state={
            txtFullname:"",
            sltAction: "0"
        }
    }
    cancel = () => {
        this.props.viewAddDiv();
    }
    addNew = () => {
       this.props.onAddEmp(this.state);
       this.refs.txtFullname.value ="";
       this.refs.sltAction.value ="0";
    }
    handleChange = (e) => {
       
        var name = e.target.name;
        var value = e.target.value;
        this.setState({
            [name] : value
        })
    }
    render() {
        var viewStatus = this.props.viewDivState;
        return (
            <div>
                <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12 divAddnew" style={viewStatus == false?{display:'none'}:{display:'inline'}}  ref="divAddnew">
                    <div className="panel panel-default ">
                        <div className="panel-heading">
                            <a onClick={this.cancel} ><span className="glyphicon glyphicon-remove"></span></a>
                            <h3 className="panel-title" style={{ textAlign: "center", fontWeight: "bold" }}>Add a new Job</h3>
                        </div>
                        <div className="panel-body">
                            <div className="divTxt">

                                <input type="text"  
                                    className="flatInput" placeholder="--- Full Name ---" name="txtFullname" ref="txtFullname" onChange={this.handleChange}/>
                                <input type="hidden"  
                                    className="flatInput"  name="idx" ref="idx" />    
                                <select className="flatSelect" name="sltAction" ref="sltAction"  onChange={this.handleChange}>
                                   <option value="0">--- Select level ---</option>
                                   <option  value={true}>Admin</option>
                                    <option value={false}>Member</option>
                                </select>
                            </div>
                            <div className="divBtn">
                                <input type="button"  className="btn btn-success flatButton" ref="btnAdd" value="Add" onClick={this.addNew} />&nbsp;
                                    <input type="button" value="Cancel" className="btn btn-danger flatButton" onClick={this.cancel} />
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
        viewDivState : state.formStatus.view
    }
};
const mapDispatchToProps = (dispatch,props) => {
    return {
        onAddEmp : (emp) => {
            dispatch(types.addEmp(emp));
        },
        viewAddDiv : () => {
            dispatch(types.viewAddForm());
        }
    }
};
export default connect(mapStateToProps,mapDispatchToProps)(AddNew);
//export default AddNew;