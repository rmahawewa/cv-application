import { useState } from 'react';
import '../styles/cvCreate.css';

export default function GetGeneralInformation(){
    const [candidateInfo, setCandidateInfo] = useState({
        candidateName: '',
        email: '',
        phoneNumber: ''
    });

    // const [candidateNameEditing, setCandidateNameEditing] = useState(true);
    // const [emailEditing, setEmailEditing] = useState(true);
    // const [phoneNumberEditing, setPhoneNumberEditing] = useState(false);

    const [dataEditing, setDataEditing] = useState({
        candidateNameEditing: true,
        emailEditing: true,
        phoneNumberEditing: true
    });

    function handleCandidateNameChange(e){
        setCandidateInfo({
            ...candidateInfo,
            candidateName: e.target.value
        });
    }

    function handleEmailChange(e){
        setCandidateInfo({
            ...candidateInfo,
            email: e.target.value
        });
    }

    function handlePhoneNumberChange(e){
        setCandidateInfo({
            ...candidateInfo,
            phoneNumber: e.target.value
        });
    }

    function handleCandidateNameSubmitButtonClick(){
        setDataEditing({
            ...dataEditing,
            candidateNameEditing: false
        });
    }

    function handleCandidateNameEditButtonClick(){
        setDataEditing({
            ...dataEditing,
            candidateNameEditing: true
        });
    }

    function handleCandidateEmailSubmitButtonClick(){
        setDataEditing({
            ...dataEditing,
            emailEditing: false
        });
    }

    function handleCandidateEmailEditButtonClick(){
        setDataEditing({
            ...dataEditing,
            emailEditing: true
        });
    }

    function handleCandidatePhoneNumberSubmitButtonClick(){
        setDataEditing({
            ...dataEditing,
            phoneNumberEditing: false
        });
    }

    function handleCandidatePhoneNumberEditButtonClick(){
        setDataEditing({
            ...dataEditing,
            phoneNumberEditing: true
        });
    }

    
    return (
    
            <>
                {dataEditing.candidateNameEditing ? (
                    <div>
                    <label>Candidate's name: 
                    <input 
                        value={candidateInfo.candidateName}
                        onChange={handleCandidateNameChange}
                    />
                    </label>
                    <button onClick={handleCandidateNameSubmitButtonClick}>
                    Submit
                    </button>
                    </div>
                    
                ):(
                    <div>
                        <label>Candidate's name:
                            {candidateInfo.candidateName}
                        </label>
                        <button onClick={handleCandidateNameEditButtonClick}>
                            Edit
                        </button>
                    </div>
                )}

                {dataEditing.emailEditing ? (
                    <div>
                        <label>Candidate's email:
                            <input 
                                value={candidateInfo.email}
                                onChange={handleEmailChange}
                            />
                        </label>
                        <button onClick={handleCandidateEmailSubmitButtonClick}>
                            Submit
                        </button>
                    </div>
                ):(
                    <div>
                        <label>Candidate's email:
                            {candidateInfo.email}
                        </label>
                        <button onClick={handleCandidateEmailEditButtonClick}>
                            Edit
                        </button>
                    </div>
                )}

                {dataEditing.phoneNumberEditing ? (
                    <div>
                        <label>Candidate's phone number:
                            <input 
                                value={candidateInfo.phoneNumber}
                                onChange={handlePhoneNumberChange}
                            />
                        </label>
                        <button onClick={handleCandidatePhoneNumberSubmitButtonClick}>
                            Submit
                        </button>
                    </div>
                ):(
                    <div>
                        <label>Candidate's phone number:
                            {candidateInfo.phoneNumber}
                        </label>
                        <button onClick={handleCandidatePhoneNumberEditButtonClick}>
                            Edit
                        </button>
                    </div>
                )}   
            </>        
        
    );
}