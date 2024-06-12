import HomeCard from '../homeCards/HomeCards';
import styles from '../../styles/Section.module.css';

const Home = () => {
	return (
		<section id='home' className={styles.section}>
			<h1>Welcome to my portfolio, my friend.</h1>
			<p>
				My name is <span>Lucio Morales</span>, I am a 25 years Argentine
				developer. <br />
				Tell me, what can I do for you?{' '}
			</p>
			<HomeCard />
		</section>
	);
};

export default Home;
