import { useState } from "react";



export default function EducationalQualifications({
    eduInfo,
    onAddQualificationButtonClick,
    onInformationChange
}) {
    const [schoolName, setSchoolName] = useState('');
    const [titleOfStudy, setTitleOfStudy] = useState('');
    const [dateOfStudy, setDateOfStudy] = useState('');

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
            <button onClick = {e => {
                onAddQualificationButtonClick(schoolName, titleOfStudy, dateOfStudy);
                setSchoolName("");
                setTitleOfStudy("");
                setDateOfStudy("");
            }}>
            {/* <button onClick = {e => console.log(123)}> */}
                Add
            </button>

            <EduInfoList 
                eduInfo = {eduInfo}
                onInformationChange = {onInformationChange}
            />

        </>
    );
}

function EduInfoList(
    {eduInfo,
    onInformationChange
}){
    const [isEditing, setIsEditing] = useState(false);

    return(
        <>
            <ul>
            {isEditing ? (
            <>     
                {eduInfo.length > 0 && ( 
                    <button onClick={() => setIsEditing(false)}>
                    Submit</button>
                )} 

                {eduInfo.map((info, index) => (
                    
                <li key={info.id}>
                    <ul>
                    <li>
                        <label>School name: 
                            <input 
                                value = {info.schoolName}
                                // onChange = {(e) => handleEducationalQualificationOnchange(info.id, "schoolName", e)}
                                onChange = {(e) => onInformationChange(info.id, "schoolName", e)}
                            />
                        </label>
                    </li>
                    <li>
                        <label>Title of study:
                            <input 
                                value = {info.titleOfStudy}
                                // onChange = {(e) => handleEducationalQualificationOnchange(info.id, "titleOfStudy", e)}
                                onChange = {(e) => onInformationChange(info.id, "titleOfStudy", e)}
                            />
                        </label>
                    </li>
                    <li>
                        <label>Date of study:
                            <input 
                                value = {info.dateOfStudy}
                                // onChange = {(e) => handleEducationalQualificationOnchange(info.id, "dateOfStudy", e)}
                                onChange = {(e) => onInformationChange(info.id, "dateOfStudy", e)}
                            />
                        </label>
                    </li>
                    </ul>
                </li>
                ))}                 
                               
            </>
            ):(
                //Non editing content              
            <>

                {eduInfo.length > 0 && ( //not working
                    <button onClick={() => setIsEditing(true)}>
                    Edit</button>
                )}

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
                                    
            </>
            )}
                    
            </ul>
        </>
    );
}