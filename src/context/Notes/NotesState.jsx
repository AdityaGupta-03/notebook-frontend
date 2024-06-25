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

    const host = "http://localhost:5000/api/notes";
    const authToken = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY2N2E5NTExN2IwM2QyZjY3MWVkZDE0NSIsImlhdCI6MTcxOTMwOTYyNn0.GL-TcT3cARXN7yDH3pATo9PCUBYNimTPvOAkEjbFZzc";

    const initialNotes = [];
    const [notes,setNotes] = useState(initialNotes);

    // Fetch All Notes
    const getNotes = async ()=>{
        // API Call: To get all the notes
        const url = `${host}/fetchNotes`;
        const response = await fetch(url, {
            method: "GET", 
            headers: {
              "Content-Type": "application/json",
              "auth-token": authToken
            }
        });
        const json = await response.json();
        console.log(json);
        setNotes(json);
    }

    // Adding New Note
    const addNote = async (title, description, tag) => {
        // API Call: To Add a note
        const url = `${host}/newNote`;
        const response = await fetch(url, {
            method: "POST", 
            headers: {
              "Content-Type": "application/json",
              "auth-token": authToken
            },
            body: JSON.stringify({title,description,tag}), 
        });
        const json = response.json();
        console.log(json);

        const newNote = {
            "_id": "6669b0abc074a0fe305217a4",
            "user": "666827070bb290a7ad4e7e64",
            "title": title,
            "description": description,
            "tag": tag,
            "date": "2024-06-12T14:28:59.572Z",
            "__v": 0
        }
        // setNotes([...notes, newNote]);
        setNotes(notes.concat(newNote));
    }

    const editNote = async (id, title, description, tag) => {
        // API Call: To Edit a note
        const noteID = "66660645fbfa5e1c79cd5358";
        const url = `${host}/updateNote/${noteID}`;

        const response = await fetch(url, {
            method: "PUT", 
            headers: {
              "Content-Type": "application/json",
              "auth-token": authToken
            },
            body: JSON.stringify(notes), 
        });
        const json = response.json();
        console.log(json);

        setNotes(notes.map(note => {
            if(note._id === id){
                note.title = title;
                note.description = description;
                note.tag = tag;
            }
            return note;
        }));
    }

    const deleteNote = async (id) => {
        // API Call: To Delete a Note
        const url = `${host}/deleteNote/${id}`;
        const response = await fetch(url, {
            method: "DELETE", 
            headers: {
              "Content-Type": "application/json",
              "auth-token": authToken
            }
        });
        const json = response.json();
        console.log(json);
        setNotes(notes.filter(note => note._id!== id));
    }

    return (
        // <NotesContext.Provider value={{state:state, updateAge:update, updateName:changeName}}>
        <NotesContext.Provider value={{notes, addNote, deleteNote, editNote, getNotes}}>
            {props.children}
        </NotesContext.Provider>
    )
}

export default NotesState;