import { useState } from "react";

const [companyName, setCompanyName] = useState('');
const [position, setPosition] = useState('');
const [responsibility, setResponsibility] = useState('');

const [practicalExperience, setPracticalExperience] = useState([]);



function practicalExperienceAddButtonClick(){
    setPracticalExperience([
        ...practicalExperience,
        {id: nextId++, companyName: companyName, position: position, responsibility: responsibility}
    ]);
}