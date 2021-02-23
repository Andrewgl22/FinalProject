import React, { useState, useEffect } from 'react';
import '../App.css';
import axios from 'axios';

const Scrollarea = require('react-scrollbar');

const DevList = (props) => {
    const [devList,setDevList] = useState([])

    useEffect(()=>{
        axios.get('http://localhost:8000/api/devs')
        .then((res)=>{
            setDevList(res.data)
        })
        .catch((err)=>console.log(err))
    },[]);
    
    return(
        <div className="dev-form scrollable">
            
            {devList.map((dev,idx)=>(
                dev.type === 'dev' ?
                <div key={idx} className="dev-info">
                    <h1>{dev.name}</h1>
                        {dev.skills.map((skill,idx)=>(
                            <>
                                <img key={idx} src={props.enumObj[skill]} alt="" height="40" width="40" value={`${props.enumObj[skill]}`} />
                            </>
                        ))}   
                    <p>{dev.bio}</p>
                </div>
                :
                undefined    
            ))}
            
        </div>
    )
}

export default DevList;