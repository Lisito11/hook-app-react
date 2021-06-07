import React from "react";
import ReactDOM from "react-dom";
//import { FormWithCustomHook } from './components/02-useEffect/FormWithCustomHook';
//import { MultipleCustomHooks } from './components/03-examples/MultipleCustomHooks';
//import { FocusScreen } from './components/04-useRef/FocusScreen';
//import { RealExampleRef } from './components/04-useRef/RealExampleRef';
//import { CounterApp } from './components/01-useState/CounterApp';
//import { CounterWithCustomHook } from './components/01-useState/CounterWithCustomHook';
//import { SimpleForm } from './components/02-useEffect/SimpleForm';
//import { HookApp } from './HookApp';
//import "./components/02-useEffect/effect.css";
//import { CallbackHook } from './components/06-memos/CallbackHook';
//import { Padre } from './components/07-tarea-memo/Padre';
//import { MemoHook } from './components/06-memos/MemoHook';
//import { Layout } from './components/05-useLayoutEffect/Layout';
//import { Memorize } from './components/06-memos/Memorize';
// import './components/08-useReducer/intro-reducer';
//import { TodoApp } from './components/08-useReducer/TodoApp';
import { MainApp } from "./components/09-useContext/MainApp";

ReactDOM.render(<MainApp />, document.getElementById("root"));

const arr = [
  { nombre: "Lisanny", url: "https://klk.com" },
  { nombre: "Andres", url: "https://klkwawawa.com" },
];

<table>
  <thead>
    <th>Column nombre</th>
    <th>Column url</th>
  </thead>
  <tr>
  {
    
    arr.map(({nombre, url}) => (
      <>
        <td>{nombre}</td>
        <td>{url}</td>
      </>
    ))
  }
  </tr>
</table>;
