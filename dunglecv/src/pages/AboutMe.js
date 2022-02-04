import React from "react";
import SnapShot from '../images/SnapShot.JPG';


export default function AboutMe(){
    return(
        <div className="aboutMeContainer">
            <img src={SnapShot} alt="snapshot" width="500"/>
        </div>
    );
};