import { useState } from 'react';

export default function GetGeneralInformation({
    candidateInfo,
    onCandidateNameChange,
    onCandidateEmailChange,
    onCandidatePhoneChange
}){

    const [isEditing, setIsEditing] = useState(true);

    return (
        <>
            <h1>General Information</h1>
                {isEditing ? (
                    <div className="main-wrapper">
                                               
                        <div className="cont-wrapper">
                            <label>Candidate's name: </label>
                                <input 
                                    value={candidateInfo.candidateName}
                                    onChange={onCandidateNameChange}
                                />
                            
                        </div>
                        <div className="cont-wrapper">
                            <label>Candidate's email:</label>
                                <input 
                                    type = "email"
                                    value={candidateInfo.email}
                                    onChange={onCandidateEmailChange}
                                />
                            
                        </div>
                        <div className="cont-wrapper">
                            <label>Phone number:</label>
                                <input
                                    value={candidateInfo.phoneNumber}
                                    onChange={onCandidatePhoneChange}
                                />
                            
                        </div>  
                        <div className="cont-wrapper">
                            <button onClick = {() => setIsEditing(false)}>Submit</button>
                        </div>                      
                    </div>
                ):(
                    <div className="main-wrapper">
                        
                        <div className="cont-wrapper">
                            <label>Candidate's name:</label>
                            <label>{candidateInfo.candidateName}</label>
                        </div>
                        <div className="cont-wrapper">
                            <label>Candidate's email:</label>
                            <label>{candidateInfo.email}</label>
                        </div>
                        <div className="cont-wrapper">
                            <label>Phone number:</label>
                            <label>{candidateInfo.phoneNumber}</label>
                        </div>  
                        <div className="cont-wrapper">
                            <button onClick = {() => setIsEditing(true)}>Edit</button>
                        </div>                      
                    </div>
                )}
            
        </>

    );

}