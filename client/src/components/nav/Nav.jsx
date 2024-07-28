import { Link, useLocation } from 'react-router-dom';
import { FaHome } from 'react-icons/fa';
import { RiContactsFill } from 'react-icons/ri';
import { GrProjects } from 'react-icons/gr';
import { MdContactPhone } from 'react-icons/md';

import styles from './Nav.module.css';

const Nav = () => {
	const location = useLocation();
	return (
		<>
			<nav className={styles.nav}>
				<ul className={styles.list}>
					<Link to='/' className={styles.listLink}>
						<FaHome
							className={`${styles.icon} ${
								location.pathname === '/' ? styles.active : ''
							}`}
						/>
					</Link>

					<Link to='/about' className={styles.listLink}>
						<RiContactsFill
							className={`${styles.icon} ${
								location.pathname === '/about' ? styles.active : ''
							}`}
						/>
					</Link>

					<Link to='/projects' className={styles.listLink}>
						<GrProjects
							className={`${styles.icon} ${
								location.pathname === '/projects' ? styles.active : ''
							}`}
						/>
					</Link>

					<Link to='/contact' className={styles.listLink}>
						<MdContactPhone
							className={`${styles.icon} ${
								location.pathname === '/contact' ? styles.active : ''
							}`}
						/>
					</Link>
				</ul>
			</nav>
		</>
	);
};

export default Nav;
