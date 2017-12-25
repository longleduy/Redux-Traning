import React, { Component } from 'react';
import {connect} from 'react-redux';
import {viewAddForm,filterEmployee} from '../actions/index';
import {VIEW_ADDNEW_FORM} from '../constants/ActionTypes'
class Filter extends Component {
    constructor(props) {
        super(props);
    }
    addNew = () => {
        this.props.viewAddDiv(VIEW_ADDNEW_FORM);
    }
    handleChange = () => {
        let fullName = this.refs.txtSearch.value;
        let level = this.refs.sltLevel.value;
        let keyWord = {
            fullName,
            level : (level == "0"?0:(level == "true"?true:false))
        }
        this.props.filterEmployee(keyWord);
    }
    render() {
        let viewStatus = this.props.viewDivState;
        let {level} = this.props.keyWord;
        return (
            <div>
                <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">

                    <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12" >
                        <div>
                            <button type="button" className="btn btn-success flatButton"
                                    name="btnAddnew" ref="btnAddnew"
                                    style={viewStatus == true?{display:'none'}:{display:'inline'}}
                                    onClick={this.addNew}>Add a new job
                            </button>&nbsp;
                        </div>
                    </div>
                    <div className="col-xs-9 col-sm-9 col-md-9 col-lg-9" >
                        <div className="divSearch">
                            <input type="text" className="txtSearch" 
                                    placeholder="type something here............" 
                                    name="txtSearch" ref="txtSearch" 
                                    onChange = { this.handleChange }/>
                            <button className="btnSearch">Search</button>
                        </div>
                    </div>
                    <div className="col-xs-3 col-sm-3 col-md-3 col-lg-3" >
                        <div className="">
                            <select name="sltLevel" className=" divSelect" ref="sltLevel" 
                                    onChange={this.handleChange}>
                                <option value={0}>--View All--</option>
                                <option  value={true} >Admin</option>
                                <option value={false} >Member</option>
                            </select>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
const mapStateToProps = (state) => {
    return {
        viewDivState : state.formStatus.view,
        keyWord : state.keyWord
    }
};
const mapDispatcherToProps = (dispatch,props) => {
    return {
        viewAddDiv : (type) => {
            dispatch(viewAddForm(type));
        },
        filterEmployee : (keyWord) => {
            dispatch(filterEmployee(keyWord))
        }      
    }
}
 export default connect(mapStateToProps,mapDispatcherToProps)(Filter);