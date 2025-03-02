import { useState } from 'react';
import '../styles/cvCreate.css';

export function GetJobRole({
    jobRole,
    jobRoleOnChange    
}){
    const [isEditing, setIsEditing] = useState(true);

    function isValidString(name){
        const pattern = /^[A-Z][a-zA-Z '.-]*[A-Za-z][^-]$/;
        return pattern.test(name);
    }

    return(
        <>
            <h2>Job Role</h2>
                {isEditing ? (
                    <div className="main-wrapper-jr">
                                               
                        <div className="cont-wrapper">
                            <label>Candidate's job role: </label>
                                <input 
                                    value={jobRole}
                                    onChange={jobRoleOnChange}
                                />                            
                        </div>
                        <div className="cont-wrapper">
                            <button onClick = {() => {
                                isValidString(jobRole) && setIsEditing(false);
                            }}>Submit</button>
                        </div> 
                        {!isValidString(jobRole) && (
                            <div>
                                <label className="error-msg">Please enter valid inputs</label>
                            </div>
                        )}
                    </div>                    
                ):(
                    <div className="main-wrapper-jr">
                                               
                        <div className="cont-wrapper">
                            <label>Candidate's job role: </label>
                            <label>{jobRole}</label>                          
                        </div>
                        <div className="cont-wrapper">
                            <button onClick = {() => setIsEditing(true) }>Edit</button>
                        </div>                         
                    </div>
                )}
        </>
    );

}

export function GetSummery({
    summery,
    summeryOnChange
}){
    const [isEditing, setIsEditing] = useState(true);

    function isValidString(name){
        const pattern = /^[A-Z][a-zA-Z0-9 '.,-]*[A-Za-z][^-]$/;
        return pattern.test(name);
    }

    return(
        <>
            <h2>Summary</h2>
                {isEditing ? (
                    <div className="main-wrapper-sum">
                                               
                        <div className="cont-wrapper">
                            <label>Candidates career Summery: </label> 
                                <textarea 
                                    value={summery}
                                    onChange={summeryOnChange}
                                    rows={4}
                                    cols={50}
                                />                          
                        </div>
                        <div className="cont-wrapper">
                            <button onClick = {() => {
                                isValidString(summery) && setIsEditing(false);
                            }}>Submit</button>
                        </div> 
                        {!isValidString(summery) && (
                            <div>
                                <label className="error-msg">Please enter valid inputs</label>
                            </div>
                        )}
                    </div>                    
                ):(
                    <div className="main-wrapper-sum">
                                               
                        <div className="cont-wrapper">
                            <label>Candidates career Summery: </label>
                            <textarea 
                                    value={summery}
                                    onChange={summeryOnChange}
                                    rows={4}
                                    cols={50}
                                    readOnly
                            />                           
                        </div>
                        <div className="cont-wrapper">
                            <button onClick = {() => setIsEditing(true) }>Edit</button>
                        </div>                         
                    </div>
                )}
        </>
    );
}