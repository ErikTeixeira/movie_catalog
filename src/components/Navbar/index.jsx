import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import { BiCameraMovie, BiSearchAlt2 } from "react-icons/bi";
import { VscAccount } from "react-icons/vsc";

import "./NavBar.css";

const Navbar = () => {

    const [search, setSearch] = useState("")
    // para ter funções de redirecionamento no componente
    const navigate = useNavigate();

    const handleSubmit = (evento) => {
        // para não submeter o form no padrão http
        evento.preventDefault();

        // se não tiver nada no search da um return, não vai para página do seach vazia
        if(!search) return;
        
        navigate(`/search?q=${search}`);

        setSearch("");
    }

    return (
        <nav id="navbar">
            <h2>
                <Link to="/">
                    <BiCameraMovie /> Movie Log
                </Link>
            </h2>

            <div id="navbar2" >
                <h2 id="link-catalogo" >
                    <Link to="/">
                        Catálogo
                    </Link>
                </h2>

                {/* vai disparar um evento de submit */}
                <form onSubmit={handleSubmit} >
                    <input
                        type="text"
                        placeholder="Busque um filme"
                        // toda vez que alguem digita no input está mudando o estado do search
                        onChange={ (elemento) => setSearch(elemento.target.value) }
                        // consegue manipular o valor do campo apartir do state
                        value={search}
                    />
                    
                    {/* Não colocou um input submit porque não é possivel colocar html nele */}
                    <button type="submit">
                        <BiSearchAlt2 />
                    </button>
                </form>

                <h2 id="icon-profile">
                    <Link to="/">
                        <VscAccount />
                    </Link>
                </h2>
            </div>

        </nav>
    );
};

export default Navbar;