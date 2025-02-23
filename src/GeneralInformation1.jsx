import { useState } from 'react';

export default function GetGeneralInformation({
    candidateInfo,
    dataEditing,
    onCandidateNameChange,
    onCandidateEmailChange,
    onCandidatePhoneChange,
    onCandidateNameSubmitButtonClick,
    onCandidateNameEditButtonClick,
    onCandidateEmailSubmitButtonClick,
    onCandidateEmailEditButtonClick,
    onCandidatePhoneNumberSubmitButtonClick,
    onCandidatePhoneNumberEditButtonClick
}){
    
    return (
    
            <>
                <h1>General Information</h1>

                {dataEditing.candidateNameEditing ? (
                    <div>
                    <label>Candidate's name: 
                    <input 
                        value={candidateInfo.candidateName}
                        onChange={onCandidateNameChange}
                    />
                    </label>
                    <button onClick={onCandidateNameSubmitButtonClick}>
                    Submit
                    </button>
                    </div>
                    
                ):(
                    <div>
                        <label>Candidate's name:
                            {candidateInfo.candidateName}
                        </label>
                        <button onClick={onCandidateNameEditButtonClick}>
                            Edit
                        </button>
                    </div>
                )}

                {dataEditing.emailEditing ? (
                    <div>
                        <label>Candidate's email:
                            <input 
                                value={candidateInfo.email}
                                onChange={onCandidateEmailChange}
                            />
                        </label>
                        <button onClick={onCandidateEmailSubmitButtonClick}>
                            Submit
                        </button>
                    </div>
                ):(
                    <div>
                        <label>Candidate's email:
                            {candidateInfo.email}
                        </label>
                        <button onClick={onCandidateEmailEditButtonClick}>
                            Edit
                        </button>
                    </div>
                )}

                {dataEditing.phoneNumberEditing ? (
                    <div>
                        <label>Candidate's phone number:
                            <input
                                value={candidateInfo.phoneNumber}
                                onChange={onCandidatePhoneChange}
                            />
                        </label>
                        <button onClick={onCandidatePhoneNumberSubmitButtonClick}>
                            Submit
                        </button>
                    </div>
                ):(
                    <div>
                        <label>Candidate's phone number:
                            {candidateInfo.phoneNumber}
                        </label>
                        <button onClick={onCandidatePhoneNumberEditButtonClick}>
                            Edit
                        </button>
                    </div>
                )}   
            </>        
        
    );
}