import React from 'react';
import { withRouter } from 'react-router';

function Step(props) {
    
    const {label,path,history:{location}} = props;
    console.log(location);
    return (
        <li className={`${path === location.pathname ? 'active' :''}`}>{label}</li>
    )
}

export default withRouter(Step);