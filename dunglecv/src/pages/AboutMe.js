import React from "react";
import SnapShot from '../images/SnapShot.JPG';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import * as BsIcons from 'react-icons/bs'
import {IconContext} from 'react-icons';


export default function AboutMe(){
	const data = [
		{icons:<FaIcons.FaLinkedin/>,url:"https://www.linkedin.com/in/lehoangdung2911/"},
		{icons:<FaIcons.FaGithub/>, url:"https://github.com/DungLe2911"},
	];
	return(
		<div className="aboutMeContainer">
			<div className="snapshotContainer">
					<img src={SnapShot} alt="snapshot" width="504"/>
					<div className="snapshotInfo">
						<div className="nameText"> Dũng Hoàng Lê </div>
						<div className="title"> Developer </div>
						<IconContext.Provider value={{ style: {fontSize: '30px'}}}>
							<div className="socialContainer">
								{data.map((ele,idx)=>{
									return(
										<a className="socialPlatform" href={ele.url} key={idx} target='_blank' >
											{ele.icons}
										</a>
									);
								})}
							</div>
						</IconContext.Provider>
					</div>
			</div>
		</div>
	);
};