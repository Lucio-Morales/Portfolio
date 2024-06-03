

const Nav = () => {

    const scrollToSection = (sectionId) => {
        const element = document.getElementById(sectionId);
        if (element) {
            element.scrollIntoView({ behavior: "smooth" })
        }
    }
    return (
        <nav>
            <ul>
                <li><a href="#hero" onClick={(event) => { event.preventDefault(), scrollToSection('hero'); }}>Home</a></li>
                <li><a href="#about" onClick={(event) => { event.preventDefault(), scrollToSection('about'); }}>About</a></li>
                <li><a href="#projects" onClick={(event) => { event.preventDefault(), scrollToSection('projects'); }}>Projects</a></li>
                <li><a href="#skills" onClick={(event) => { event.preventDefault(), scrollToSection('skills'); }}>Skills</a></li>
            </ul>
        </nav>
    )
}

export default Nav