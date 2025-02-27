import { useState } from 'react';

export default function GetGeneralInformation({
    candidateInfo,
    onCandidateNameChange,
    onCandidateEmailChange,
    onCandidatePhoneChange
}){
    //General information
    // const [dataEditing, setDataEditing] = useState({
    //     candidateNameEditing: true,
    //     emailEditing: true,
    //     phoneNumberEditing: true
    // });

    // function handleCandidateNameSubmitButtonClick(){
    //     setDataEditing({
    //         ...dataEditing,
    //         candidateNameEditing: false
    //     });
    // }

    // function handleCandidateNameEditButtonClick(){
    //     setDataEditing({
    //         ...dataEditing,
    //         candidateNameEditing: true
    //     });
    // }

    // function handleCandidateEmailSubmitButtonClick(){
    //     setDataEditing({
    //         ...dataEditing,
    //         emailEditing: false
    //     });
    // }

    // function handleCandidateEmailEditButtonClick(){
    //     setDataEditing({
    //         ...dataEditing,
    //         emailEditing: true
    //     });
    // }

    // function handleCandidatePhoneNumberSubmitButtonClick(){
    //     setDataEditing({
    //         ...dataEditing,
    //         phoneNumberEditing: false
    //     });
    // }

    // function handleCandidatePhoneNumberEditButtonClick(){
    //     setDataEditing({
    //         ...dataEditing,
    //         phoneNumberEditing: true
    //     });
    // }

    const [isEditing, setIsEditing] = useState(true);

    return (
        <>
            <h1>General Information</h1>
                {isEditing ? (
                    <div>
                        <div>
                            <button onClick = {() => setIsEditing(false)}>Submit</button>
                        </div>                        
                        <div>
                            <label>Candidate's name: 
                                <input 
                                    value={candidateInfo.candidateName}
                                    onChange={onCandidateNameChange}
                                />
                            </label>
                        </div>
                        <div>
                            <label>Candidate's email:
                                <input 
                                    value={candidateInfo.email}
                                    onChange={onCandidateEmailChange}
                                />
                            </label>
                        </div>
                        <div>
                            <label>Candidate's phone number:
                                <input
                                    value={candidateInfo.phoneNumber}
                                    onChange={onCandidatePhoneChange}
                                />
                            </label>
                        </div>                       
                    </div>
                ):(
                    <div>
                        <div>
                            <button onClick = {() => setIsEditing(true)}>Edit</button>
                        </div>
                        <div>
                            <label>Candidate's name:</label>
                            <label>{candidateInfo.candidateName}</label>
                        </div>
                        <div>
                            <label>Candidate's email:</label>
                            <label>{candidateInfo.email}</label>
                        </div>
                        <div>
                            <label>Candidate's phone number:</label>
                            <label>{candidateInfo.phoneNumber}</label>
                        </div>                        
                    </div>
                )}
            
        </>

    );

    
    
    // return (
    
    //         <>
    //             <h1>General Information</h1>

    //             {dataEditing.candidateNameEditing ? (
    //                 <div>
    //                 <label>Candidate's name: 
    //                 <input 
    //                     value={candidateInfo.candidateName}
    //                     onChange={onCandidateNameChange}
    //                 />
    //                 </label>
    //                 <button onClick={handleCandidateNameSubmitButtonClick}>
    //                 Submit
    //                 </button>
    //                 </div>
                    
    //             ):(
    //                 <div>
    //                     <label>Candidate's name:
    //                         {candidateInfo.candidateName}
    //                     </label>
    //                     <button onClick={handleCandidateNameEditButtonClick}>
    //                         Edit
    //                     </button>
    //                 </div>
    //             )}

    //             {dataEditing.emailEditing ? (
    //                 <div>
    //                     <label>Candidate's email:
    //                         <input 
    //                             value={candidateInfo.email}
    //                             onChange={onCandidateEmailChange}
    //                         />
    //                     </label>
    //                     <button onClick={handleCandidateEmailSubmitButtonClick}>
    //                         Submit
    //                     </button>
    //                 </div>
    //             ):(
    //                 <div>
    //                     <label>Candidate's email:
    //                         {candidateInfo.email}
    //                     </label>
    //                     <button onClick={handleCandidateEmailEditButtonClick}>
    //                         Edit
    //                     </button>
    //                 </div>
    //             )}

    //             {dataEditing.phoneNumberEditing ? (
    //                 <div>
    //                     <label>Candidate's phone number:
    //                         <input
    //                             value={candidateInfo.phoneNumber}
    //                             onChange={onCandidatePhoneChange}
    //                         />
    //                     </label>
    //                     <button onClick={handleCandidatePhoneNumberSubmitButtonClick}>
    //                         Submit
    //                     </button>
    //                 </div>
    //             ):(
    //                 <div>
    //                     <label>Candidate's phone number:
    //                         {candidateInfo.phoneNumber}
    //                     </label>
    //                     <button onClick={handleCandidatePhoneNumberEditButtonClick}>
    //                         Edit
    //                     </button>
    //                 </div>
    //             )}   
    //         </>        
        
    // );
}