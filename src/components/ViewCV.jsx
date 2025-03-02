import { useState } from "react";
import '../styles/cvView.css';

export default function ViewCV({
    candidateInfo,
    eduInfo,
    practicalExperience,
    jobRole,
    summery
}){

    return(
        <>
            <div className="cv-intro"><label>Curriculumn Vitae</label></div>
            <div className="section-wrapper-top">
                <div className="general-info">
                    <h3 className="cadi-name">{candidateInfo.candidateName}</h3>
                    <div className="set">
                        <label>{candidateInfo.email}</label>
                        <label>{candidateInfo.phoneNumber}</label>
                    </div>                    
                </div>                
            </div>
            <hr></hr>
            <h4 className="job-role">{jobRole}</h4>
            <div className="section-wrapper">
                <h3>Summery</h3>
                <label className="summery">{summery}</label>
            </div>
            <div className="section-wrapper">
                <h3>Educational Experience</h3>
                {eduInfo.map((info) => (
                    <div key={info.id} className="edu-info">
                        <div className="set">
                            <label>{info.schoolName}</label>
                            <label>{info.dateOfStudy}</label>
                        </div>                        
                        <label>{info.titleOfStudy}</label>                        
                    </div>
                ))}
            </div>
            <div className="section-wrapper">
                <h3>Practical Experience</h3>
                {practicalExperience.map((info) => (
                    <div key={info.id} className="prac-info">
                        <div className="set">
                            <label>{info.companyName}</label>
                            <label>{info.position}</label>
                        </div>
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