import { mount, shallow } from 'enzyme';
import React from 'react';
import { HomeScreen } from '../../../components/09-useContext/HomeScreen';
import { UserContext } from '../../../components/09-useContext/UserContext';

describe('Pruebas en HomeScreen', () => {

    const user = {
        name: 'Lsianny',
        email:'l.andrespg11@gmail.com'
    }

    const wrapper = mount(
    <UserContext.Provider value={{user}}>
        <HomeScreen/>
    </UserContext.Provider>
    
    )

    test('debe de mostrar el componente correctamente', () => {
        
        expect(wrapper).toMatchSnapshot();
    })
    
})
