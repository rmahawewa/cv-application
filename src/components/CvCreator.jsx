import { useState } from "react";
import GetGeneralInformation from "./GeneralInformation1";
import EducationalQualifications from "./EducationalQualifications";
import PracticalExperiences from "./PracticalExperience";
import { GetJobRole, GetSummery } from "./JobRoleAndSummery";
import ViewCV from "./ViewCV";
import '../styles/cvCreate.css';



let nextId = 0;
let pe_nextId = 0;

export default function CvCreator(){

    //General information
    const [candidateInfo, setCandidateInfo] = useState({
        candidateName: 'Smith Jenet',
        email: 'smith123@example.com',
        phoneNumber: '0145856956'
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

    function handleOnFocus(field){
        if(field.localeCompare("candidateName") === 0){
            setCandidateInfo({
                ...candidateInfo,
                candidateName: ''
            });
        }
    }

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

    const [editMode, setEditMode] = useState(true);

    //get job role

    const [jobRole, setJobRole] = useState('Software Engineer');

    function handleJobRoleChange(e){
        setJobRole(e.target.value);
    }

    //get summery

    const [summery, setSummery] = useState('Experienced Software Engineer with 3 years of expertise in full-stack JavaScript development. Proficient in building robust and maintainable web applications using React, Node.js, Express.js. Demonstrated ability to collaborate effectively in agile environments and deliver high-quality code. Seeking to leverage my skills to contribute to challenging and impactful projects.');

    function handleSummeryChange(e){
        setSummery(e.target.value);
    }

    return(
        <>
            <div className="main-container">
                <h1>CV Creator</h1>
                {editMode ? (
                    <>
                        <div>
                            <button onClick={() => setEditMode(false)}>
                                View the CV
                            </button>
                        </div>
                        <div className="gi-container">
                            <GetGeneralInformation
                            candidateInfo = {candidateInfo}
                            onCandidateNameChange = {handleCandidateNameChange}
                            onCandidateEmailChange = {handleEmailChange}
                            onCandidatePhoneChange = {handlePhoneNumberChange}
                            setInputEmpty = {handleOnFocus}
                            />
                        </div>
                        <div className="jr-container">
                            <GetJobRole 
                                jobRole = {jobRole}
                                jobRoleOnChange = {handleJobRoleChange}                                
                            />
                        </div>
                        <div className="smry-container">
                            <GetSummery
                                summery = {summery}
                                summeryOnChange = {handleSummeryChange}
                            />
                        </div>
                        <div className="eq-container">
                            <EducationalQualifications
                            eduInfo={eduInfo}
                            onAddQualificationButtonClick = {handleEduQualAddButtonClick}
                            onInformationChange = {handleEducationalQualificationOnchange}
                            />
                        </div>
                        <div className="pe-container">
                            <PracticalExperiences 
                            practicalExperience = {practicalExperience}
                            onPracticalExperienceAdd = {practicalExperienceAddButtonClick}
                            onPEValuesChange = {handlePracticalExperienceOnchange}
                            onAddResponsibilityButtonClick = {responsibilityAddButtonClick}
                            onUpdateResponsibility = {handleResponsibilityOnChange}
                            />
                        </div>
                    </>                    
                ):(
                    <>
                        <div>
                            <button onClick={() => setEditMode(true)}>
                                Edit mode
                            </button>
                        </div>
                        <div className="cv-container">
                            <ViewCV 
                                candidateInfo = {candidateInfo}
                                eduInfo = {eduInfo}
                                practicalExperience = {practicalExperience}
                                jobRole = {jobRole}
                                summery = {summery}
                            />
                        </div>
                    </>
                )}                
            </div>            
            
        </>
        
    );
}