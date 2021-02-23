import React, {useState,useEffect} from 'react';
import axios from 'axios';
import {Link} from '@reach/router';
import DevList from '../components/DevList';

const JobPost = (props) => {
    const [job, setJob] = useState({})

    useEffect(()=>{
        axios.get('http://localhost:8000/api/dev/' + props.id)
        .then((res)=>{
            setJob(res.data)
        })
        .catch((err)=>console.log(err))
    },[])

    return(
        <div className="App">
            <Link to='/dashboard'>Back To Dashboard</Link>
            <div className="job-info">
                <h1>{job.name}</h1>
                <p>{job.bio}</p>
            </div>
            <DevList enumObj={props.enumObj} />
        </div>

    )
}

export default JobPost;