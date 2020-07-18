import React from 'react';
import { Link } from 'react-router-dom';

import './NUSPlannerHeader.css';

const NUSPlannerHeader = props => {
    return (
        <header className="NUSPlanner-header">
            <h1 className="NUSPlanner-Homepage__title">
                <Link to='/'>
                    <span className="NUS">NUS</span>
                    <span className="Planner">Planner</span>
                </Link>
            </h1>
            {props.children}
        </header>
    );
};

export default NUSPlannerHeader;