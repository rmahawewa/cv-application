import { useState } from "react";
import GetGeneralInformation from "./GeneralInformation1";
import EducationalQualifications from "./EducationalQualifications";



let nextId = 0;

export default function CvCreator(){
    //General information
    const [candidateInfo, setCandidateInfo] = useState({
        candidateName: '',
        email: '',
        phoneNumber: ''
    });
    
    //General information
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

    //Education information
    // const [schoolName, setSchoolName] = useState('');
    // const [titleOfStudy, setTitleOfStudy] = useState('');
    // const [dateOfStudy, setDateOfStudy] = useState('');

    const [eduInfo, setEduInfo] = useState([]);     

    function handleEduQualAddButtonClick(schoolName = "abc", titleOfStudy = "def", dateOfStudy = "ghi"){       
        console.log("Add button click");
        setEduInfo([
            ...eduInfo,
            { id: nextId++, schoolName: schoolName, titleOfStudy: titleOfStudy, dateOfStudy: dateOfStudy }
        ]);
    }

    function handleEducationalQualificationOnchange(id, value, event){
        console.log(eduInfo[0].schoolName);
        const eduInformation = [...eduInfo];
        const row = eduInformation.find(
            a => a.id === id
        );     
        if (row){
            if (event && event.target){
                row[value] = event.target.value;
                console.log(row);
                setEduInfo(eduInformation);
            }else {
                console.error("Event or event.target is undefined.");
            }            
        }else{
            console.error(`Row with id ${id} not found.`);
        }   
        
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
            <EducationalQualifications
                eduInfo={eduInfo}
                onAddQualificationButtonClick = {handleEduQualAddButtonClick}
                onInformationChange = {handleEducationalQualificationOnchange}
            />
        </>
        
    );
}