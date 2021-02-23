import React, { useState } from 'react';
import axios from 'axios';
import { Router, navigate } from '@reach/router';
import DevForm from '../components/DevForm';
import DevForm2 from '../components/DevForm2';

const DevSignUp = (props) => {
    const [name,setName] =useState("")
    const [bio, setBio] = useState("")
    const [skills, setSkills] = useState([])
    const [progress,setProgress] = useState(0)

    const type="dev";

    const submitForm = () => {
        navigate('/dev/new/2/')
        .then((res)=>res.json(res))
        .catch((err)=>console.log(err))
    }

    const submitForm2 = () => {
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
        <div className='App'>
            
            <Router>
                <DevForm path="/" name={name} setName={setName} bio={bio} setBio={setBio} skills={skills} setSkills={setSkills} submitForm = {submitForm} setProgress={setProgress} progress={progress} enumObj={props.enumObj}/>
                <DevForm2 path='/dev/*' skills={skills} setSkills={setSkills} submitForm={submitForm2} setProgress={setProgress} progress={progress} enumObj={props.enumObj}/>
                {props.children}
            </Router>
        </div>

    )
}

export default DevSignUp;