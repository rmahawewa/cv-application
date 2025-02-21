import { useReducer } from "react";


export default function ExperienceSection(){
    const [positions, dispatch] = useReducer(positionsReducer, initialPositions);

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
}

let nextId = 0;
const initialPositions = [];