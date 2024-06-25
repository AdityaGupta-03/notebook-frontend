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

    const [notes,setNotes] = useState([]);

    const getNotes = async ()=>{
        // Backend API Call: to get all the notes from the Database
        const url = `${host}/fetchNotes`;
        const response = await fetch(url, {
            method: "GET", 
            headers: {
              "Content-Type": "application/json",
              "auth-token": authToken
            }
        });
        const json = await response.json();

        // Displaying all the notes of the User
        setNotes(json);
    }

    const addNote = async (title, description, tag) => {
        // Backend API Call: to add note in the Database
        const url = `${host}/newNote`;
        const response = await fetch(url, {
            method: "POST", 
            headers: {
              "Content-Type": "application/json",
              "auth-token": authToken
            },
            body: JSON.stringify({title,description,tag})
        });
        const json = await response.json();

        const newNote = {
            "_id": json._id,  // Use the ID from the response
            "user": json.user, // Use the user from the response
            "title": json.title,
            "description": json.description,
            "tag": json.tag,
            "date": json.date, // Use the date from the response
            "__v": json.__v    // Use the version from the response
        };

        // Showing the updated notes at the frontend
        // setNotes([...notes, newNote]);
        setNotes(notes.concat(newNote));
    }

    const deleteNote = async (noteID) => {
        // Backend API Call: to delete the note from the Database
        const url = `${host}/deleteNote/${noteID}`;
        const response = await fetch(url, {
            method: "DELETE", 
            headers: {
              "Content-Type": "application/json",
              "auth-token": authToken
            }
        });
        const json = response.json();
        console.log(json.success);

        // Showing the updated notes at the frontend
        setNotes(notes.filter(note => note._id!== noteID));
    }

    const editNote = async (noteID, title, description, tag) => {
        // Backend API Call: To Edit a note;
        const url = `${host}/updateNote/${noteID}`;
        const response = await fetch(url, {
            method: "PUT", 
            headers: {
              "Content-Type": "application/json",
              "auth-token": authToken
            },
            body: JSON.stringify({title,description,tag})
        });
        const json = response.json();
        console.log(json);

        // Showing the updated notes at the frontend
        setNotes(notes.map(note => {
            if(note._id === noteID){
                note.title = title;
                note.description = description;
                note.tag = tag;
            }
            return note;
        }));
    }

    return (
        // <NotesContext.Provider value={{state:state, updateAge:update, updateName:changeName}}>
        <NotesContext.Provider value={{notes, addNote, deleteNote, editNote, getNotes}}>
            {props.children}
        </NotesContext.Provider>
    )
}

export default NotesState;