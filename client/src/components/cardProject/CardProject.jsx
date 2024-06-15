import styles from './CardProject.module.css';
import image from './zeldris.jpg';

const CardProject = ({ name, description }) => {
	return (
		<div className={styles.cardProject}>
			<img src={image} alt={`${name} image`} />
			<h4>{name}</h4>
			<p>{description}</p>
		</div>
	);
};

export default CardProject;
