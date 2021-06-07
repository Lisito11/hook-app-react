import React, { useEffect, useState } from 'react'
import './effect.css'
import { Message } from './Message';
export const SimpleForm = () => {


    const [formState, setFormState] = useState({
        name: '', 
        email: ''
    });

    const {name, email} = formState;

    const handleInputChange = ({target}) =>{
        setFormState({
            ...formState,
            [target.name]: target.value
        })
    }

    //No importa que cambie se va a ejecutar
    //Nota trabajar los efectos de manera individual
    /*useEffect(() => {
        console.log('hey!');
    });*/

    //Solo se ejecuta cuando carga por primera vez el componente
    useEffect(() => {
        //console.log('hey!');
    }, []);

    //Cualquier cambio que susceda en el formsState
    useEffect(() => {
        //console.log('formsState cambió');
    }, [formState]);

    //Cualquier cambio que susceda en el email
    useEffect(() => {
        //console.log('email cambió');
    }, [email]);

    return (
        <>
            <h1>useEffect</h1>
            <hr/>

            <div className="form-group">
                <input
                    type="text"
                    name="name"
                    className="form-control"
                    placeholder="Tu nombre"
                    autoComplete="off"
                    value={name}
                    onChange={handleInputChange}
                />
            </div>
            <br/>
            <div className="form-group">
                <input
                    type="text"
                    name="email"
                    className="form-control"
                    placeholder="Tu email"
                    autoComplete="off"
                    value={email}
                    onChange={handleInputChange}
                />
            </div>

            {(name === "123") && <Message/>}
        </>
    )
}
