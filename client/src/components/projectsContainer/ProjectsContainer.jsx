import CardProject from '../cardProject/CardProject';
import styles from './ProjectsContainer.module.css';

const projects = [
	{ id: 1, name: 'Project 1', image: 'url', description: 'asdasd asdasd' },
	{ id: 2, name: 'Project 2', image: 'url', description: 'asdasd asdasd' },
	{ id: 3, name: 'Project 3', image: 'url', description: 'asdasd asdasd' },
];

const ProjectsContainer = () => {
	return (
		<div>
			<h3>Projects</h3>
			{projects.map(project => (
				<CardProject
					key={project.id}
					name={project.name}
					image={project.url}
					description={project.description}
				/>
			))}
		</div>
	);
};

export default ProjectsContainer;
