import { useState } from 'react';

export default function GetGeneralInformation({
    candidateInfo,
    onCandidateNameChange,
    onCandidateEmailChange,
    onCandidatePhoneChange,
    setInputEmpty
}){

    const [isEditing, setIsEditing] = useState(true);

    function isValidEmail(email){
        const pattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        return pattern.test(email);
    }

    function isValidString(name){
        const pattern = /^[A-Z][a-zA-Z '.-]*[A-Za-z][^-]$/;
        return pattern.test(name);
    }

    function isValidPhoneNumber(number){
        const pattern = /^\d{10}$/;
        return pattern.test(number);
    }

    function validateInputs(name,email,phone){
        if(isValidEmail(email) && isValidString(name) && isValidPhoneNumber(phone)){
            return true;
        }else{
            return false;
        }
    }

    return (
        <>
            <h2>General Information</h2>
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
                            <button onClick = {() => {
                                validateInputs(candidateInfo.candidateName,candidateInfo.email,candidateInfo.phoneNumber) && setIsEditing(false);
                            }}>Submit</button>
                        </div> 
                        {!validateInputs(candidateInfo.candidateName,candidateInfo.email,candidateInfo.phoneNumber) && (
                            <div>
                                <label className="error-msg">Please enter valid inputs</label>
                            </div>
                        )} 
                                           
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