import { Link } from "react-router-dom"

const Nav = () => {

    return (
        <nav>
            <ul>

                <Link to="/">
                    <li>Home</li>
                </Link>

                <Link to="/about">
                    <li>About me</li>
                </Link>

                <Link to="/projects">
                    <li>Projects</li>
                </Link>

                <Link to="/contact">
                    <li>Contact</li>
                </Link>

            </ul>
        </nav>
    )
}

export default Nav