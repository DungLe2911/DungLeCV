import React, { useState } from 'react';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import {IconContext} from 'react-icons';
import { Link } from 'react-router-dom';

import CV from '../documents/DungLeCV.pdf';


export default function NavBar(){
	const [fullMenu, toggleFullMenu] = useState(false);
	const toggleNavBar = () =>{
		toggleFullMenu(!fullMenu)
		console.log(fullMenu)
	}
	return(
		<div className={fullMenu? "navBar navBarActive": "navBar"}>
			<IconContext.Provider value={{ style: {fontSize: '30px'}}}>
				<Link className='menuBtn' onClick={toggleNavBar}>
					<div className='menuBtnContainer'>
						{fullMenu ? <FaIcons.FaTimes/>:<FaIcons.FaBars/>}
					</div>
				</Link>
				{/* <div className='navBarItem'></div> */}
				<div className='downloadBtn'>
					<a href='/documents/DungLeCV.pdf' download>
						<div className='downloadBtnContainer'>
							<AiIcons.AiOutlineCloudDownload/>
						</div>
					</a>
				</div>
			</IconContext.Provider>
		</div>
	);
};