import React, {useLayoutEffect, useRef, useState} from "react";
import { useCounter } from "../../hooks/useCounter";
import { useFetch } from "../../hooks/useFetch";
import "../02-useEffect/effect.css";

export const Layout = () => {

  const {counter, increment, decrement} = useCounter(1);
  const { data } = useFetch(`https://www.breakingbadapi.com/api/quotes/${counter}`);

  const {quote} = !!data && data[0];

  const pTag = useRef();
  const [boxSize, setBoxSize] = useState({})

  useLayoutEffect(() => {
      setBoxSize(pTag.current.getBoundingClientRect());
  }, [quote])

  return (
    <div>
      <h1>BreakingBad Quotes</h1>
      <hr />

      <figure>
          <blockquote className="blockquote">
            <p ref={pTag}>{quote}</p>
          </blockquote>
      </figure>

      <pre>
          {JSON.stringify(boxSize,null,3)}
      </pre>

      <button onClick={decrement} className="btn btn-info">Anterior frase</button>
      <button onClick={increment} className="btn btn-primary">Siguiente frase</button>
    </div>
  );
};
