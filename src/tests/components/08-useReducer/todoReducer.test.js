import {todoReducer} from '../../../components/08-useReducer/todoReducer'
import { demoTodos } from '../../fixtures/demoTodos';




describe('Pruebas en todoReducer', () => {
    test('should el estado por defecto', () => {
       const state = todoReducer(demoTodos, {});
       
       expect(state).toEqual(demoTodos);
    });

    test('debe de agregar un todo', () => {

        const newTodo = {
            id: 3,
            desc: 'Aprender vue',
            done: false
        };

        const action = {type:'add', payload: newTodo}

        const state = todoReducer(demoTodos, action);
        
        //console.log(state);

        expect(state.length).toBe(3);
        expect(state).toEqual([...demoTodos, newTodo]);
     });

     test('debe de eliminar un todo', () => {

        const action = {type:'delete', payload: 1}

        const state = todoReducer(demoTodos, action);
        
        expect(state.length).toBe(1);
        expect(state).toEqual([demoTodos[1]]);
        //expect(state).toEqual([...demoTodos, firstTodo]);
     });

     test('debe de hacer el Toogle del TODO', () => {

        const state = todoReducer(demoTodos, {});
        expect(state[0].done).toBe(false);

        const action = {type:'toggle', payload: 1}
        const state2 = todoReducer(demoTodos, action);
        expect(state2[0].done).toBe(true);
        
     });
    
})
