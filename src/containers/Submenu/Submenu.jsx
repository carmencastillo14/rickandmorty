import React,{ useContext} from 'react';
import { Link } from "react-router-dom";
import SubmenuContainer from './Submenu-style';

const Submenu = () => {
    return (
        <SubmenuContainer>
            
            <nav>
                <Link to="/">Personajes</Link>
                <Link to="/contacto">Contacto</Link>
            </nav>
        </SubmenuContainer>
    );
};



export default Submenu;