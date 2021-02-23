import React from 'react';

const ProgressBar = (props) => {
 
    return (
        <div className="progress mb-3 ml-4" style={{width: "20%"}}>
            <div className="progress-bar bg-success" role="progressbar" style={{width: `${props.progress}%`}} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">{Math.round(props.progress)}%</div>
        </div>
    )
  };

export default ProgressBar;