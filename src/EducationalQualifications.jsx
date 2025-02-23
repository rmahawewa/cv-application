import { useState } from "react";

let nextId = 0;

export default function EducationalQualifications() {
    const [schoolName, setSchoolName] = useState('');
    const [titleOfStudy, setTitleOfStudy] = useState('');
    const [dateOfStudy, setDateOfStudy] = useState('');
    const [eduInfo, setEduInfo] = useState([]);
    const [isEditing, setIsEditing] = useState([]);

    function handleEduQualAddButtonClick(){
        setEduInfo([
            ...eduInfo,
            { id: nextId++, schoolName: schoolName, titleOfStudy: titleOfStudy, dateOfStudy: dateOfStudy }
        ]);

        setIsEditing([
            ...isEditing,
            { id: nextId++, schoolNameEditing: false, titleOfStudyEditing: false, dateOfStudyEditing: false }
        ]);
    }

    function handleIsSchoolNameEditingButtonClick(editId, status){
        const editingList = [...isEditing];
        const entity = editingList.find(
            a => a.id === editId
        );
        entity.schoolNameEditing = status;
        setIsEditing(editingList);
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

            <ul>
                {eduInfo.map((info, index) => (
                    <li key={info.id}>
                        <ul> 
                            {isEditing[index].schoolNameEditing ? (
                                <li><label>School name: 
                                    <input 
                                        value={info.schoolName}

                                    />
                                </label>
                                    <button onClick={handleIsSchoolNameEditingButtonClick(index, false)}>
                                        Submit
                                    </button>
                                </li>
                            ):(
                                <li><label>School name: 
                                {info.schoolName}
                                </label>
                                <button onClick={handleIsSchoolNameEditingButtonClick(index, true)}>Edit</button>
                                </li>
                            )}                           
                            <li>School name: <label>{info.schoolName}</label></li>
                            <li>Title of study: <label>{info.titleOfStudy}</label></li>
                            <li>Date of study: <label>{info.dateOfStudy}</label></li>
                        </ul>
                    </li>
                ))}
            </ul>

        </>
    );
}