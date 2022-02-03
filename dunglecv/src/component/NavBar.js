import React, { useEffect, useState } from 'react';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import * as BsIcons from 'react-icons/bs'
import {IconContext} from 'react-icons';
import { Link } from 'react-router-dom';


export default function NavBar(){
	const [fullMenu, toggleFullMenu] = useState(false);
	const data = [
		{icon: <BsIcons.BsPerson/>, label: "Lable 1"},
		{icon: <AiIcons.AiOutlinePhone/>, label: "Contact"},
		{icon: <BsIcons.BsBriefcase/>, label: "Label 3"},
		{icon: <AiIcons.AiOutlineProject/>, label: "Projects"},
	]	
	const toggleNavBar = () =>{
		toggleFullMenu(!fullMenu)
		console.log(fullMenu)
	}
	// //componentDidMount()
	// useEffect(()=>{
		
	// },[]);
	return(
		<div className={fullMenu? "navBar navBarActive": "navBar"}>
			<IconContext.Provider value={{ style: {fontSize: '30px'}}}>
				<Link className='menuBtn' onClick={toggleNavBar}>
					<div className='menuBtnContainer'>
						{fullMenu ? <FaIcons.FaTimes/>:<FaIcons.FaBars/>}
					</div>
				</Link>
				<div className='navBarMain'>
					<div className="navBarItemContainer">
						{data.map((ele,idx)=>{
							return(							
								<Link className='navBarItem' key={idx}>
									<div style={{marginLeft:'10px', display:'flex', flexDirection:'row', alignItems:'center'}}>
										{ele.icon}
										&nbsp;
										&nbsp;
										{fullMenu? <div>{ele.label}</div>:null}
									</div>
								</Link>
							)
						})}
					</div>
				</div>
				<div className='downloadBtn'>
					<a href='/documents/DungLeCV.pdf' download>
						<div className='downloadBtnContainer'>
							<AiIcons.AiOutlineCloudDownload/>
							&nbsp;
							{fullMenu?<div>Dung (Richard) Le's CV</div>:null}
						</div>
					</a>
				</div>
			</IconContext.Provider>
		</div>
	);
};