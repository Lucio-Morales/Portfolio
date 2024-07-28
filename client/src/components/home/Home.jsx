import styles from './Home.module.css';
import { Link } from 'react-router-dom';

const Home = () => {
	return (
		<section id='home' className={styles.homeSection}>
			<h1>Welcome my friend!</h1>
			<p className={styles.introText}>
				I`m <span>Lucio</span>, a 25 years Argentine developer.
				<br />
				Tell me, what can I do for you?
			</p>
			<div className={styles.options}>
				<Link to='/projects' style={{ textDecoration: 'none' }}>
					<div className={styles.option}>
						<span>1.</span> I want to see your projects!
					</div>
				</Link>
				<Link to='/about' style={{ textDecoration: 'none' }}>
					<div className={styles.option}>
						<span>2.</span> I want to get to know you!
					</div>
				</Link>
				<Link to='/contact' style={{ textDecoration: 'none' }}>
					<div className={styles.option}>
						<span>3.</span> I want to schedule a meeting!
					</div>
				</Link>
			</div>
		</section>
	);
};

export default Home;
