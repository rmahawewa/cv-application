import { useState } from "react";

export default function ViewCV({
    candidateInfo,
    eduInfo,
    practicalExperience
}){

    return(
        <>
            <div><h5>Curriculumn Vitae</h5></div>
            <div className="section-wrapper">
                <div className="general-info">
                    <h3>{candidateInfo.candidateName}</h3>
                    <label>{candidateInfo.email}</label>
                    <label>{candidateInfo.phoneNumber}</label>
                </div>                
            </div>
            <div className="section-wrapper">
                <h3>Educational Experience</h3>
                {eduInfo.map((info) => (
                    <div key={info.id} className="edu-info">
                        <label>{info.schoolName}</label>
                        <label>{info.titleOfStudy}</label>
                        <label>{info.dateOfStudy}</label>
                    </div>
                ))}
            </div>
            <div className="section-wrapper">
                <h3>Practical Experience</h3>
                {practicalExperience.map((info) => (
                    <div key={info.id} className="prac-info">
                        <label>{info.companyName}</label>
                        <label>{info.position}</label>
                        <div className="responsibilities">
                            {info.responsibility.map((data) => (
                                <div key={data.id}>
                                    <label className="resp">{data.resp}</label>
                                </div>
                            ))}
                        </div>                        
                    </div>
                ))}
            </div>
        </>
    );

}