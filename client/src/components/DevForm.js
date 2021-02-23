import React from 'react';
import {Link} from '@reach/router';
import '../App.css'
import ProgressBar from './ProgressBar'


const DevForm = (props) => {

    // const imgArr = [html,css,js,ruby,java,python]
    
    const setName = (e) =>{
        props.setName(e.target.value)
        if(!props.name)
        props.setProgress(props.progress + 8.5)
    }

    const setBio = (e) =>{
        props.setBio(e.target.value)
        if(!props.bio)
        props.setProgress(props.progress +8.5)
    }

    const str = "hello"

    const setSkill = (val) =>{
            props.setProgress(props.progress + 8.3);
            props.setSkills([...props.skills,val]);   
        }    



    return(
        <div className="App">
            <div className="blueHeader">
                <h1>Add Your Skills</h1>
                <Link to='/dashboard'>Dashboard</Link>
                <ProgressBar progress={props.progress} />
            </div>
            <div className="form-box">
                <h1>Pick your top 5 languages</h1>
                <div style={{border:"2px solid black"}}>
                    <img src={props.enumObj.html} alt="" height="40" width="40" value="html" onClick={(e)=>setSkill('html')}  />
                    <img src={props.enumObj.css} alt="" height="40" width="40" value="css" onClick={()=>setSkill('css')} />
                    <img src={props.enumObj.js} alt="" height="40" width="40" value="js" onClick={()=>setSkill('js')} />
                    <img src={props.enumObj.ruby} alt="" height="40" width="40" value="ruby" onClick={()=>setSkill('ruby')} />
                    <img src={props.enumObj.python} alt="" height="40" width="40" value="python" onClick={()=>setSkill('python')} />
                    <img src={props.enumObj.java} alt="" height="40" width="40" value="java" onClick={()=>setSkill('java')} />
                    <img src={props.enumObj.swift} alt="" height="40" width="40" value="swift" onClick={()=>setSkill('swift')} />
                </div>
            </div>
            <div className="form-box">
                <form onSubmit={props.submitForm}>
                    <div className="pic-box">
                        {props.skills.map((skill,idx)=>(
                            <>
                          <img key={idx} src={props.enumObj[skill]} alt="" height="40" width="40" value={`${skill}`} />
                          </> 
                        ))}
                    </div><br></br>
                    <label>Name:</label>
                    <input type="text" onChange={setName} /><br></br>
                    <label>Short Bio:</label>
                    <textarea row='4' cols='30' onChange={setBio} /><br></br><br></br>
                    <Link to="/dev/new/2" className="next-button">Next:Frameworks and Libraries</Link>
                </form>
            </div>
        </div>
        
    )
}

export default DevForm;