import React from "react";
import { useCounter } from "../../hooks/useCounter";
import { useFetch } from "../../hooks/useFetch";
import "../02-useEffect/effect.css";

export const MultipleCustomHooks = () => {

  const {counter, increment, decrement} = useCounter(1);
    
  const { loading, data } = useFetch(`https://www.breakingbadapi.com/api/quotes/${counter}`);

  const {author, quote} = !!data && data[0];

  return (
    <div>
      <h1>BreakingBad Quotes</h1>
      <hr />

      {loading ? (
        <div className="alert alert-info text-center">Loading...</div>
      ) : (
        <figure>
          <blockquote className="blockquote">
            <p>{quote}</p>
          </blockquote>
          <figcaption className="blockquote-footer">
            {author}
          </figcaption>
        </figure>
      )}
      <button onClick={decrement} className="btn btn-info">Anterior frase</button>
      <button onClick={increment} className="btn btn-primary">Siguiente frase</button>
    </div>
  );
};
