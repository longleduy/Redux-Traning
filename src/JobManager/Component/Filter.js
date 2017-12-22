import React, { Component } from 'react';
import {connect} from 'react-redux';
import {viewAddForm} from '../actions/index';
class Filter extends Component {
    constructor(props) {
        super(props);
    }
    addNew = () => {
        this.props.viewAddDiv();
    }
    search = (e) => {
        var searchValue = e.target.value;
        this.props.search(searchValue);
    }
    render() {
        return (
            <div>
                <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">

                    <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12" >
                        <div>
                            <button type="button" className="btn btn-success flatButton"
                                name="btnAddnew" ref="btnAddnew"
                                onClick={this.addNew}>Add a new job
                            </button>&nbsp;
                        </div>
                    </div>

                    <div className="col-xs-9 col-sm-9 col-md-9 col-lg-9" >
                        <div className="divSearch">
                            <input type="text" className="txtSearch" placeholder="type something here............" 
                                    name="txtSearch" ref="txtSearch" onChange = { this.search }
                                    />
                            <button className="btnSearch">Search</button>

                        </div>
                    </div>

                    <div className="col-xs-3 col-sm-3 col-md-3 col-lg-3" >
                        <div className="">
                            <select name="sltAction" className=" divSelect">
                                <option value="0">--Order By--</option>
                                <option value="name">FullName</option>
                                <option value="level">Level</option>
                            </select>
                        </div>
                    </div>
                </div>
            </div>
        )
    }

}
const mapDispatcherToProps = (dispatch,props) => {
    return {
        viewAddDiv : () => {
            dispatch(viewAddForm());
        }
    }
}
export default connect(null,mapDispatcherToProps)(Filter);