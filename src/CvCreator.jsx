import { useState } from "react";
import GetGeneralInformation from "./GeneralInformation1";
import EducationalQualifications from "./EducationalQualifications";

export default function CvCreator(){
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

    return(
        <>
            <GetGeneralInformation
                candidateInfo = {candidateInfo}
                dataEditing = {dataEditing}
                onCandidateNameChange = {handleCandidateNameChange}
                onCandidateEmailChange = {handleEmailChange}
                onCandidatePhoneChange = {handlePhoneNumberChange}
                onCandidateNameSubmitButtonClick = {handleCandidateNameSubmitButtonClick}
                onCandidateNameEditButtonClick = {handleCandidateNameEditButtonClick}
                onCandidateEmailSubmitButtonClick = {handleCandidateEmailSubmitButtonClick}
                onCandidateEmailEditButtonClick = {handleCandidateEmailEditButtonClick}
                onCandidatePhoneNumberSubmitButtonClick = {handleCandidatePhoneNumberSubmitButtonClick}
                onCandidatePhoneNumberEditButtonClick = {handleCandidatePhoneNumberEditButtonClick}
            />
            <EducationalQualifications />
        </>
        
    );
}