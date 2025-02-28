import { useState } from "react";

export default function PracticalExperiences({
    practicalExperience,
    onPracticalExperienceAdd,
    onPEValuesChange,
    onAddResponsibilityButtonClick,
    onUpdateResponsibility
}){

    const [companyName, setCompanyName] = useState('Clear Information Technologies');
    const [position, setPosition] = useState('Associate Software Engineer');

    function isValidString(name){
        const pattern = /^[A-Z][a-zA-Z '.,-]*[A-Za-z][^-]$/;
        return pattern.test(name);
    }

    function validateInputs(company, position){
        if(isValidString(company) && isValidString(position)){
            return true;
        }else{
            return false;
        }
    }

    return (
        <>
            <h2>Practical Experience</h2>
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
                        if(validateInputs(companyName, position)){
                            onPracticalExperienceAdd(companyName, position);
                            setCompanyName("");
                            setPosition("");
                            console.log(practicalExperience);
                        }else{
                            console.log("user has input valid data");
                        }                        
                    }}
                    >
                        Submit
                    </button>
                </div>
                {!validateInputs(companyName, position) && (
                        <div>
                            <label className="error-msg">Please enter valid inputs</label>
                        </div>
                )}
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
                                Submit updates
                            </button>
                        )}
                        {practicalExperience.map((info) => (
                            <li key={info.id} className="list">
                                <ul>
                                    <li className="detail">
                                        <label className="lbl">Company name:</label>
                                            <input 
                                                className="input-edit-details"
                                                value = {info.companyName}
                                                onChange = {(e) => onPEValuesChange(info.id, "companyName", e)}
                                            />
                                        
                                    </li>
                                    <li className="detail">
                                        <label className="lbl">Position:</label>
                                            <input
                                                className="input-edit-details"
                                                value = {info.position}
                                                onChange = {(e) => onPEValuesChange(info.id, "position", e)}
                                            />
                                        
                                    </li>
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
                ):(
                    <>
                        {practicalExperience.length > 0 && (
                            <button onClick = {() => setIsEditing(true)} >
                                Edit information
                            </button>
                        )}
                        {practicalExperience.map((info) => (
                            <li key = {info.id} className="list">
                                <ul>
                                    <li className="detail"><label className="lbl">Company name:</label><label> {info.companyName}</label></li>
                                    <li className="detail"><label className="lbl">Position:</label><label> {info.position}</label></li>
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

    const [responsibility, setResponsibility] = useState('Write front end code with react js');
    const [respId, setRespId] = useState(0);

    function isValidString(name){
        const pattern = /^[A-Z][a-zA-Z '.,-]*[A-Za-z][^-]$/;
        return pattern.test(name);
    }

    return (
        <>
            <div className="responsibility-add-wrapper">
                <label>Main Responsibilities:</label>
                    <input
                        className="input-edit-details"
                        value={responsibility}
                        onChange = {e => setResponsibility(e.target.value)}
                    />
                
                <button onClick = {(e) => 
                {
                    if(isValidString(responsibility)){
                        setRespId((rspid) => rspid + 1);
                        onAddResponsibilityButtonClick(parentId, respId, responsibility); 
                        setResponsibility("");
                    }else{
                        console.log("user has input valid data");
                    }                       
                }
                }>
                    Add main responsibility
                </button>
            </div>  
            {!isValidString(responsibility) && (
                <div>
                    <label className="error-msg">Please enter valid inputs</label>
                </div>
            )}


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
                                Save responsibilities
                            </button>
                        )}
                        <h4>Main Responsibilities</h4>
                        <div className="inner-list">
                            {responsabilities.map((info) => (
                                <li key={info.id} className="detail">
                                    <input 
                                        className="input-edit-details"
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
                                Edit responsibilities
                            </button>
                        )}
                        <h4>Main Responsibilities</h4>
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