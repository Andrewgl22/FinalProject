import React from 'react';
import {Link, Router} from '@reach/router';
import DevList from '../components/DevList';
import JobList from '../components/JobList';
import JobPost from './JobPost';

const Dashboard = (props) => {

    return(
        <div className="App">
            <div>
                <h1>Available Devs</h1>
            </div>
            
            <Link to="/addJob" className="job-button">Add new Job</Link>
            <div>
                <JobList /> 
                <DevList enumObj={props.enumObj} />
            </div>    
        </div>    
    )
}

export default Dashboard;