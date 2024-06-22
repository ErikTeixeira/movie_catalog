import React from "react";
import "./Footer.css";

import { BiCameraMovie } from "react-icons/bi";

const Footer = () => {
    return (
        <div className="footer-container">
            
            <div className="infos">

                <p>Desenvolvido por Erik Teixeira Barbosa para estudo</p>

                <p className="site-name">
                    <BiCameraMovie /> Movie Log
                </p>

            </div>
            <p className="copyright-text">© 2024 Erik Teixeira Barbosa. Todos os direitos reservados.</p>
        </div>
    );
};

export default Footer;
