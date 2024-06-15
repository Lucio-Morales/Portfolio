// import styles from './CardProject.module.css';

const CardProject = ({ name, image, description }) => {
	return (
		<div>
			<h4>{name}</h4>
			<img src={image} alt={`${name} image`} />
			<p>{description}</p>
		</div>
	);
};

export default CardProject;
