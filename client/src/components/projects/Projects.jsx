// import styles from './Project.module.css';
import CardProject from '../cardProject/CardProject';

const projects = [
	{ id: 1, name: 'Project 1', image: 'url', description: 'asdasdasd' },
	{ id: 2, name: 'Project 2', image: 'url', description: 'asdasdasd' },
	{ id: 3, name: 'Project 3', image: 'url', description: 'asdasdfsdf' },
];

const Projects = () => {
	return (
		<section id='projects'>
			<div>
				{projects.map(project => (
					<CardProject
						key={project.id}
						name={project.name}
						image={project.image}
						description={project.description}
					/>
				))}
			</div>
		</section>
	);
};

export default Projects;
