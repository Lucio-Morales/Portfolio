import { Link } from "react-router-dom"
import Type from "../type/Type"
import { BsPerson } from "react-icons/bs";
import { CgPhone } from "react-icons/cg"
import "./home.css"


const Home = () => {
    return (
        <div>
            <div>
                <div >
                    <h1>Hi, I am Lucio! Welcome to my portfolio</h1>
                    <Type />
                    <Link to="/about">
                        <button>
                            About me
                            <BsPerson />
                        </button>
                    </Link>

                    <Link to="/contact">
                        <button>
                            Contact
                            <CgPhone />
                        </button>
                    </Link>
                </div>

                <div >
                    <img src="./profile-image.png" alt="imagen-de-perfil" />
                </div>
            </div>
        </div>
    )
}

export default Home