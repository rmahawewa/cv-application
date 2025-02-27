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
                <div className="main-wrapper">
                    <div className="cont-wrapper">
                        <label >School name:</label>
                        <input 
                            value = {schoolName}
                            onChange = {e => setSchoolName(e.target.value)}
                        />
                    </div>
                    <div className="cont-wrapper">
                        <label>Title of study:</label>
                        <input 
                            value = {titleOfStudy}
                            onChange = {e => setTitleOfStudy(e.target.value)}
                        />
                    </div>
                    <div className="cont-wrapper">
                        <label>Date of study:</label>
                        <input
                            type = "date"
                            value = {dateOfStudy}
                            onChange = {e => setDateOfStudy(e.target.value)}
                        />
                    </div>
                    <div className="cont-wrapper">
                        <button onClick = {e => {
                            onAddQualificationButtonClick(schoolName, titleOfStudy, dateOfStudy);
                            setSchoolName("");
                            setTitleOfStudy("");
                            setDateOfStudy("");
                        }}>
                        Add
                        </button>
                    </div>
                </div>    

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
                    
                <li key={info.id} className="list">
                    <ul>
                    <li className="detail">
                        <label>School name: </label>
                            <input 
                                className="input-main-responsibilities"
                                value = {info.schoolName}
                                // onChange = {(e) => handleEducationalQualificationOnchange(info.id, "schoolName", e)}
                                onChange = {(e) => onInformationChange(info.id, "schoolName", e)}
                            />
                        
                    </li>
                    <li className="detail">
                        <label>Title of study:</label>
                            <input 
                                className="input-main-responsibilities"
                                value = {info.titleOfStudy}
                                // onChange = {(e) => handleEducationalQualificationOnchange(info.id, "titleOfStudy", e)}
                                onChange = {(e) => onInformationChange(info.id, "titleOfStudy", e)}
                            />
                        
                    </li>
                    <li className="detail">
                        <label>Date of study:</label>
                            <input 
                                className="input-main-responsibilities"
                                value = {info.dateOfStudy}
                                // onChange = {(e) => handleEducationalQualificationOnchange(info.id, "dateOfStudy", e)}
                                onChange = {(e) => onInformationChange(info.id, "dateOfStudy", e)}
                            />
                        
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
                    <li key={info.id} className="list">
                        <ul>
                            <li className="detail">
                                <label>School name:</label><label> {info.schoolName}</label>
                            </li>
                            <li className="detail">
                                <label>Title of study:</label><label> {info.titleOfStudy}</label>
                            </li>
                            <li className="detail">
                                <label>Date of study:</label><label> {info.dateOfStudy}</label>
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