import React, { useState, useMemo } from 'react';
import { procesoPesado } from '../../helpers/procesoPesado';
import { useCounter } from '../../hooks/useCounter';

import '../02-useEffect/effect.css';


export const MemoHook = () => {

    const { counter, increment } =  useCounter( 5000 );
    const [ show, setShow ] = useState(true);

    const mempoProcesoPesado = useMemo(() => procesoPesado(counter), [counter])

    return (
        <div>
            <h1>MemoHook</h1>
            <h1>Counter: <small>{ counter }</small> </h1>
            <hr />

            <p>{mempoProcesoPesado}</p>
            <button 
                className="btn btn-primary"
                onClick={ increment }
            >
                +1
            </button>

            <button
                className="btn btn-outline-primary ml-3"
                onClick={ () => {
                    setShow( !show );
                }}
            >
                Show/Hide { JSON.stringify( show ) }
            </button>

        </div>
    )
}
