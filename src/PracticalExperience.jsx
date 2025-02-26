import { useState } from "react";

let pe_nextId = 0;
// let resp_nextId = 0;
export default function PracticalExperiences(){

    const [companyName, setCompanyName] = useState('');
    const [position, setPosition] = useState('');
    // const [responsibility, setResponsibility] = useState('');

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

    return (
        <>
            <h1>Practical Experience</h1>
            <label>Company name: 
                <input
                    value = {companyName}
                    onChange = {e => setCompanyName(e.target.value)}
                />
            </label>
            <label>Position:
                <input 
                    value = {position}
                    onChange = {e => setPosition(e.target.value)}
                />
            </label>
            <button 
                onClick = {e => {
                    practicalExperienceAddButtonClick(companyName, position);
                    setCompanyName("");
                    setPosition("");
                    console.log(practicalExperience);
                }}
            >
                Add
            </button>

            <PracticalExperienceList 
                practicalExperience = {practicalExperience}
                onValuesChange = {handlePracticalExperienceOnchange}
                onAddResponsibilityButtonClick = {responsibilityAddButtonClick}
            />
        </>
    );

}

function PracticalExperienceList({
    practicalExperience,
    onValuesChange,
    onAddResponsibilityButtonClick
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
                            <li key={info.id}>
                                <ul>
                                    <li>
                                        <label>Company name:
                                            <input 
                                                value = {info.companyName}
                                                onChange = {(e) => onValuesChange(info.id, "companyName", e)}
                                            />
                                        </label>
                                    </li>
                                    <li>
                                        <label>Position:
                                            <input
                                                value = {info.position}
                                                onChange = {(e) => onValuesChange(info.id, "position", e)}
                                            />
                                        </label>
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
                            <li key = {info.id}>
                                <ul>
                                    <li><label>Company name: {info.companyName}</label></li>
                                    <li><label>Position: {info.position}</label></li>
                                    <li>
                                        <AddResponsibilities 
                                            parentId = {info.id}
                                            onAddResponsibilityButtonClick = {onAddResponsibilityButtonClick}
                                            practicalExperience = {practicalExperience}
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
    practicalExperience
}){

    const [responsibility, setResponsibility] = useState('');
    const [respId, setRespId] = useState(0);

    return (
        <>
            <label>Main Responsibilities:
                <input
                    value={responsibility}
                    onChange = {e => setResponsibility(e.target.value)}
                />
            </label>
            <button onClick = {(e) => 
            {
                setRespId((rspid) => rspid + 1);
                onAddResponsibilityButtonClick(parentId, respId, responsibility); 
            }
            }>
                Add
            </button>

            {/* responsibility list */}
            <ListResponsibilities 
                parentId = {parentId}
                practicalExperience = {practicalExperience}
            />
        </>
    );
}


function ListResponsibilities({
    parentId,
    practicalExperience
}){

    const [isEditing, setIsEditing] = useState(false);

    const row = practicalExperience.find(a => a.id === parentId);
    const responsabilities = row.responsibility;

    return(
        <>
            <ul>
                {isEditing ? (
                    <>
                        {responsabilities.length > 0 && (
                            <button onClick = {() => setIsEditing(false)}>
                                Save
                            </button>
                        )}
                        {responsabilities.map((info) => (
                            <li key={info.id}>
                                <input 
                                    value = {info.resp}
                                    // onChange = {}
                                />                               
                            </li>
                        ))}
                    </>
                ):(
                    <>
                        {responsabilities.length > 0 && (
                            <button onClick = {() => setIsEditing(true)} >
                                Edit
                            </button>
                        )}
                        {responsabilities.map((info) => (
                            <li key={info.id}>
                                 <label>{info.resp}</label>
                            </li>
                        ))}
                    </>
                )}
            </ul>
        </>
    );

}