import React from 'react';
import NotesContext from './NotesContext';

const NotesState = (props) => {
    const state = {
        "name": "Aditya",
        "age": 20
    }

    return (
        <NotesContext.Provider value={state}>
            {props.children}
        </NotesContext.Provider>
    )
}

export default NotesState;