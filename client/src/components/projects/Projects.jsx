import styles from './Projects.module.css';
import CardProject from '../cardProject/CardProject';

const projects = [
	{
		id: 1,
		name: 'Name app1',
		image: 'url',
		description: 'Fullstack application',
	},
	{
		id: 2,
		name: 'Name app2',
		image: 'url',
		description: 'Frontend application',
	},
	{
		id: 3,
		name: 'Name app3',
		image: 'url',
		description: 'Backend application',
	},
];

const Projects = () => {
	return (
		<section id='projects' className={styles.projectsSection}>
			<h2>Projects</h2>
			{projects.map(project => (
				<CardProject
					key={project.id}
					name={project.name}
					image={project.image}
					description={project.description}
				/>
			))}
		</section>
	);
};

export default Projects;
