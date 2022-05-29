import React, { useState, useEffect, useRef, useContext  } from 'react';

//Styled-components
import ContactoContenedor from './Contacto-style';

//COMPONENTES Y CONTENEDORES
import Header from '../../containers/header/header';
import Hero from '../../containers/hero/hero';
import Submenu from '../../containers/Submenu/Submenu'
import HeadingH1 from '../../components/Headings/HeadingH1/HeadingH1';
import Paragraph from '../../components/Paragraph/Paragraph';
import Section from '../../containers/Section/Section';
import HeadingH2 from '../../components/Headings/HeadingH2/HeadingH2/HeadingH2';


const Contact = () => {
    const [formValues, setFormValues] = useState({});

    const handleFormValue = (e) => {

    }

    return (
        <ContactoContenedor>
        <Header 
            
            />
            <Submenu />
            
            <Hero>
              <HeadingH1 
                text="Contacta conmigo:)"
                />
            </Hero>
            <Section>
                <form action="" className='form-wrapper'>
                    <input 
                        type="text" 
                        name="nombre" 
                        placeholder='Nombre y apellidos'
                        onBlur={(e) => handleFormValue(e) }
                    />
                    <input 
                        type="email" 
                        name="email" 
                        placeholder='Email'
                        onBlur={(e) => handleFormValue(e) }
                        />
                    <textarea 
                        name="mensaje" 
                        cols="30" rows="10" 
                        placeholder='Mensaje'
                        onBlur={(e) => handleFormValue(e) }
                        ></textarea>
                    <span>Enviar</span>
                </form>
            </Section>
        </ContactoContenedor>
    );
};

export default Contact;

