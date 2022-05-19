import React,{ useContext} from 'react';
import { Link } from "react-router-dom";
import SubmenuContainer from './Submenu';

const Submenu = ({children}) => {
    return (
        <SubmenuContainer>
            {children}
            <nav>
                <Link to="/">Home</Link>
                <Link to="/contacto">Contacto</Link>
            </nav>
        </SubmenuContainer>
    );
};



export default Submenu;