import { useState } from "react";



export default function EducationalQualifications({
    eduInfo,
    onAddQualificationButtonClick,
    onInformationChange
}) {
    const [schoolName, setSchoolName] = useState('St. Jones College, Chicago');
    const [titleOfStudy, setTitleOfStudy] = useState('Applied Science');
    const [dateOfStudy, setDateOfStudy] = useState('2022-08-10');

    function isValidString(name){
        const pattern = /^[A-Z][a-zA-Z '.,-]*[A-Za-z][^-]$/;
        return pattern.test(name);
    }

    function isValidDate(date){
        const pattern = /^\d{4}-\d{2}-\d{2}$/;
        return pattern.test(date);
    }

    function validateInputs(school, title, date){
        if(isValidString(school) && isValidString(title) && isValidDate(date)){
            return true;
        }else{
            return false;
        }
    }

    return (
        <>
            <h2>Educational Experience</h2>
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
                            if (validateInputs(schoolName, titleOfStudy, dateOfStudy)) {
                            onAddQualificationButtonClick(schoolName, titleOfStudy, dateOfStudy);
                            setSchoolName("");
                            setTitleOfStudy("");
                            setDateOfStudy("");
                            }else{
                                console.log("user has input valid data");
                            }
                        }}>
                        Submit
                        </button>
                    </div>
                    {!validateInputs(schoolName,titleOfStudy,dateOfStudy) && (
                        <div>
                            <label className="error-msg">Please enter valid inputs</label>
                        </div>
                    )}
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
                    Submit updates</button>
                )} 

                {eduInfo.map((info, index) => (
                    
                <li key={info.id} className="list">
                    <ul>
                    <li className="detail">
                        <label className="lbl">School name: </label>
                            <input 
                                className="input-edit-details"
                                value = {info.schoolName}
                                // onChange = {(e) => handleEducationalQualificationOnchange(info.id, "schoolName", e)}
                                onChange = {(e) => onInformationChange(info.id, "schoolName", e)}
                            />
                        
                    </li>
                    <li className="detail">
                        <label className="lbl">Title of study:</label>
                            <input 
                                className="input-edit-details"
                                value = {info.titleOfStudy}
                                // onChange = {(e) => handleEducationalQualificationOnchange(info.id, "titleOfStudy", e)}
                                onChange = {(e) => onInformationChange(info.id, "titleOfStudy", e)}
                            />
                        
                    </li>
                    <li className="detail">
                        <label className="lbl">Date of study:</label>
                            <input 
                                className="input-edit-details"
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
                    Edit information</button>
                )}

                {eduInfo.map((info, index) => (
                    <li key={info.id} className="list">
                        <ul>
                            <li className="detail">
                                <label className="lbl">School name:</label><label> {info.schoolName}</label>
                            </li>
                            <li className="detail">
                                <label className="lbl">Title of study:</label><label> {info.titleOfStudy}</label>
                            </li>
                            <li className="detail">
                                <label className="lbl">Date of study:</label><label> {info.dateOfStudy}</label>
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