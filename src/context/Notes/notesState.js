import React, { useState } from 'react';
import NotesContext from './NotesContext';

const NotesState = (props) => {
    // const s1 = {
    //     "name": "Aditya",
    //     "age": 18
    // }
    // const [state, setState] = useState(s1);

    // const update = ()=>{
    //     setTimeout(() => {
    //         setState(prevState => ({...prevState, age: 25}))
    //     }, 1000);
    // }

    // const changeName = ()=>{
    //     setTimeout(() => {
    //         setState(prevState => ({...prevState, name: "Addy"}))
    //     }, 1000);

    // }

    const initialNotes = [
        {
            "_id": "6669b0abc074a0fe305217a4",
            "user": "666827070bb290a7ad4e7e64",
            "title": "Shopping",
            "description": "Buy Tomatoes, Dhaniya",
            "tag": "General",
            "date": "2024-06-12T14:28:59.572Z",
            "__v": 0
        },
        {
            "_id": "6669b0b9c074a0fe305217a6",
            "user": "666827070bb290a7ad4e7e64",
            "title": "Cutting",
            "description": "Got to Hair Saloon",
            "tag": "General",
            "date": "2024-06-12T14:29:13.859Z",
            "__v": 0
        },
        {
            "_id": "6669b0cfc074a0fe305217a8",
            "user": "666827070bb290a7ad4e7e64",
            "title": "Market",
            "description": "Buy Milk Bread",
            "tag": "General",
            "date": "2024-06-12T14:29:35.978Z",
            "__v": 0
        },
        {
            "_id": "6669b0ddc074a0fe305217aa",
            "user": "666827070bb290a7ad4e7e64",
            "title": "Scooty",
            "description": "Petrol and service",
            "tag": "General",
            "date": "2024-06-12T14:29:49.572Z",
            "__v": 0
        }
    ];

    const [notes,setNotes] = useState(initialNotes);
    return (
        // <NotesContext.Provider value={{state:state, updateAge:update, updateName:changeName}}>
        <NotesContext.Provider value={{notes, setNotes}}>
            {props.children}
        </NotesContext.Provider>
    )
}

export default NotesState;