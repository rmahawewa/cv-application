import { useReducer } from "react";
import AddExperience from "./AddExperience";
import PositionList from "./PositionList";


export default function ExperienceSection(){
    const [positions, dispatch] = useReducer(positionsReducer, initialPositions);

    function handleAddPosition(text){
        dispatch({
            type: 'added',
            id: nextId++,
            position_text: text,
        });
    }

    function handleChangePosition(position){
        dispatch({
            type: 'changed',
            position: position
        });
    }

    return (
        <>
            <h1>Working Experience</h1>
            <AddExperience 
                onAddPosition = {handleAddPosition}
            />
            <PositionList 
                positions = {positions}
                onChangePosition = {handleChangePosition}
            />
        </>
    );

    
}

function positionsReducer(positions, action) {
    switch (action.type) {
        case 'added':{
            return [...positions, {
                id: action.id,
                position_text: action.position_text,
            }];
        }
        case 'changed': {
            return positions.map(p => {
                if(p.id === action.position.id) {
                    return action.position;
                }else{
                    return p;
                }
            });
        }
        default: {
            throw Error('Unknown action: ' + action.type);
        }
    }
}

let nextId = 2;
const initialPositions = [
    {id:0, position_text: 'Software Developer'},
    {id:1, position_text: 'Web Application Developer'}
];