
import { Link } from 'react-router-dom';
import { FaHome, FaUser, FaProjectDiagram, FaEnvelope } from 'react-icons/fa'; // Ejemplo con React Icons
import styles from './Nav.module.css';

const Nav = () => {
    return (

        < nav className={styles.nav} >
            <ul>
                <Link to="/" data-text="Home">
                    <li>
                        <FaHome />
                    </li>
                </Link>

                <Link to="/about" data-text="About">
                    <li>
                        <FaUser />
                    </li>
                </Link>

                <Link to="/projects" data-text="Projects">
                    <li>
                        <FaProjectDiagram />
                    </li>
                </Link>

                <Link to="/contact" data-text="Contact">
                    <li>
                        <FaEnvelope />
                    </li>
                </Link>
            </ul>
        </nav >

    );
}

export default Nav;
