import React, { useState, useEffect } from 'react';
import axios from 'axios';
import {Link} from '@reach/router';

const JobList = () => {

    const [devList,setDevList] = useState([])

    useEffect(()=>{
        axios.get('http://localhost:8000/api/devs')
        .then((res)=>{
            setDevList(res.data)
        })
        .catch((err)=>console.log(err))
    },[]);

    return(
        <div className="job-list">
            <h1>Positions To Fill</h1>
            {devList.map((job,idx)=>(
                job.type === 'job' ?
                <Link to={`/jobpost/${job._id}`} className="job-link">{job.name}</Link>                
                :
                undefined
                )      
                
            )}


        </div>

    )
}

export default JobList;