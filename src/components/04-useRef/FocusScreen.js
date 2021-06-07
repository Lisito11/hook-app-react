import React, { useRef } from 'react'
import "../02-useEffect/effect.css";

export const FocusScreen = () => {

    const inputRef = useRef();
    
    const handleClick = (e) => {
        inputRef.current.select();
    }
    return (
        <div>
            <h1>FocusScreen</h1>

            <input
                ref={inputRef}
                className="form-control"
                placeholder="Su nombre"
            />
            <button 
            className="btn btn-outline-primary mt-5"
            onClick={handleClick}
            >Focus
            </button>
        </div>
    )
}
