import React, { useState } from 'react';
import axios from 'axios';
import {Link, navigate} from '@reach/router'; 

const JobForm = () => {
    const [name,setName] =useState("")
    const [bio, setBio] = useState("")
    const [skills, setSkills] = useState([])
    const type = "job"

    const submitForm = () => {
        axios.post('http://localhost:8000/api/dev/new',{
            name,
            bio,
            skills,
            type
        })
        navigate('/dashboard')
        .then((res)=>res.json(res))
        .catch((err)=>console.log(err))
    }

    return(
        <div className="App">
            <h1>Add A Position</h1>
            <form className="job-form" onSubmit={submitForm}>
                <label>Position:</label>
                <input type="text" onChange={(e)=>setName(e.target.value)}></input><br></br>
                <label>Description:</label>
                <input type="text" onChange={(e)=>setBio(e.target.value)}></input><br></br>
                <label>Skills:</label>
                <input type="text"></input><br></br>
                <input type="hidden" name="job" value="job"></input>
                <input type="submit" value='Submit'></input>
            </form>
            <Link to='/dashboard'>Back to Dashboard</Link>
        </div>
    )
}

export default JobForm;