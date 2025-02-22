import { useState } from "react";

export default function PositionList({
    positions, onChangePosition
}){
    return (
        <ul>
            {positions.map(position => (
                <li key={position.id}>
                    <Position 
                        position={position}
                        onChange={onChangePosition}
                    />
                </li>
            ))}
        </ul>
    );
}


function Position({position, onChange}){
    const [isEditing, setIsEditing] = useState(false);
    let positionContent;
    if(isEditing) {
        positionContent = (
            <>
                <input 
                    value={position.position_text}
                    onChange={e => {
                        onChange({
                            ...position,
                            position_text: e.target.value
                        });
                    }} />
                    <button onClick={() => setIsEditing(false)}>
                        Save
                    </button>
            </>
        );
    }else {
        positionContent = (
            <>
                {position.position_text}
                <button onClick={() => setIsEditing(true)}>
                    Edit
                </button>
            </>
        );
    }

    return(
        {positionContent}
    );
}