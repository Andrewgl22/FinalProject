import React from 'react';
import '../App.css';
import {Link} from '@reach/router';
import ProgressBar from './ProgressBar'
// import html from '../static/html.png'
// import css from '../static/css.png'
// import js from '../static/js.png'
// import ruby from '../static/ruby.png'
// import java from '../static/java.png'

// const enumObj = {
//     html: html,
//     css: css,
//     js: js,
//     ruby: ruby,
//     java: java,
//     python: python,
//     swift: swift,
   
// }

const DevForm2 = (props) => {

    const setSkill = (val) =>{
        props.setProgress(props.progress + 8.3)
        props.setSkills([...props.skills,val])
    }

    return(
        <div className="App">
            <div className="blueHeader">
                <h1>Add Your Skills</h1>
                <Link to='/dashboard'>Dashboard</Link>
                <ProgressBar progress={props.progress} />
            </div>
            <div className="form-box">
                <h1>Pick your top 5 Frameworks and Libraries</h1>
                <div style={{border:"2px solid black"}}>
                    <img src={props.enumObj.angular} alt="" height="40" width="40" value="html" onClick={()=>setSkill('angular')} />
                    <img src={props.enumObj.bootstrap} alt="" height="40" width="40" value="css" onClick={()=>setSkill('bootstrap')} />
                    <img src={props.enumObj.django} alt="" height="40" width="40" value="js" onClick={()=>setSkill('django')} />
                    <img src={props.enumObj.react} alt="" height="40" width="40" value="ruby" onClick={()=>setSkill('react')} />
                    <img src={props.enumObj.jquery} alt="" height="40" width="40" value="python" onClick={()=>setSkill('jquery')} />
                    <img src={props.enumObj.node} alt="" height="40" width="40" value="java" onClick={()=>setSkill('node')} />
                    <img src={props.enumObj.vue} alt="" height="40" width="40" value="java" onClick={()=>setSkill('vue')} />
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
                    <p>Add your framework skills and you'll be all set!</p>
                    <input type='submit' value="Complete Profile" style={{backgroundColor:"lightblue"}}></input>
                </form>
            </div>
        </div>
        
    )
}

export default DevForm2;