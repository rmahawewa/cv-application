import { useState } from "react";

export default function AddExperience({ onAddPosition }){
    const text = "Position comes here";

    return (
        <>
            <button onClick = {() => {
                onAddPosition(text);
            }}>Add Position</button>
        </>
    )
}