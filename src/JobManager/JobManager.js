
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
    render() {
        return (
            <Fragment>
                <div className="container" style={{ marginTop: 20 }}>
                    <div className="row">
                        <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12" ref="divResult">
                            <Filter />
                            <Result />
                            <AddNew  />
                        </div>
                            
                    </div>
                </div>
            </Fragment>
        )
    }
}
export { JobManager };