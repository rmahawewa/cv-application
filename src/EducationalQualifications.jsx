import { useState } from "react";

let nextId = 0;

export default function EducationalQualifications() {
    const [schoolName, setSchoolName] = useState('');
    const [titleOfStudy, setTitleOfStudy] = useState('');
    const [dateOfStudy, setDateOfStudy] = useState('');
    const [eduInfo, setEduInfo] = useState([]);
    

    function handleEduQualAddButtonClick(){
        setEduInfo([
            ...eduInfo,
            { id: nextId++, schoolName: schoolName, titleOfStudy: titleOfStudy, dateOfStudy: dateOfStudy }
        ]);
        
    }
//react dev tools -> browsers dev tools -> components -> educationInfo component 
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

    return (
        <>
            <h1>Educational Experience</h1>
            <label >School name:
                <input 
                    value = {schoolName}
                    onChange = {e => setSchoolName(e.target.value)}
                />
            </label>
            <label>Title of study:
                <input 
                    value = {titleOfStudy}
                    onChange = {e => setTitleOfStudy(e.target.value)}
                />
            </label>
            <label>Date of study:
                <input
                    value = {dateOfStudy}
                    onChange = {e => setDateOfStudy(e.target.value)}
                />
            </label>
            <button onClick = {handleEduQualAddButtonClick}>
                Add
            </button>

            <EduInfoList 
                eduInfo = {eduInfo}
            />

        </>
    );
}

function EduInfoList(
    {eduInfo}
){
    const [isEditing, setIsEditing] = useState(false);

    return(
        <>
            <ul>
            {isEditing ? (
            <>             
                {eduInfo.map((info, index) => (
                    
                <li key={info.id}>
                    <ul>
                    <li>
                        <label>School name: 
                            <input 
                                value = {info.schoolName}
                                // onChange = {(e) => handleEducationalQualificationOnchange(info.id, "schoolName", e)}
                            />
                        </label>
                    </li>
                    <li>
                        <label>Title of study:
                            <input 
                                value = {info.titleOfStudy}
                                // onChange = {(e) => handleEducationalQualificationOnchange(info.id, "titleOfStudy", e)}
                            />
                        </label>
                    </li>
                    <li>
                        <label>Date of study:
                            <input 
                                value = {info.dateOfStudy}
                                // onChange = {(e) => handleEducationalQualificationOnchange(info.id, "dateOfStudy", e)}
                            />
                        </label>
                    </li>
                    </ul>
                </li>
                ))}                 
                {eduInfo.length > 0 && ( 
                    <button onClick={() => setIsEditing(false)}>
                    Submit</button>
                )}                
            </>
            ):(
                //Non editing content              
            <>
                {eduInfo.map((info, index) => (
                    <li key={info.id}>
                        <ul>
                            <li>
                                <label>School name: {info.schoolName}</label>
                            </li>
                            <li>
                                <label>Title of study: {info.titleOfStudy}</label>
                            </li>
                            <li>
                                <label>Date of study: {info.dateOfStudy}</label>
                            </li>
                        </ul>
                    </li>
                ))}
                {eduInfo.length > 0 && ( //not working
                    <button onClick={() => setIsEditing(true)}>
                    Edit</button>
                )}
                    
            </>
            )}
                    
            </ul>
        </>
    );
}