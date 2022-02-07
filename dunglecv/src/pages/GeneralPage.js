import React, { useEffect, useState } from 'react';
import AboutMe from './AboutMe';
import Experience from './Experience';

export default function GeneralPage(props){
	return (
		<div id='contentArea' className="contentArea">
			<AboutMe/>
			<Experience/>
			<Experience/>
			<Experience/>
			<Experience/>
		</div>
	);
};