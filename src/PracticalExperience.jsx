import { useState } from "react";

export default function PracticalExperiences({
    practicalExperience,
    onPracticalExperienceAdd,
    onPEValuesChange,
    onAddResponsibilityButtonClick,
    onUpdateResponsibility
}){

    const [companyName, setCompanyName] = useState('');
    const [position, setPosition] = useState('');

    return (
        <>
            <h1>Practical Experience</h1>
            <div className="main-wrapper-pe">
                <div className="cont-wrapper">
                    <label>Company name: </label>
                    <input
                        value = {companyName}
                        onChange = {e => setCompanyName(e.target.value)}
                    />
                    
                </div>
                <div className="cont-wrapper">
                    <label>Position:</label>
                    <input 
                        value = {position}
                        onChange = {e => setPosition(e.target.value)}
                    />
                    
                </div>
                <div className="cont-wrapper">
                    <button 
                    onClick = {e => {
                        onPracticalExperienceAdd(companyName, position);
                        setCompanyName("");
                        setPosition("");
                        console.log(practicalExperience);
                    }}
                    >
                        Add
                    </button>
                </div>
            </div>          

            <PracticalExperienceList 
                practicalExperience = {practicalExperience}
                onPEValuesChange = {onPEValuesChange}
                onAddResponsibilityButtonClick = {onAddResponsibilityButtonClick}
                onUpdateResponsibility = {onUpdateResponsibility}
            />
        </>
    );

}

function PracticalExperienceList({
    practicalExperience,
    onPEValuesChange,
    onAddResponsibilityButtonClick,
    onUpdateResponsibility
}){
    const [isEditing, setIsEditing] = useState(false);

    return(
        <>
            <ul>
                {isEditing ? (
                    <>
                        {practicalExperience.length > 0 && (
                            <button onClick = {() => setIsEditing(false)} >
                                Submit
                            </button>
                        )}
                        {practicalExperience.map((info) => (
                            <li key={info.id} className="list">
                                <ul>
                                    <li className="detail">
                                        <label>Company name:</label>
                                            <input 
                                                value = {info.companyName}
                                                onChange = {(e) => onPEValuesChange(info.id, "companyName", e)}
                                            />
                                        
                                    </li>
                                    <li className="detail">
                                        <label>Position:</label>
                                            <input
                                                value = {info.position}
                                                onChange = {(e) => onPEValuesChange(info.id, "position", e)}
                                            />
                                        
                                    </li>
                                </ul>
                            </li>
                        ))}
                    </>
                ):(
                    <>
                        {practicalExperience.length > 0 && (
                            <button onClick = {() => setIsEditing(true)} >
                                Edit
                            </button>
                        )}
                        {practicalExperience.map((info) => (
                            <li key = {info.id} className="list">
                                <ul>
                                    <li className="detail"><label>Company name: {info.companyName}</label></li>
                                    <li className="detail"><label>Position: {info.position}</label></li>
                                    <li className="detail">
                                        <AddResponsibilities 
                                            parentId = {info.id}
                                            onAddResponsibilityButtonClick = {onAddResponsibilityButtonClick}
                                            practicalExperience = {practicalExperience}
                                            onUpdateResponsibility = {onUpdateResponsibility}
                                        />
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

function AddResponsibilities({
    parentId,
    onAddResponsibilityButtonClick,
    practicalExperience,
    onUpdateResponsibility
}){

    const [responsibility, setResponsibility] = useState('');
    const [respId, setRespId] = useState(0);

    return (
        <>
            <div className="responsibility-add-wrapper">
                <label>Main Responsibilities:</label>
                    <input
                        className="input-main-responsibilities"
                        value={responsibility}
                        onChange = {e => setResponsibility(e.target.value)}
                    />
                
                <button onClick = {(e) => 
                {
                    setRespId((rspid) => rspid + 1);
                    onAddResponsibilityButtonClick(parentId, respId, responsibility); 
                    setResponsibility("");
                }
                }>
                    Add
                </button>
            </div>           

            {/* responsibility list */}
            <ListResponsibilities 
                parentId = {parentId}
                practicalExperience = {practicalExperience}
                onUpdateResponsibility = {onUpdateResponsibility}
            />
        </>
    );
}


function ListResponsibilities({
    parentId,
    practicalExperience,
    onUpdateResponsibility
}){

    const [isEditing, setIsEditing] = useState(false);

    const row = practicalExperience.find(a => a.id === parentId);
    const responsabilities = row.responsibility;

    return(
        <>
            <ul>
                {isEditing ? (
                    <div>
                        {responsabilities.length > 0 && (
                            <button onClick = {() => setIsEditing(false)}>
                                Save
                            </button>
                        )}
                        <div className="inner-list">
                            {responsabilities.map((info) => (
                                <li key={info.id} className="detail">
                                    <input 
                                        className="input-main-responsibilities"
                                        value = {info.resp}
                                        onChange = {(e) => onUpdateResponsibility(parentId, info.id, e)}
                                    />                               
                                </li>
                            ))}
                        </div>                        
                    </div>
                ):(
                    <div>
                        {responsabilities.length > 0 && (
                            <button onClick = {() => setIsEditing(true)} >
                                Edit
                            </button>
                        )}
                        <div className="inner-list">
                            {responsabilities.map((info) => (
                                <li key={info.id} className="detail">
                                    <label>{info.resp}</label>
                                </li>
                            ))}
                        </div>                        
                    </div>
                )}
            </ul>
        </>
    );

}