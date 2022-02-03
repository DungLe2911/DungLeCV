import React, { useState } from 'react';
import {FaBars} from 'react-icons/fa';
import {IconContext} from 'react-icons';
import { Link } from 'react-router-dom';


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
					<FaBars/>
				</Link>
				<div className='navBarItem'></div>
				<div className='downloadBtn'></div>
			</IconContext.Provider>
		</div>
	);
};