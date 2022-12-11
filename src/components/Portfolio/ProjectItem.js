import React from 'react';
import { useNavigate } from 'react-router-dom'

function ProjectItem({image, name, id}) {
	const navigate = useNavigate();
	return (
		// this div represents each project in the container inside of the page (Projects)
		<div className="projectItem" onClick={() => {
			navigate("/portfolio/" + id);
		}}
		>
			<div style={{ backgroundImage: `url(${image})`}} className="bgImage" />
			<h2> {name} </h2>
		</div>
	);
}

export default ProjectItem;