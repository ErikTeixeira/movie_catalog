import { Link } from "react-router-dom";
import { BiCameraMovie, BiSearchAlt2 } from "react-icons/bi";

import "./NavBar.css";

const Navbar = () => {
    return (
        <nav id="navbar">
            <h2>
                <Link to="/">
                    <BiCameraMovie /> Movie Log
                </Link>
            </h2>

            <form>
                <input
                    type="text"
                    placeholder="Busque um filme"
                />
                
                {/* Não colocou um input submit porque não é possivel colocar html nele */}
                <button type="submit">
                    <BiSearchAlt2 />
                </button>
            </form>
        </nav>
    );
};

export default Navbar;