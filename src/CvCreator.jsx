import { useState } from "react";
import GetGeneralInformation from "./GeneralInformation1";
import EducationalQualifications from "./EducationalQualifications";
import PracticalExperiences from "./PracticalExperience";


let nextId = 0;
let pe_nextId = 0;

export default function CvCreator(){
    //General information
    const [candidateInfo, setCandidateInfo] = useState({
        candidateName: '',
        email: '',
        phoneNumber: ''
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

    //education information

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

    //practical experience 

    const [practicalExperience, setPracticalExperience] = useState([]);

    function practicalExperienceAddButtonClick(companyName, position){
        setPracticalExperience([
            ...practicalExperience,
            {id: pe_nextId++, companyName: companyName, position: position, responsibility: []}
        ]);
    }

    function responsibilityAddButtonClick(id, respId, responsibility){
        setPracticalExperience(prevPracticalExperience => {
            const pracExperience = [...prevPracticalExperience];
            const row = pracExperience.find(a => a.id === id);

            if (row) {
                const updatedRow = {
                    ...row,
                    responsibility: [...row.responsibility, {id: respId, resp: responsibility }]
                };
                const updatedPracExperience = pracExperience.map(item => item.id === id ? updatedRow : item);
                return updatedPracExperience;
            } else {
                console.error(`Row with id ${id} not found`);
                return prevPracticalExperience;
            }
        });
    }

    function handlePracticalExperienceOnchange(id, value, event){
        const pracExperience = [...practicalExperience];
        const row = pracExperience.find(
            a => a.id === id
        );
        if (row){
            if(event && event.target){
                row[value] = event.target.value;
                setPracticalExperience(pracExperience);
            }else{
                console.error("Event or event.target is undefined.");
            }
        }else{
            console.error(`Row with id ${id} not found`);
        }
    }

    function handleResponsibilityOnChange(parentId, id, event){
            setPracticalExperience((prevData) => 
                prevData.map((workingExerienceObj) => {
                    if(workingExerienceObj.id === parentId){
                        return{
                            ...workingExerienceObj,
                            responsibility: workingExerienceObj.responsibility.map((respons) => {
                                if (respons.id === id) {
                                    if(event && event.target){
                                        let value = event.target.value;
                                        return {...respons, resp: value};
                                    }
                                    
                                }
                            return respons;
                            }),
                        }
                    }
                return workingExerienceObj;
                }),
            );
    }

    return(
        <>
            <GetGeneralInformation
                candidateInfo = {candidateInfo}
                onCandidateNameChange = {handleCandidateNameChange}
                onCandidateEmailChange = {handleEmailChange}
                onCandidatePhoneChange = {handlePhoneNumberChange}
            />
            <EducationalQualifications
                eduInfo={eduInfo}
                onAddQualificationButtonClick = {handleEduQualAddButtonClick}
                onInformationChange = {handleEducationalQualificationOnchange}
            />
            <PracticalExperiences 
                practicalExperience = {practicalExperience}
                onPracticalExperienceAdd = {practicalExperienceAddButtonClick}
                onPEValuesChange = {handlePracticalExperienceOnchange}
                onAddResponsibilityButtonClick = {responsibilityAddButtonClick}
                onUpdateResponsibility = {handleResponsibilityOnChange}
            />
        </>
        
    );
}