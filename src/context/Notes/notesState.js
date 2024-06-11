import React, { useState } from 'react';
import NotesContext from './NotesContext';

const NotesState = (props) => {
    const s1 = {
        "name": "Aditya",
        "age": 18
    }
    const [state, setState] = useState(s1);

    const update = ()=>{
        setTimeout(() => {
            setState(prevState => ({...prevState, age: 25}))
        }, 1000);
    }

    const changeName = ()=>{
        setTimeout(() => {
            setState(prevState => ({...prevState, name: "Addy"}))
        }, 1000);
        
    }
    return (
        <NotesContext.Provider value={{state:state, updateAge:update, updateName:changeName}}>
            {props.children}
        </NotesContext.Provider>
    )
}

export default NotesState;