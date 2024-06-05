import { Link } from "react-router-dom"

const Nav = () => {

    // const scrollToSection = (sectionId) => {
    //     const element = document.getElementById(sectionId);
    //     if (element) {
    //         element.scrollIntoView({ behavior: "smooth" })
    //     }
    // }
    return (
        <nav>
            <ul>
                <Link to="/">
                    <li>Home</li>
                </Link>

                <Link to="/about">
                    <li>About</li>
                </Link>

                <Link to="/projects">
                    <li>Projects</li>
                </Link>

                <Link to="/skills">
                    <li>Skills</li>
                </Link>
            </ul>
        </nav>
    )
}

export default Nav