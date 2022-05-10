import React, {useState} from 'react';

const Contacto = () => {

    const [formMessage, setFormMessage]  = useState({});

    const handleForm = (e) => {
        const updateMessage = {
            ...formMessage,
            [e.target.name]: e.target.value
        }
        setFormMessage(updateMessage);
    }

    const sendForm = () => {
        console.log(formMessage)
    }

    return (
        <div>
            <h1>Página de contacto</h1>
            <form >
                <input 
                    type="text" 
                    name="nombre" 
                    placeholder="Nombre y Apellidos"
                    onBlur={(e) => handleForm(e)}
                    /><br />
                    
                <input 
                    type="email"
                    name="email" 
                    placeholder="Correo"
                    onBlur={(e) => handleForm(e)}
                    /><br />
                <textarea name="mensaje" cols="30" rows="10" onBlur={(e) => handleForm(e)}></textarea><br />
                <span onClick={() => sendForm() } >Enviar</span>
            </form>
        </div>
    )
};

export default Contacto;